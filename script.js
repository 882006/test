const audioPlayer = document.getElementById('bgMusicAudio');
document.addEventListener('DOMContentLoaded', function() {
    // Lặp lại hiệu ứng sáng tối của trang web
    setInterval(function() {
        document.body.classList.toggle('dark-mode');
    }, 3000); // Chuyển đổi hiệu ứng sáng tối mỗi 3 giây
});
createBubbleParticle(centerX, centerY);
videoOverlay.addEventListener('click', function () {
    if (isPlaying) {
        audioPlayer.pause();
        videoOverlay.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audioPlayer.play().catch(e => console.log("Play prevented:", e));
        videoOverlay.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;

    // Hiệu ứng bóng bóng
    const rect = videoOverlay.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    for (let i = 0; i < 15; i++) {
        createBubbleParticle(centerX, centerY);
    }
});
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Thêm vào phần thiết lập con trỏ hiện có
function createCursorTrail() {
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  document.body.appendChild(trail);
  
  document.addEventListener('mousemove', (e) => {
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
  });
}
