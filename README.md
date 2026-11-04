# Aljaloui Delivery — Website Backup

Live Site: https://aljaloui.com
Cloudflare Worker: aljaloui
Zone: aljaloui.com (Qatar)

## Files
- `index.html`: The live site landing page (references cloudfront video)
- `index-local.html`: Offline-ready landing page (references local `assets/bg-video.mp4`)
- `styles.css`: Complete stylesheet
- `script.js`: Complete client script with Qatar locations & Fare Estimator
- `assets/bg-video.mp4`: Background hero video asset (~11 MB)
- `robots.txt`: Robots and AI content signal policy
- `wrangler.jsonc`: Cloudflare Workers Static Assets configuration

## How to Run Locally
Run any local static server, for example:
```bash
npx serve .
```
Or open `index-local.html` directly in any browser.

## How to Deploy to Cloudflare
Using Wrangler:
```bash
npx wrangler deploy
```
Or using Cloudflare CLI (`cf`):
```bash
cf builds deploy
```
