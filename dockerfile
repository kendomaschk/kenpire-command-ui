# KenPire Mesh Dashboard – Phoenix UI Build
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy everything in your local folder to the container
COPY . .

# Install dependencies and build the frontend
RUN npm install && npm run build

# Expose the default Vite preview port
EXPOSE 4173

# Start the preview server (or change to `serve -s dist`)
CMD ["npm", "run", "preview"]
