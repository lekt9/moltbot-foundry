FROM oven/bun:1 AS base
WORKDIR /app

# Install dependencies
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# Copy source
COPY src ./src

# Copy web dist if it exists (for static serving)
COPY web/dist ./web/dist

# Expose port
EXPOSE 4402

# Set environment
ENV PORT=4402

# Start server
CMD ["bun", "run", "src/index.ts"]
