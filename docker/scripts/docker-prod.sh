#!/bin/bash
# scripts/docker-prod.sh - Production environment setup

echo "🚀 Starting PDF2MD Production Environment..."

# Load environment variables
if [ -f .env.docker ]; then
    export $(cat .env.docker | xargs)
fi

# Build and start production containers
docker compose --profile production up -d --build

echo "✅ Production environment started!"
echo "📱 Application: http://localhost"
echo "🔍 Health check: http://localhost/api/health"
