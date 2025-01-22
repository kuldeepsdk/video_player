class CustomVideoPlayer {
    constructor() {
        this.playerCount = 0;
    }

    createVideoPlayer(videoUrl, brandLogo = null, thumbnail = null) {
        const playerId = `video-player-${this.playerCount++}`;
        
        return `
            <div class="custom-video-player">
                <div class="video-container" data-player-id="${playerId}">
                    <div class="video-wrapper">
                        ${brandLogo ? `
                            <div class="branding-logo">
                                <img src="${brandLogo}" alt="Brand Logo">
                            </div>
                        ` : ''}
                        
                        <video class="video-player" preload="metadata" ${thumbnail ? `poster="${thumbnail}"` : ''}>
                            <source src="${videoUrl}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>

                        <div class="loading-spinner"></div>

                        <div class="controls-container">
                            <div class="progress-container">
                                <div class="buffer-bar"></div>
                                <div class="progress-bar"></div>
                            </div>
                            
                            <div class="controls">
                                <button class="control-button play-pause">
                                    <svg class="play-icon" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </button>

                                <div class="volume-container">
                                    <button class="control-button mute">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                        </svg>
                                    </button>
                                    <input type="range" class="volume-slider" min="0" max="1" step="0.1" value="1">
                                </div>

                                <span class="time-display">0:00 / 0:00</span>
                                
                                <div class="spacer"></div>

                                <button class="control-button pip">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"/>
                                    </svg>
                                </button>

                                <button class="control-button fullscreen">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    initializePlayers() {
        document.querySelectorAll('.video-container').forEach(container => {
            this.initializePlayer(container);
        });
    }

    initializePlayer(container) {
        const video = container.querySelector('.video-player');
        const controls = container.querySelector('.controls-container');
        const playPauseBtn = container.querySelector('.play-pause');
        const muteBtn = container.querySelector('.mute');
        const volumeSlider = container.querySelector('.volume-slider');
        const progressContainer = container.querySelector('.progress-container');
        const progressBar = container.querySelector('.progress-bar');
        const bufferBar = container.querySelector('.buffer-bar');
        const timeDisplay = container.querySelector('.time-display');
        const pipBtn = container.querySelector('.pip');
        const fullscreenBtn = container.querySelector('.fullscreen');
        const loadingSpinner = container.querySelector('.loading-spinner');

        let hideControlsTimeout;

        // Format time in seconds to MM:SS format
        const formatTime = (seconds) => {
            const minutes = Math.floor(seconds / 60);
            seconds = Math.floor(seconds % 60);
            return `${minutes}:${seconds.toString().padStart(2, '0')}`;
        };

        // Update play/pause button icon
        const updatePlayButton = () => {
            playPauseBtn.innerHTML = video.paused ? 
                '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>' :
                '<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
        };

        // Update volume button icon
        const updateVolumeButton = () => {
            const volume = video.volume;
            const isMuted = video.muted || volume === 0;
            
            muteBtn.innerHTML = isMuted ?
                '<svg viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>' :
                volume < 0.5 ?
                    '<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>' :
                    '<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>';
        };

        // Update progress bar
        const updateProgress = () => {
            const percentage = (video.currentTime / video.duration) * 100;
            progressBar.style.width = `${percentage}%`;
            timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;

            // Update buffer bar
            if (video.buffered.length > 0) {
                const bufferedEnd = video.buffered.end(video.buffered.length - 1);
                const bufferPercentage = (bufferedEnd / video.duration) * 100;
                bufferBar.style.width = `${bufferPercentage}%`;
            }
        };

        // Toggle play/pause
        const togglePlay = () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
            updatePlayButton();
        };

        // Toggle mute
        const toggleMute = () => {
            video.muted = !video.muted;
            volumeSlider.value = video.muted ? 0 : video.volume;
            updateVolumeButton();
        };

        // Seek video
        const seek = (e) => {
            const rect = progressContainer.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            video.currentTime = pos * video.duration;
        };

        // Toggle fullscreen
        const toggleFullscreen = () => {
            if (!document.fullscreenElement) {
                container.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        };

        // Toggle Picture in Picture
        const togglePiP = async () => {
            try {
                if (document.pictureInPictureElement) {
                    await document.exitPictureInPicture();
                } else {
                    await video.requestPictureInPicture();
                }
            } catch (error) {
                console.error('PiP failed:', error);
            }
        };

        // Show/hide controls
        const showControls = () => {
            controls.style.opacity = '1';
            clearTimeout(hideControlsTimeout);
        };

        const hideControls = () => {
            if (!video.paused) {
                hideControlsTimeout = setTimeout(() => {
                    controls.style.opacity = '0';
                }, 2000);
            }
        };

        // Event Listeners
        video.addEventListener('play', updatePlayButton);
        video.addEventListener('pause', updatePlayButton);
        video.addEventListener('timeupdate', updateProgress);
        video.addEventListener('volumechange', updateVolumeButton);
        video.addEventListener('waiting', () => loadingSpinner.style.display = 'block');
        video.addEventListener('canplay', () => loadingSpinner.style.display = 'none');

        playPauseBtn.addEventListener('click', togglePlay);
        muteBtn.addEventListener('click', toggleMute);
        volumeSlider.addEventListener('input', (e) => {
            video.volume = e.target.value;
            video.muted = e.target.value === '0';
            updateVolumeButton();
        });

        progressContainer.addEventListener('click', seek);
        fullscreenBtn.addEventListener('click', toggleFullscreen);
        pipBtn.addEventListener('click', togglePiP);

        container.addEventListener('mousemove', showControls);
        container.addEventListener('mouseleave', hideControls);

        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            if (container.contains(document.activeElement)) {
                switch(e.code) {
                    case 'Space':
                        e.preventDefault();
                        togglePlay();
                        break;
                    case 'KeyM':
                        toggleMute();
                        break;
                    case 'KeyF':
                        toggleFullscreen();
                        break;
                    case 'KeyP':
                        togglePiP();
                        break;
                    case 'ArrowLeft':
                        video.currentTime = Math.max(video.currentTime - 5, 0);
                        break;
                    case 'ArrowRight':
                        video.currentTime = Math.min(video.currentTime + 5, video.duration);
                        break;
                    case 'ArrowUp':
                        video.volume = Math.min(video.volume + 0.1, 1);
                        volumeSlider.value = video.volume;
                        break;
                    case 'ArrowDown':
                        video.volume = Math.max(video.volume - 0.1, 0);
                        volumeSlider.value = video.volume;
                        break;
                }
            }
        });

        // Initial setup
        updatePlayButton();
        updateVolumeButton();

        // Touch device optimizations
        if ('ontouchstart' in window) {
            const toggleControls = () => {
                controls.style.opacity = controls.style.opacity === '1' ? '0' : '1';
            };
            video.addEventListener('click', toggleControls);
        }
    }
}
