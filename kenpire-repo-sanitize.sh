#!/usr/bin/env bash
set -euo pipefail
R="${1:-README.md}"
rm -f netlify-badge-examples.png 2>/dev/null || true
rm -rf .netlify examples example starter demo demos 2>/dev/null || true
[ -f "$R" ] && sed -i '/netlify\.com\|badge\.svg\|deploy-status/d' "$R" 2>/dev/null || true
