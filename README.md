# nem.nuong
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nguyễn Nem's Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        /* Reset CSS */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        /* Background với hiệu ứng ánh sáng */
        body {
            background: #0f0c29;
            color: #ffffff;
            min-height: 100vh;
            overflow: hidden;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .video-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 1; /* Background sáng hơn */
            object-fit: cover;
            filter: brightness(1.2); /* Tăng độ sáng */
        }
        
        .light-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(138, 92, 246, 0.2), rgba(255, 121, 198, 0.2)); /* Màu sắc đặc trưng */
            z-index: -1;
            opacity: 0.6; /* Giảm độ mờ */
        }
        
        .light-particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }
        
        /* View counter ở góc trái trên */
        .global-view-counter {
            position: fixed;
            top: 15px;
            left: 15px;
            z-index: 100;
            background: rgba(30, 30, 46, 0.7);
            padding: 8px 15px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.9rem;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(138, 92, 246, 0.3);
            box-shadow: 0 0 10px rgba(138, 92, 246, 0.3);
        }
        
        /* Container chính - thu nhỏ hơn */
        .container {
            max-width: 1000px;
            width: 95%;
            margin: 0 auto;
            padding: 15px;
            z-index: 10;
            position: relative;
            background: rgba(20, 20, 36, 0.85);
            border-radius: 20px;
            border: 1px solid #8a5cf6; /* Viền mỏng hơn */
            box-shadow: 0 0 20px rgba(138, 92, 246, 0.4);
            overflow: hidden;
            backdrop-filter: blur(8px); /* Giảm độ mờ */
        }
        
        /* Profile header */
        .profile-header {
            display: flex;
            gap: 30px;
            margin-bottom: 20px;
            padding: 20px;
            position: relative;
        }
        
        .profile-left {
            flex: 0 0 240px; /* Thu nhỏ kích thước */
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .profile-pic {
            width: 180px; /* Thu nhỏ ảnh profile */
            height: 180px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid #8a5cf6;
            box-shadow: 0 0 15px rgba(138, 92, 246, 0.5);
            margin-bottom: 20px;
            position: relative;
            transition: all 0.3s ease;
        }
        
        .profile-pic:hover {
            transform: scale(1.05);
            box-shadow: 0 0 25px rgba(138, 92, 246, 0.7);
        }
        
        .status-container {
            width: 100%;
            background: rgba(40, 40, 62, 0.6);
            border-radius: 15px;
            padding: 15px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .username-box {
            background: linear-gradient(45deg, #8a5cf6, #ff79c6);
            padding: 12px 15px;
            border-radius: 12px;
            margin-bottom: 15px;
            box-shadow: 0 3px 10px rgba(138, 92, 246, 0.3);
        }
        
        .username {
            font-size: 1.6rem; /* Cỡ chữ vừa phải */
            font-weight: bold;
            color: white;
            text-align: center;
        }
        
        .status {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 15px;
            background: rgba(255, 214, 10, 0.15);
            border-radius: 20px;
            color: #ffd60a;
            font-size: 1rem;
            margin-top: 8px;
        }
        
        .bio {
            font-size: 1rem;
            color: #b0b0c0;
            line-height: 1.5;
            margin-top: 15px;
            text-align: center;
            font-style: italic;
            padding: 0 10px;
        }
        
        .profile-right {
            flex: 1;
        }
        
        /* Card layout */
        .card {
            background: rgba(30, 30, 46, 0.8);
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 25px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px); /* Giảm độ mờ */
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
            transition: all 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
            border-color: rgba(138, 92, 246, 0.3);
        }
        
        .card-title {
            font-size: 1.6rem;
            color: #8a5cf6;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .card-title i {
            font-size: 1.3rem;
        }
        
        /* Social Links */
        .social-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 15px 0;
            flex-wrap: wrap;
        }
        
        .social-link {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            color: #ffffff;
            width: 90px;
            transition: all 0.3s ease;
            position: relative;
            z-index: 2;
        }
        
        .social-link:hover {
            transform: translateY(-8px);
        }
        
        .social-icon {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.2rem;
            margin-bottom: 12px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .social-icon::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: 0.5s;
        }
        
        .social-link:hover .social-icon {
            transform: translateY(-8px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.25);
        }
        
        .social-link:hover .social-icon::before {
            left: 100%;
        }
        
        .youtube .social-icon { background: rgba(255, 0, 0, 0.1); border-color: rgba(255, 0, 0, 0.3); }
        .spotify .social-icon { background: rgba(29, 185, 84, 0.1); border-color: rgba(29, 185, 84, 0.3); }
        .discord .social-icon { background: rgba(114, 137, 218, 0.1); border-color: rgba(114, 137, 218, 0.3); }
        .tiktok .social-icon { background: rgba(0, 242, 234, 0.1); border-color: rgba(0, 242, 234, 0.3); }
        
        .social-link:hover .youtube .social-icon { background: rgba(255, 0, 0, 0.2); }
        .social-link:hover .spotify .social-icon { background: rgba(29, 185, 84, 0.2); }
        .social-link:hover .discord .social-icon { background: rgba(114, 137, 218, 0.2); }
        .social-link:hover .tiktok .social-icon { background: rgba(0, 242, 234, 0.2); }
        
        .social-label {
            font-size: 0.9rem;
            text-align: center;
        }
        
        /* Spotify Playlists */
        .playlists-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 15px;
        }
        
        .playlist-card {
            background: rgba(40, 40, 62, 0.7);
            border-radius: 12px;
            padding: 0;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            height: 350px;
        }
        
        .playlist-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
            border-color: rgba(138, 92, 246, 0.3);
        }
        
        .spotify-player {
            width: 100%;
            height: 100%;
            border: none;
        }
        
        /* Footer mới ở giữa dưới */
        .main-footer {
            position: fixed;
            bottom: 15px;
            left: 0;
            width: 100%;
            text-align: center;
            z-index: 100;
        }
        
        .copyright {
            display: inline-block;
            background: rgba(30, 30, 46, 0.7);
            padding: 8px 20px;
            border-radius: 20px;
            color: #b0b0c0;
            font-size: 0.9rem;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(138, 92, 246, 0.3);
        }
        
        /* Volume controls */
        .volume-control {
            position: fixed;
            bottom: 15px;
            right: 15px;
            z-index: 100;
            background: rgba(30, 30, 46, 0.8);
            border-radius: 50px;
            padding: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
            backdrop-filter: blur(10px);
            border: 1px solid #8a5cf6;
        }
        
        .volume-slider {
            width: 80px;
            -webkit-appearance: none;
            height: 4px;
            background: #4a4a6d;
            border-radius: 5px;
            outline: none;
        }
        
        .volume-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #8a5cf6;
            cursor: pointer;
        }
        
        .volume-btn {
            background: none;
            border: none;
            color: white;
            font-size: 1.1rem;
            cursor: pointer;
            width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background 0.3s;
        }
        
        .volume-btn:hover {
            background: rgba(138, 92, 246, 0.3);
        }
        
        /* Responsive */
        @media (max-width: 900px) {
            .profile-header {
                flex-direction: column;
                gap: 25px;
                padding: 15px;
            }
            
            .profile-left {
                flex: 0 0 auto;
            }
            
            .social-links {
                gap: 12px;
            }
            
            .social-icon {
                width: 60px;
                height: 60px;
                font-size: 1.8rem;
            }
            
            .username {
                font-size: 1.5rem;
            }
            
            .playlist-card {
                height: 280px;
            }
        }
        
        @media (max-width: 500px) {
            .profile-pic {
                width: 160px;
                height: 160px;
            }
            
            .username {
                font-size: 1.4rem;
            }
            
            .bio {
                font-size: 0.9rem;
            }
            
            .playlist-card {
                height: 220px;
            }
            
            .global-view-counter {
                top: 10px;
                left: 10px;
                font-size: 0.8rem;
                padding: 6px 12px;
            }
        }
    </style>
