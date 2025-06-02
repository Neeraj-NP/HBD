// Audio player management
const audioPlayer = {
    bgMusic: new Audio('../audio/background.mp3'),
    messageAudios: [
        new Audio('../audio/message1.mp3'),
        new Audio('../audio/message2.mp3'),
        new Audio('../audio/message3.mp3')
    ],
    giftAudio: new Audio('../audio/gift_open.mp3'),
    letterAudio: new Audio('../audio/letter_open.mp3'),

    init() {
        this.bgMusic.loop = true;
        this.bgMusic.volume = 0.3;
    },

    playBackgroundMusic() {
        this.bgMusic.play().catch(err => console.log('Audio playback failed:', err));
    },

    playMessageAudio(index) {
        if (this.messageAudios[index]) {
            this.messageAudios[index].play().catch(err => console.log('Audio playback failed:', err));
        }
    },

    playGiftSound() {
        this.giftAudio.play().catch(err => console.log('Audio playback failed:', err));
    },

    playLetterSound() {
        this.letterAudio.play().catch(err => console.log('Audio playback failed:', err));
    }
};

// Initialize audio when document is ready
document.addEventListener('DOMContentLoaded', () => {
    audioPlayer.init();
    
    // Add music control button
    const musicBtn = document.createElement('button');
    musicBtn.className = 'music-control';
    musicBtn.innerHTML = '🎵';
    musicBtn.title = 'Toggle Music';
    document.body.appendChild(musicBtn);

    musicBtn.addEventListener('click', () => {
        if (audioPlayer.bgMusic.paused) {
            audioPlayer.playBackgroundMusic();
            musicBtn.classList.add('playing');
        } else {
            audioPlayer.bgMusic.pause();
            musicBtn.classList.remove('playing');
        }
    });
});
