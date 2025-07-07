#!/bin/bash
# scripts/docker-build.sh - Build Docker images

echo "🔨 Building PDF2MD Docker images..."

# Build development image
docker build --target development -t pdf2md:dev .

# Build production image
docker build --target production -t pdf2md:prod .

echo "✅ Docker images built successfully!"
