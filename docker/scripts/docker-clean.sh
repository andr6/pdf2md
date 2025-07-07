#!/bin/bash
# scripts/docker-clean.sh - Clean up Docker resources

echo "🧹 Cleaning up PDF2MD Docker resources..."

# Stop and remove containers
docker compose down -v

# Remove images
docker rmi pdf2md:dev pdf2md:prod 2>/dev/null || true

# Remove dangling images
docker image prune -f

# Remove unused volumes
docker volume prune -f

echo "✅ Cleanup completed!"
