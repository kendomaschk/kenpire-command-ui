#!/usr/bin/env bash
set -euo pipefail
detect_lang(){ if [ -f package.json ]; then echo node; elif ls *.py 1>/dev/null 2>&1 || [ -f requirements.txt ] || [ -f pyproject.toml ]; then echo python; elif [ -f go.mod ] || ls *.go 1>/dev/null 2>&1; then echo go; elif [ -f Cargo.toml ] || ls *.rs 1>/dev/null 2>&1; then echo rust; elif [ -f pom.xml ] || [ -f build.gradle* ]; then echo java; else echo unknown; fi; }
lang=$(detect_lang)
case "$lang" in
  node) npm install --ignore-scripts --no-audit --no-fund || true ;;
  python) [ ! -f requirements.txt ] && ( ( [ -x venv/bin/pip ] && venv/bin/pip freeze || pip freeze ) > requirements.txt || true ) ;;
  go) (go mod init kenpire 2>/dev/null || true) && (go mod tidy || true) ;;
  rust) cargo generate-lockfile || true ;;
  java) [ -f pom.xml ] && (mvn -q -DskipTests dependency:resolve || true) || true ;;
esac
# SBOM if syft is present; otherwise skip quietly
if command -v syft >/dev/null 2>&1; then syft dir:. -o cyclonedx-json > sbom.cdx.json || true; fi
