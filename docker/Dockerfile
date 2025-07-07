# Multi-stage Dockerfile for pdf2md Next.js application

# Base stage with Node.js
FROM node:20-alpine AS base

# Install system dependencies needed for pdf processing
RUN apk add --no-cache \
    libc6-compat \
    curl \
    && rm -rf /var/cache/apk/*

WORKDIR /app

# Copy package files from pdf2md directory
COPY pdf2md/package*.json ./
COPY pdf2md/pnpm-lock.yaml* ./

# Install pnpm globally
RUN npm install -g pnpm

# Dependencies stage
FROM base AS deps
# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Development stage
FROM base AS development
COPY --from=deps /app/node_modules ./node_modules
COPY pdf2md/ .

# Set environment variables
ENV NODE_ENV=development
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

# Expose port
EXPOSE 3000

# Start development server
CMD ["pnpm", "dev"]

# Builder stage
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY pdf2md/ .

# Set environment variables for build
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Add standalone output configuration to next.config.mjs before building
RUN sed -i 's/const nextConfig = {/const nextConfig = {\n  output: "standalone",/' next.config.mjs

# Build the application
RUN pnpm build

# Production stage
FROM base AS production

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Health check - checking the main page since we don't have a specific health endpoint
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/ || exit 1

# Start the application
CMD ["node", "server.js"]
