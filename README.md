# Custom Video Player

A lightweight, branded video player with modern controls and customization options.

## Quick Start

1. Add the CSS and JS files to your HTML:
```html
<link rel="stylesheet" href="video-player.css">
<script src="video-player.js"></script>
```

2. Initialize and use the video player:
```html
<div id="video-container"></div>

<script>
    // Create video player instance
    const player = new CustomVideoPlayer();
    
    // Generate video player HTML
    const videoHtml = player.createVideoPlayer(
        "video-url.mp4",         // Video URL (required)
        "brand-logo.png",        // Brand logo URL (optional)
        "video-thumbnail.jpg"    // Thumbnail URL (optional)
    );
    
    // Add to container
    document.getElementById('video-container').innerHTML = videoHtml;
    
    // Initialize player
    document.addEventListener('DOMContentLoaded', () => {
        player.initializePlayers();
    });
</script>
```

## Features
- Custom branding with logo overlay
- Video thumbnail support
- Modern controls with play/pause, volume, and fullscreen
- Picture-in-Picture support
- Progress bar with seek functionality
- Customizable appearance
- Responsive design
- Keyboard shortcuts

## Usage Examples

### Basic Usage
```javascript
const player = new CustomVideoPlayer();
const videoHtml = player.createVideoPlayer(
    "video.mp4",
    "logo.png",
    "thumbnail.jpg"
);
```

### Multiple Players
```javascript
const player = new CustomVideoPlayer();

// Create multiple players
const videos = [
    { url: "video1.mp4", logo: "logo1.png", thumb: "thumb1.jpg" },
    { url: "video2.mp4", logo: "logo2.png", thumb: "thumb2.jpg" }
];

videos.forEach(video => {
    const videoHtml = player.createVideoPlayer(
        video.url,
        video.logo,
        video.thumb
    );
    document.getElementById('container').innerHTML += videoHtml;
});

// Initialize all players
player.initializePlayers();
```

### Framework Integration (e.g., Django)
```html
{% for video in videos %}
    <script>
        document.write(player.createVideoPlayer(
            "{{ video.url }}",
            "{% static 'images/logo.png' %}",
            "{% static 'images/thumbnail.jpg' %}"
        ));
    </script>
{% endfor %}

<script>
    document.addEventListener('DOMContentLoaded', () => {
        player.initializePlayers();
    });
</script>
```

## Keyboard Shortcuts
- Space: Play/Pause
- M: Mute/Unmute
- F: Fullscreen
- P: Picture-in-Picture
- ↑: Volume Up
- ↓: Volume Down
- →: Forward 5s
- ←: Rewind 5s

## Customization
You can customize the player appearance by modifying the CSS variables:

```css
.custom-video-player {
    --primary-color: #2196f3;
    --progress-color: #e91e63;
    --logo-width: 80px;
    --logo-opacity: 0.8;
}
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kuldeepsdk/video-player@latest/dist/css/video-player.min.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/gh/kuldeepsdk/video-player@latest/dist/js/video-player.min.js"></script>
## License
MIT License
