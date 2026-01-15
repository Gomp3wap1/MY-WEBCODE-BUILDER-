# yt-dlp Complete VPS User Guide

A **complete, all-in-one Markdown documentation** for installing, configuring, and using **yt-dlp** on VPS and servers.

---

## Table of Contents

1. What is yt-dlp
2. Supported Operating Systems
3. Requirements
4. Legal Notice
5. Installation Methods

   * Automatic Universal Script
   * Manual Installation
   * Python (pip) Installation
6. Updating yt-dlp
7. Basic Usage
8. Advanced Usage
9. Audio Extraction
10. Video Quality Selection
11. Playlist & Channel Downloads
12. Subtitles & Metadata
13. Authentication & Cookies
14. Proxy & VPN Usage
15. Automation with Cron
16. Troubleshooting
17. Uninstalling yt-dlp
18. Best Practices
19. Security Tips
20. Useful Resources

---

## 1. What is yt-dlp

**yt-dlp** is a free, open-source command-line tool used to download videos and audio from YouTube and thousands of other websites. It is a community-maintained fork of `youtube-dl` with faster updates and more features.

---

## 2. Supported Operating Systems

✅ Linux VPS (recommended)

* Ubuntu / Debian
* CentOS / AlmaLinux / Rocky Linux
* Amazon Linux
* Arch Linux

⚠️ Limited

* macOS (manual install)
* Windows (PowerShell script required)

---

## 3. Requirements

* Root or sudo access
* Internet connection
* 100MB free disk space
* FFmpeg (for merging and audio extraction)

---

## 4. Legal Notice

⚠️ **Important**

yt-dlp is a tool. Downloading copyrighted content without permission may violate:

* Website Terms of Service
* Local copyright laws

You are responsible for how you use this software.

---

## 5. Installation Methods

### 5.1 Automatic Universal VPS Install (Recommended)

```bash
#!/bin/bash
set -e

if command -v apt >/dev/null; then
  sudo apt update -y
  sudo apt install -y curl wget ffmpeg python3
elif command -v dnf >/dev/null; then
  sudo dnf install -y curl wget ffmpeg python3
elif command -v yum >/dev/null; then
  sudo yum install -y curl wget ffmpeg python3
elif command -v pacman >/dev/null; then
  sudo pacman -Sy --noconfirm curl wget ffmpeg python
fi

sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp \
-o /usr/local/bin/yt-dlp

sudo chmod a+rx /usr/local/bin/yt-dlp

yt-dlp --version
```

---

### 5.2 Manual Installation

```bash
curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o yt-dlp
chmod +x yt-dlp
mv yt-dlp /usr/local/bin/
```

---

### 5.3 Python (pip) Installation

```bash
pip install -U yt-dlp
```

⚠️ Not recommended for servers due to dependency issues.

---

## 6. Updating yt-dlp

```bash
yt-dlp -U
```

---

## 7. Basic Usage

Download a video:

```bash
yt-dlp VIDEO_URL
```

Show available formats:

```bash
yt-dlp -F VIDEO_URL
```

---

## 8. Advanced Usage

Download best video + audio:

```bash
yt-dlp -f bestvideo+bestaudio VIDEO_URL
```

Limit download speed:

```bash
yt-dlp --limit-rate 1M VIDEO_URL
```

---

## 9. Audio Extraction

Convert to MP3:

```bash
yt-dlp -x --audio-format mp3 VIDEO_URL
```

High-quality audio:

```bash
yt-dlp -x --audio-quality 0 VIDEO_URL
```

---

## 10. Video Quality Selection

Download 1080p:

```bash
yt-dlp -f "bv*[height=1080]+ba" VIDEO_URL
```

Download 720p:

```bash
yt-dlp -f "bv*[height<=720]+ba" VIDEO_URL
```

---

## 11. Playlist & Channel Downloads

Download playlist:

```bash
yt-dlp PLAYLIST_URL
```

Download entire channel:

```bash
yt-dlp -ciw CHANNEL_URL
```

---

## 12. Subtitles & Metadata

Download subtitles:

```bash
yt-dlp --write-subs --sub-lang en VIDEO_URL
```

Embed metadata:

```bash
yt-dlp --embed-metadata VIDEO_URL
```

---

## 13. Authentication & Cookies

Export cookies from browser and use:

```bash
yt-dlp --cookies cookies.txt VIDEO_URL
```

---

## 14. Proxy & VPN Usage

```bash
yt-dlp --proxy socks5://127.0.0.1:1080 VIDEO_URL
```

---

## 15. Automation with Cron

Daily download example:

```bash
crontab -e
0 2 * * * yt-dlp PLAYLIST_URL
```

---

## 16. Troubleshooting

Update yt-dlp:

```bash
yt-dlp -U
```

Install FFmpeg:

```bash
apt install ffmpeg
```

Enable verbose logs:

```bash
yt-dlp -v VIDEO_URL
```

---

## 17. Uninstalling yt-dlp

```bash
sudo rm /usr/local/bin/yt-dlp
```

---

## 18. Best Practices

* Keep yt-dlp updated
* Use rate limits
* Respect copyright laws
* Use VPN if region-locked (legally)

---

## 19. Security Tips

* Do not run unknown scripts as root
* Avoid sharing cookies files
* Restrict server access

---

## 20. Useful Resources

* Official GitHub: [https://github.com/yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp)
* Documentation: [https://github.com/yt-dlp/yt-dlp#readme](https://github.com/yt-dlp/yt-dlp#readme)

---

**End of Document**
