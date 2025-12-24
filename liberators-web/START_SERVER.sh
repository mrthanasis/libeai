#!/bin/bash

# Kill any existing processes on port 3000
echo "🧹 Cleaning port 3000..."
lsof -ti:3000 | xargs kill -9 2>/dev/null

# Remove build cache
echo "🗑️  Clearing .next cache..."
rm -rf .next

# Start the dev server
echo "🚀 Starting Next.js dev server..."
echo ""
npm run dev




