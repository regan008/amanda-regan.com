#!/bin/bash

echo "🔍 Checking current file permissions..."

echo "📁 Directory permissions (should be 755):"
find . -type d -exec ls -ld {} \; | head -10

echo ""
echo "📄 File permissions (should be 644):"
find . -type f -exec ls -l {} \; | head -10

echo ""
echo "⚡ Executable files:"
find . -type f -perm +111 -exec ls -l {} \;

echo ""
echo "📊 Permission summary:"
echo "Directories with 755: $(find . -type d -exec stat -f %Lp {} \; | grep -c '755')"
echo "Files with 644: $(find . -type f -exec stat -f %Lp {} \; | grep -c '644')"
echo "Files with other permissions: $(find . -type f -exec stat -f %Lp {} \; | grep -v '644' | wc -l | tr -d ' ')"
echo "Directories with other permissions: $(find . -type d -exec stat -f %Lp {} \; | grep -v '755' | wc -l | tr -d ' ')"
