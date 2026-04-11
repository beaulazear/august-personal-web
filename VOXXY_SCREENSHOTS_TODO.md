# Voxxy Mobile V1 Screenshots - Quick Guide

Your portfolio is now configured to display Voxxy Mobile V1 screenshots! Follow this guide to capture and add them.

## 📸 Screenshots Needed (6 total)

You need to capture these 6 screenshots from your Voxxy mobile app:

1. **voxxy-home-screen.png** - Home dashboard with activities and community feed
2. **voxxy-activity-creation.png** - Multi-step activity creation modal (any step)
3. **voxxy-preferences.png** - Preference form showing cuisine or dietary selections
4. **voxxy-recommendations.png** - AI recommendations in card view
5. **voxxy-map-view.png** - Map view with venue markers
6. **voxxy-community-feed.png** - Community/Explore screen with friends' favorites

## 🎯 How to Capture Screenshots

### Option 1: iOS Simulator (Easiest)
```bash
# Start your Voxxy app
cd /Users/beaulazear/Desktop/voxxy-mobile
npx expo start

# Press 'i' for iOS simulator
# Navigate through the app and press Command+S to save screenshots
# Screenshots save to ~/Desktop
```

### Option 2: Physical Device
- Navigate through app screens
- **iPhone**: Press Volume Up + Side Button
- **Android**: Press Volume Down + Power Button
- Screenshots save to Photos app / Gallery

## 📋 Preparation Checklist

Before capturing screenshots:
- [ ] Login with a test account that has clean data
- [ ] Ensure you have 2-3 test activities in different states
- [ ] Add some friend favorites to the community feed
- [ ] Make sure all images load properly
- [ ] Set device time to 9:41 AM (Apple's standard)
- [ ] Charge device to 100% (or edit status bar later)

## 📂 Adding Screenshots to Portfolio

Once you have the 6 screenshots:

1. **Rename files** to match these exact names:
   - `voxxy-home-screen.png`
   - `voxxy-activity-creation.png`
   - `voxxy-preferences.png`
   - `voxxy-recommendations.png`
   - `voxxy-map-view.png`
   - `voxxy-community-feed.png`

2. **Copy to images folder**:
   ```bash
   cp ~/Desktop/voxxy-*.png /Users/beaulazear/Desktop/august-personal-web/src/images/
   ```

3. **Test your portfolio**:
   ```bash
   cd /Users/beaulazear/Desktop/august-personal-web
   npm start
   ```
   - Open the Images window
   - Click "Voxxy Mobile V1" folder
   - Verify all 6 screenshots display correctly

4. **Deploy**:
   ```bash
   npm run build
   npm run deploy
   ```

## ✨ Optional Enhancements

### Want Better Quality?
Use a screenshot tool to create device mockups:
- **Rotato** (https://rotato.app) - $49, professional 3D mockups
- **Screely** (https://screely.com) - Free, adds device frames
- **Mockuuups** (https://mockuuups.studio) - Scene creators

### Editing Screenshots
- Crop to remove unwanted elements
- Add annotations with arrows/text (optional)
- Ensure consistent sizing
- Optimize file size (use TinyPNG)

## 🚀 Quick Start (If You're in a Hurry)

**Fastest way to get 6 screenshots:**

1. Open Voxxy app on your phone
2. Take screenshots of these 6 screens (in order):
   - Home screen
   - Activity creation modal
   - Preference form
   - Recommendations (card view)
   - Map view
   - Community feed
3. AirDrop to your Mac (or connect via USB)
4. Rename files
5. Copy to `/Users/beaulazear/Desktop/august-personal-web/src/images/`
6. Test with `npm start`

**Total time: 15-20 minutes**

## 📝 Current Status

✅ Portfolio code updated (ProjectsWindow.js)
✅ Images window configured (ImagesWindow.js)
✅ Voxxy Mobile V1 folder created
⏳ **TODO**: Capture and add 6 screenshots

Once you add the screenshots, your portfolio will have:
- Projects section with Voxxy Mobile V1 description
- Images window with a dedicated Voxxy folder
- 6 professional screenshots showcasing the app

---

**Need help?** Review the comprehensive guide at:
`/Users/beaulazear/Desktop/voxxy-mobile/portfolio-docs/SCREENSHOT_GUIDE.md`
