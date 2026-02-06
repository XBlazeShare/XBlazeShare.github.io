# 🔮 Cyber Portal - Gaming Website

A complete, modern gaming portal website that works 100% on GitHub Pages with no backend required.

## ✨ Features

- **Animated Intro Cutscene** - Cyberpunk-themed loading animation
- **Password Protection** - Universal password gate with hashed storage
- **50+ Games** - Pre-loaded game library with instant play
- **Enigma Games** - Google-style unrestricted game search
- **Science Resources** - Educational tools and simulations
- **Utility Tools** - Notes, timer, random number generator
- **Settings Panel** - Password management and customization
- **Fully Responsive** - Works on tablets, Chromebooks, and mobile devices
- **Blue Cyber Theme** - Smooth animations and glowing effects

## 🚀 Quick Start

### Upload to GitHub Pages

1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com
   - Click "Sign up"

2. **Create a new repository**
   - Click the "+" icon in the top-right
   - Select "New repository"
   - Name it: `cyber-portal` (or any name you prefer)
   - Make it **Public**
   - Click "Create repository"

3. **Upload files**
   - Click "uploading an existing file"
   - Drag and drop these 3 files:
     - `index.html`
     - `style.css`
     - `script.js`
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Click "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait 2-3 minutes for deployment

5. **Access your site**
   - Your site will be at: `https://your-username.github.io/cyber-portal/`
   - Replace `your-username` with your GitHub username

## 🔑 Default Password

**Default Password:** `cyber2024`

## ⚙️ How to Change the Password

### Method 1: Edit the Code (Permanent)

1. Open `script.js`
2. Find line 3:
   ```javascript
   const DEFAULT_PASSWORD = "cyber2024";
   ```
3. Change `"cyber2024"` to your desired password:
   ```javascript
   const DEFAULT_PASSWORD = "your_new_password";
   ```
4. Save and upload to GitHub

### Method 2: Through Settings (Session-based)

1. Log in to the portal
2. Navigate to Settings (⚙️)
3. Enter the current password to unlock settings
4. Use "Change Password" form
5. Enter:
   - Current password
   - New password
   - Confirm new password
6. Click "Change Password"

**Note:** Method 2 stores the password in browser localStorage. To make it permanent across all users, use Method 1.

## 🎮 How to Add Games

1. Open `script.js`
2. Find the `games` array (around line 18)
3. Add a new game object:

```javascript
{
    title: "Your Game Name",
    description: "Brief description",
    url: "https://game-url.com",
    image: "🎮" // Emoji icon
}
```

**Example:**
```javascript
{
    title: "Pac-Man",
    description: "Classic arcade maze game",
    url: "https://pacman.com/play",
    image: "👻"
}
```

4. Save and upload to GitHub

### Finding Game URLs

Good sources for unblocked game URLs:
- Search for "game name unblocked"
- Use HTML5 game hosting sites
- Look for `.io` games (usually work in iframes)

## 🎨 Customization Guide

### Change Theme Colors

Edit `style.css` - Root Variables (lines 2-14):

```css
:root {
    --primary-blue: #00d9ff;      /* Main accent color */
    --secondary-blue: #0066ff;    /* Secondary accent */
    --dark-bg: #0a0e1a;           /* Background */
    --darker-bg: #050810;         /* Sidebar background */
    --card-bg: #131829;           /* Card backgrounds */
    --text-primary: #ffffff;      /* Main text */
    --text-secondary: #a0b3cc;    /* Secondary text */
}
```

### Change Site Title

Edit `index.html` line 6:
```html
<title>Your Title Here</title>
```

Edit line 45 (logo):
```html
<div class="logo">⚡ YOUR LOGO</div>
```

### Add More Sections

1. Add navigation item in `index.html`
2. Create corresponding section
3. Add navigation handler in `script.js`

## 📱 Mobile Support

The site automatically adapts to:
- Desktop computers
- Tablets (iPad, Android tablets)
- School Chromebooks
- Mobile phones

The sidebar collapses on small screens for better mobile experience.

## 🔧 Tools & Features

### Notes Tool
- Saves automatically to browser localStorage
- Persists between sessions
- Access from Tools section

### Timer
- Simple stopwatch functionality
- Start, stop, and reset
- Displays in MM:SS format

### Random Number Generator
- Set minimum and maximum values
- Generates random numbers in range
- Useful for games and decisions

### Enigma Games
- Google-powered game search
- Opens in embedded iframe
- Purple-themed interface
- Disclaimer included

## 🛡️ Security Notes

**Important:** This is a frontend-only password system:
- Password is stored in JavaScript (visible to anyone who views source)
- Hashing is basic and for obfuscation only
- Not suitable for protecting truly sensitive content
- Designed for school/casual use, not high-security needs

For better security:
- Use a unique, non-obvious password
- Don't share the repository link publicly
- Consider using GitHub's private repositories

## 📋 File Structure

```
cyber-portal/
│
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # All functionality and logic
└── README.md           # This file
```

## 🐛 Troubleshooting

### Games won't load
- Some sites block iframe embedding
- Try finding alternative URLs for the game
- Check browser console for errors

### Password not working
- Check `script.js` line 3 for correct password
- Clear browser cache and localStorage
- Try incognito/private mode

### Site not showing on GitHub Pages
- Wait 5-10 minutes after enabling Pages
- Check that files are in the main branch
- Verify repository is public

### Styles look broken
- Ensure all 3 files are uploaded
- Check file names are exactly correct
- Clear browser cache

## 🎯 Best Practices

1. **Regular backups** - Download your code periodically
2. **Test locally** - Open `index.html` in browser before uploading
3. **Use version control** - Commit changes with clear messages
4. **Mobile testing** - Test on actual devices when possible
5. **Game testing** - Verify each game works before adding

## 🌟 Advanced Features

### Enable Auto-Logout
Uncomment lines at the end of `script.js`:
```javascript
window.addEventListener('beforeunload', () => {
    localStorage.removeItem('portalAuth');
});
```

### Add Custom Games
Create your own HTML5 games and host them in the same repository!

### Theme Switching
The theme selector is in Settings but not yet functional. You can implement this by:
1. Creating additional CSS variable sets
2. Adding JavaScript to switch between them
3. Storing preference in localStorage

## 📞 Support

For issues or questions:
1. Check this README thoroughly
2. Review code comments in `script.js`
3. Test in different browsers
4. Check GitHub Pages documentation

## 📜 License

Free to use and modify for personal and educational purposes.

## 🎮 Enjoy Your Portal!

Your Cyber Portal is now ready! Access it at your GitHub Pages URL and start gaming!

**Remember to bookmark your site and share with friends!**

---

Made with 💙 by the Cyber Portal Team
