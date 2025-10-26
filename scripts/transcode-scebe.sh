#!/usr/bin/env bash
# transcode-scebe.sh
# Usage:
#   ./scripts/transcode-scebe.sh /path/to/input-file.mp4
#   ./scripts/transcode-scebe.sh /path/to/input.mov /path/to/output-file.mp4
#
# What it does:
# - Re-encodes video to H.264 (AVC) and audio to AAC (Safari-compatible)
# - Writes moov atom at start with -movflags +faststart (streamable)
# - Enforces yuv420p pixel format (required by many Apple devices)
# - Default CRF 20 (adjust CRF higher to reduce size or lower to increase quality)
#
# Notes:
# - Requires ffmpeg on the PATH
# - Large output files may exceed GitHub repo size limits; consider pushing to a CDN or S3
set -euo pipefail

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg not found in PATH. Install ffmpeg first." >&2
  exit 2
fi

if [ "$#" -lt 1 ]; then
  echo "Usage: $0 <input-file> [output-file] [max-width]" >&2
  echo "Example: $0 assets/video/awards/scebe-ceremony.mp4 assets/video/awards/scebe-ceremony-safari.mp4 1280" >&2
  exit 1
fi

IN="$1"
OUT="${2:-}"
MAXW="${3:-}"

if [ ! -f "$IN" ]; then
  echo "Input file not found: $IN" >&2
  exit 1
fi

if [ -z "$OUT" ]; then
  dir=$(dirname "$IN")
  base=$(basename "$IN")
  name="${base%.*}"
  OUT="$dir/${name}-safari.mp4"
fi

CRF="${CRF:-20}"
PRESET="${PRESET:-medium}"

VF=""
if [ -n "$MAXW" ]; then
  VF="scale='min(iw,${MAXW})':'trunc(ow/a/2)*2'"
fi

echo "Transcoding:" 
echo "  input:  $IN" 
echo "  output: $OUT" 
echo "  crf:    $CRF" 
echo "  preset: $PRESET" 
if [ -n "$MAXW" ]; then 
echo "  maxw:   $MAXW" 
fi
echo

set -x
if [ -n "$VF" ]; then
  ffmpeg -hide_banner -y -i "$IN" \
    -c:v libx264 -preset "$PRESET" -crf "$CRF" -profile:v high -level 4.0 -pix_fmt yuv420p \
    -vf "$VF" \
    -movflags +faststart \
    -c:a aac -b:a 128k -ac 2 \
    "$OUT"
else
  ffmpeg -hide_banner -y -i "$IN" \
    -c:v libx264 -preset "$PRESET" -crf "$CRF" -profile:v high -level 4.0 -pix_fmt yuv420p \
    -movflags +faststart \
    -c:a aac -b:a 128k -ac 2 \
    "$OUT"
fi
set +x

echo
echo "Done. Output file: $OUT"
echo "Check codecs with: ffprobe -hide_banner -show_streams -select_streams v:0 \"$OUT\""