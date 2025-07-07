# PDF2MD Docker Setup

This Docker Compose setup provides a complete containerized environment for the PDF2MD application with development, production, and monitoring configurations.

## 📚 Original PDF2MD Projects

This Docker setup is based on the following original PDF2MD projects:

- [PDF to Markdown Online Converter](https://www.pdftomarkdown.co/) - The web application
- [GitHub Repository](https://github.com/mrmps/pdf2md) - The original source code

## Quick Start

### Prerequisites

- Docker & Docker Compose installed
- Git (to clone the repository)

### 1. Clone and Setup

```bash
git clone https://github.com/mrmps/pdf2md.git
cd pdf2md

# Make scripts executable and create directories
make install
```

### 2. Development Environment

```bash
# Start development environment
make dev

# Or manually:
docker compose --profile dev up --build
```

The application will be available at `http://localhost:3000`

### 3. Production Environment

```bash
# Start production environment with Nginx
make prod

# Or manually:
docker compose --profile production up -d --build
```

The application will be available at `http://localhost` (port 80)

## 📋 Available Commands

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `make dev`        | Start development environment |
| `make prod`       | Start production environment  |
| `make build`      | Build Docker images           |
| `make clean`      | Clean up Docker resources     |
| `make logs app`   | View application logs         |
| `make logs nginx` | View Nginx logs               |
| `make health`     | Check application health      |

## 🏗️ Architecture

### Services

1. **pdf2md-app** (Production)

   - Multi-stage Docker build
   - Optimized Next.js production build
   - Non-root user for security
   - Health checks included

2. **pdf2md-dev** (Development)

   - Live reload with volume mounting
   - Development dependencies included
   - Hot module replacement

3. **nginx** (Production Profile)

   - Reverse proxy and load balancer
   - SSL termination ready
   - Static file caching
   - Rate limiting
   - Gzip compression

4. **healthcheck** (Monitoring Profile)
   - Continuous health monitoring
   - Automated alerts capability

### Profiles

- **Default**: Basic application
- **dev**: Development environment
- **production**: Production with Nginx
- **monitoring**: Health monitoring

## 🔧 Configuration

### Environment Variables

Create these files in your project root:

- `.env.local` - Development settings
- `.env.production` - Production settings
- `.env.docker` - Docker-specific settings

Example `.env.local`:

```env
NODE_ENV=development
PORT=3000
NEXT_TELEMETRY_DISABLED=1
NEXT_PUBLIC_MAX_FILE_SIZE=10485760
```

### Nginx Configuration

The Nginx configuration includes:

- Reverse proxy to Next.js app
- Static file caching
- Rate limiting
- SSL/TLS ready (commented out)
- Health check endpoints

To enable HTTPS:

1. Uncomment the SSL server block in `nginx/nginx.conf`
2. Add SSL certificates to `nginx/ssl/`
3. Update server_name directive

## 🛠️ Customization

### Docker Build Optimization

The Dockerfile uses multi-stage builds:

1. **base**: Common Node.js setup
2. **deps**: Dependency installation
3. **development**: Dev environment
4. **builder**: Production build
5. **production**: Final optimized image

### Volume Mounts

Development environment mounts:

- Source code: `.:/app`
- Node modules: `/app/node_modules`
- Next.js build: `/app/.next`

### Networking

All services communicate through the `pdf2md-network` bridge network for isolation and security.

## 🚨 Troubleshooting

### Common Issues

1. **Port already in use**

   ```bash
   # Check what's using the port
   lsof -i :3000
   # Kill the process or change port in docker-compose.yml
   ```

2. **Permission denied**

   ```bash
   # Make scripts executable
   chmod +x scripts/*.sh
   ```

3. **Build failures**

   ```bash
   # Clean Docker cache
   docker system prune -a
   make clean
   ```

4. **Memory issues**
   ```bash
   # Increase Docker memory limit
   # Add to .env.docker:
   NODE_OPTIONS=--max-old-space-size=4096
   ```

### Health Checks

Check application health:

```bash
# Manual health check
curl http://localhost:3000/api/health

# Automated monitoring
make health
```

### Logs

View logs for debugging:

```bash
# Application logs
make logs app

# All services
docker compose logs -f

# Specific service
docker compose logs nginx
```

## 🔒 Security Considerations

1. **Non-root user**: Production container runs as `nextjs` user
2. **Network isolation**: Services communicate through private network
3. **Rate limiting**: Nginx includes API rate limiting
4. **SSL ready**: HTTPS configuration available
5. **Health checks**: Built-in monitoring and restart policies

## 📊 Monitoring

### Built-in Health Checks

- Container-level health checks
- Application endpoint monitoring
- Nginx status monitoring

### Metrics Collection

To add metrics collection:

1. Enable monitoring profile
2. Add Prometheus/Grafana services
3. Configure metrics endpoints

## 🚀 Deployment

### Development Deployment

```bash
# Start with hot reload
make dev
```

### Production Deployment

```bash
# Build and start production
make prod

# Scale if needed
docker compose up --scale pdf2md-app=3
```

### Cloud Deployment

For cloud deployment:

1. Update environment variables
2. Configure SSL certificates
3. Set up load balancing
4. Configure monitoring

## 📚 Additional Resources

- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Next.js Docker Documentation](https://nextjs.org/docs/deployment#docker-image)
- [Nginx Configuration Guide](https://nginx.org/en/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Test with Docker environment
4. Submit a pull request

## 📄 License

This Docker configuration is provided under the same license as the PDF2MD project.
