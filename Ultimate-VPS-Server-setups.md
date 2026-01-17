# 🛠 Ultimate VPS / Dedicated Server Setup  
**Compiled by:** Njpwelder  

A **complete all-in-one server setup** for media downloading, live streaming, web hosting, monitoring, security, and multi-PHP support.

---

## 🚀 Features

### ✅ Server Management
- **aaPanel web GUI**  
  - Default login: `admin` / `12345wap`  
  - URL: `http://SERVER-IP:7800`  
- **Multi-PHP support:** `5.6 | 7.0 | 7.1 | 7.2 | 7.3 | 7.4 | 8.0 | 8.1 | 8.2`  
- Nginx + PHP-FPM fully installed  
- Firewall configured (UFW / firewalld)  

### ✅ Media Tools
- yt-dlp (auto-updates daily)  
- ffmpeg for video/audio processing  
- aria2 for accelerated downloads  
- streamlink for live streaming  
- gallery-dl for social media scraping  

### ✅ Media Web Panel
- Browser-based downloader: `http://SERVER-IP:8088`  
- Paste URL → downloads to `/opt/media/downloads`  
- Lightweight Flask app  

### ✅ Live Stream Recorder
- Script: `/usr/local/bin/live-record.sh`  
- Usage:  
```bash
live-record.sh <stream_url> <filename_prefix>
