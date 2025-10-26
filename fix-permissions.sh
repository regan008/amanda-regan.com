#!/bin/bash

echo "🔧 Fixing file permissions for web deployment..."

# Fix permissions for directories (755 = rwxr-xr-x)
echo "📁 Fixing directory permissions..."
find . -type d -exec chmod 755 {} \;

# Fix permissions for files (644 = rw-r--r--)
echo "📄 Fixing file permissions..."
find . -type f -exec chmod 644 {} \;

# Make scripts executable
echo "⚡ Making scripts executable..."
find . -name "*.sh" -exec chmod +x {} \;
find . -name "deploy" -exec chmod +x {} \;

# Fix specific Hugo-related permissions
echo "🎯 Fixing Hugo-specific permissions..."
if [ -d "public" ]; then
    chmod -R 755 public/
    find public/ -type f -exec chmod 644 {} \;
fi

if [ -d "resources" ]; then
    chmod -R 755 resources/
    find resources/ -type f -exec chmod 644 {} \;
fi

echo "✅ All permissions have been fixed!"
echo "📊 Summary of current permissions:"
echo "Directories: $(find . -type d | wc -l | tr -d ' ') files with 755 permissions"
echo "Files: $(find . -type f | wc -l | tr -d ' ') files with 644 permissions"
echo "Scripts: $(find . -name "*.sh" -o -name "deploy" | wc -l | tr -d ' ') executable scripts"
