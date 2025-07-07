#!/bin/bash
# scripts/docker-logs.sh - View container logs

echo "📋 PDF2MD Container Logs"
echo "========================"

if [ "$1" = "app" ]; then
    docker compose logs -f pdf2md-app
elif [ "$1" = "nginx" ]; then
    docker compose logs -f nginx
elif [ "$1" = "dev" ]; then
    docker compose logs -f pdf2md-dev
else
    echo "Usage: $0 [app|nginx|dev]"
    echo "Available containers:"
    docker compose ps
fi