</head>
<body>
    <!-- Video nền từ file local -->
    <video class="video-background" id="bgVideo" autoplay loop muted>
        <source src="video/videoplayback.webm" type="video/webm">
        Your browser does not support the video tag.
    </video>
    
    <div class="light-overlay"></div>
    <div class="light-particles" id="particles"></div>
    
    <!-- Số lượt xem ở góc trái trên -->
    <div class="global-view-counter" id="globalViewCounter">
        <i class="fas fa-eye"></i> Views: 128
    </div>
    
    <!-- Volume controls -->
    <div class="volume-control">
        <button class="volume-btn" id="muteBtn">
            <i class="fas fa-volume-up"></i>
        </button>
        <input type="range" min="0" max="1" step="0.01" value="1" class="volume-slider" id="volumeSlider">
    </div>
    
    <!-- Container chính -->
    <div class="container">
        <!-- Profile header -->
        <div class="profile-header">
            <div class="profile-left">
                <img src="images/whitecat.png" alt="Profile Picture" class="profile-pic">
                <div class="status-container">
                    <div class="username-box">
                        <div class="username">Nguyễn Nem</div>
                    </div>
                    <div class="status">
                        <i class="fas fa-moon"></i> Idle
                    </div>
                    <div class="bio">
                        Just a Content Creator boy like cat, BoyWithUke and Marino music 🐾🎧✨
                    </div>
                </div>
            </div>
            
            <div class="profile-right">
                <!-- Kết nối với tôi -->
                <div class="card">
                    <h2 class="card-title"><i class="fas fa-link"></i> Connect With Me</h2>
                    <div class="social-links">
                        <a href="https://www.youtube.com/@nemnuong" target="_blank" class="social-link youtube">
                            <div class="social-icon">
                                <i class="fab fa-youtube"></i>
                            </div>
                            <span class="social-label">YouTube</span>
                        </a>
                        
                        <a href="https://www.tiktok.com/@nguyennem2006?is_from_webapp=1&sender_device=pc" target="_blank" class="social-link tiktok">
                            <div class="social-icon">
                                <i class="fab fa-tiktok"></i>
                            </div>
                            <span class="social-label">TikTok</span>
                        </a>
                        
                        <a href="https://open.spotify.com/user/31njaguxvody6xit6gajvngzhhe4?si=55bdc1bfb41c4cf0" target="_blank" class="social-link spotify">
                            <div class="social-icon">
                                <i class="fab fa-spotify"></i>
                            </div>
                            <span class="social-label">Spotify</span>
                        </a>
                        
                        <a href="https://discord.gg/2zrethSUr9" target="_blank" class="social-link discord">
                            <div class="social-icon">
                                <i class="fab fa-discord"></i>
                            </div>
                            <span class="social-label">Discord</span>
                        </a>
                    </div>
                </div>
                
                <!-- Spotify Playlists -->
                <div class="card">
                    <h2 class="card-title"><i class="fas fa-music"></i> Favorite Playlists</h2>
                    <div class="playlists-container">
                        <div class="playlist-card" id="playlist1">
                            <iframe class="spotify-player" src="https://open.spotify.com/embed/playlist/3AFi6LIkP88acuvQDMytQx?utm_source=generator" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </div>
                        <div class="playlist-card" id="playlist2">
                            <iframe class="spotify-player" src="https://open.spotify.com/embed/playlist/3Mp1DOUa7Mfn4Hsq741ayo?utm_source=generator" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Footer ở giữa dưới -->
    <div class="main-footer">
        <div class="copyright">© 2025 by Nem. Created with GitHub.</div>
    </div>
    
    <script>
        // Tạo hiệu ứng hạt ánh sáng
        function createParticles() {
            const container = document.getElementById('particles');
            const colors = ['#8a5cf6', '#ff79c6', '#50fa7b', '#ffffff'];
            
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = Math.random() * 5 + 2 + 'px';
                particle.style.height = particle.style.width;
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                particle.style.borderRadius = '50%';
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.top = Math.random() * 100 + 'vh';
                particle.style.opacity = Math.random() * 0.5 + 0.1;
                particle.style.boxShadow = '0 0 10px currentColor';
                particle.style.zIndex = '-1';
                
                // Animation
                particle.animate([
                    { transform: 'translateY(0)' },
                    { transform: `translateY(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 100}vh)` }
                ], {
                    duration: Math.random() * 5000 + 5000,
                    iterations: Infinity
                });
                
                container.appendChild(particle);
            }
        }
        
        // Phát ngẫu nhiên bài hát khi click vào profile
        function setupRandomPlay() {
            const profilePic = document.querySelector('.profile-pic');
            const playlist1 = document.querySelector('#playlist1 iframe');
            const playlist2 = document.querySelector('#playlist2 iframe');
            
            profilePic.addEventListener('click', function() {
                // Chọn ngẫu nhiên playlist 1 hoặc 2
                const randomPlaylist = Math.random() > 0.5 ? playlist1 : playlist2;
                
                // Tạo URL mới với tham số random
                const playlistUrl = randomPlaylist.src.split('?')[0];
                const newUrl = playlistUrl + '?utm_source=generator&shuffle=true';
                
                // Cập nhật iframe với URL mới
                randomPlaylist.src = newUrl;
                
                // Hiệu ứng visual feedback
                this.style.boxShadow = '0 0 30px #50fa7b';
                setTimeout(() => {
                    this.style.boxShadow = '0 0 15px rgba(138, 92, 246, 0.5)';
                }, 1000);
            });
        }
        
        // Volume control
        function setupVolumeControl() {
            const bgVideo = document.getElementById('bgVideo');
            const volumeSlider = document.getElementById('volumeSlider');
            const muteBtn = document.getElementById('muteBtn');
            
            // Set initial volume
            bgVideo.volume = volumeSlider.value;
            
            // Volume slider change
            volumeSlider.addEventListener('input', function() {
                bgVideo.volume = this.value;
                bgVideo.muted = false;
                muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            });
            
            // Mute button
            muteBtn.addEventListener('click', function() {
                bgVideo.muted = !bgVideo.muted;
                this.innerHTML = bgVideo.muted 
                    ? '<i class="fas fa-volume-mute"></i>' 
                    : '<i class="fas fa-volume-up"></i>';
                
                // Cập nhật slider khi tắt tiếng
                if (!bgVideo.muted) {
                    volumeSlider.value = bgVideo.volume;
                }
            });
        }
        
        // Khởi tạo
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            setupVolumeControl();
            setupRandomPlay();
            
            // Cập nhật lượt xem
            let viewCount = localStorage.getItem('viewCount') || 128;
            viewCount++;
            localStorage.setItem('viewCount', viewCount);
            document.getElementById('globalViewCounter').innerHTML = `<i class="fas fa-eye"></i> Views: ${viewCount}`;
            
            // Tự động tắt nhạc nền khi bật Spotify
            document.querySelectorAll('.spotify-player').forEach(player => {
                player.addEventListener('click', function() {
                    const bgVideo = document.getElementById('bgVideo');
                    if (bgVideo) {
                        bgVideo.muted = true;
                        document.getElementById('muteBtn').innerHTML = '<i class="fas fa-volume-mute"></i>';
                    }
                });
            });
        });
    </script>
</body>
</html>
