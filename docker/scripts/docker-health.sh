#!/bin/bash
# scripts/docker-health.sh - Health check script

echo "🏥 PDF2MD Health Check"
echo "====================="

# Check if containers are running
echo "Container Status:"
docker compose ps

echo ""
echo "Application Health:"
if curl -f http://localhost:3000/api/health >/dev/null 2>&1; then
    echo "✅ Application is healthy"
else
    echo "❌ Application is not responding"
fi

echo ""
echo "Nginx Status:"
if curl -f http://localhost >/dev/null 2>&1; then
    echo "✅ Nginx is healthy"
else
    echo "❌ Nginx is not responding"
fi
