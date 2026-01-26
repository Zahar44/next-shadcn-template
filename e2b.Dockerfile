FROM node:20-bullseye

WORKDIR /home/user

COPY . .

RUN npm ci || npm install

# Pre-generate Next.js cache for faster dev startup
RUN npm run build || true

EXPOSE 3000
