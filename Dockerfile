# Stage 1: Build the Astro site
FROM node:lts AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Run the application
FROM node:lts-alpine
WORKDIR /app
# Copy the built application from the builder stage
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package*.json ./
# The server runs on port 4321 by default for Astro SSR
ENV PORT=4321
EXPOSE 4321
CMD ["npm", "start"]
