#!/bin/bash
# scripts/docker-dev.sh - Development environment setup

echo "🚀 Starting PDF2MD Development Environment..."

# Load environment variables
if [ -f .env.docker ]; then
    export $(cat .env.docker | xargs)
fi

# Build and start development containers
docker compose --profile dev up --build
