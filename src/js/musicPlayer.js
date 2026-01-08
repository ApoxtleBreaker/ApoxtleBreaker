const playlistData = [
    // Gaokao.Love.100Days.Soundtrack - 根据AlbumList.txt信息
    {
        name: "未来的志愿书（钢琴版）",
        artist: "Days乐团",
        url: "./assets/music/Gaokao.Love.100Days.Soundtrack/01-Application of the Future (piano ver).wav",
        cover: "./assets/music/Gaokao.Love.100Days.Soundtrack/AlbumArtwork.png"
    },
    {
        name: "阳光明媚的一天",
        artist: "Days乐团",
        url: "./assets/music/Gaokao.Love.100Days.Soundtrack/02-A Sunny Day.wav",
        cover: "./assets/music/Gaokao.Love.100Days.Soundtrack/AlbumArtwork.png"
    },
    {
        name: "Umbrella Girl",
        artist: "Days乐团",
        url: "./assets/music/Gaokao.Love.100Days.Soundtrack/03-Umbrella Girl.wav",
        cover: "./assets/music/Gaokao.Love.100Days.Soundtrack/AlbumArtwork.png"
    },
    {
        name: "郊外的游乐场",
        artist: "Days乐团",
        url: "./assets/music/Gaokao.Love.100Days.Soundtrack/04-Amusement Park.wav",
        cover: "./assets/music/Gaokao.Love.100Days.Soundtrack/AlbumArtwork.png"
    },
    {
        name: "令人意外的笨蛋",
        artist: "Days乐团",
        url: "./assets/music/Gaokao.Love.100Days.Soundtrack/05-Cute Idiot.wav",
        cover: "./assets/music/Gaokao.Love.100Days.Soundtrack/AlbumArtwork.png"
    },
    {
        name: "不详的预感",
        artist: "Days乐团",
        url: "./assets/music/Gaokao.Love.100Days.Soundtrack/06-Bad Feeling.wav",
        cover: "./assets/music/Gaokao.Love.100Days.Soundtrack/AlbumArtwork.png"
    },
    {
        name: "各自的结局",
        artist: "Days乐团",
        url: "./assets/music/Gaokao.Love.100Days.Soundtrack/07-Epilogue.wav",
        cover: "./assets/music/Gaokao.Love.100Days.Soundtrack/AlbumArtwork.png"
    },
    {
        name: "Everything is Ready",
        artist: "Days乐团",
        url: "./assets/music/Gaokao.Love.100Days.Soundtrack/08-Everything is Ready.wav",
        cover: "./assets/music/Gaokao.Love.100Days.Soundtrack/AlbumArtwork.png"
    },
    {
        name: "Cloudy to Sunny",
        artist: "Days乐团",
        url: "./assets/music/Gaokao.Love.100Days.Soundtrack/09-Cloudy to Sunny.wav",
        cover: "./assets/music/Gaokao.Love.100Days.Soundtrack/AlbumArtwork.png"
    },
    {
        name: "Nuit Silencieuse",
        artist: "Days乐团",
        url: "./assets/music/Gaokao.Love.100Days.Soundtrack/10-Nuit Silencieuse.wav",
        cover: "./assets/music/Gaokao.Love.100Days.Soundtrack/AlbumArtwork.png"
    },
    {
        name: "Fantaisie de Nuit Silencieuse",
        artist: "Days乐团",
        url: "./assets/music/Gaokao.Love.100Days.Soundtrack/11-Fantaisie de Nuit Silencieuse.wav",
        cover: "./assets/music/Gaokao.Love.100Days.Soundtrack/AlbumArtwork.png"
    },
    {
        name: "毕业前夕",
        artist: "Days乐团",
        url: "./assets/music/Gaokao.Love.100Days.Soundtrack/12-Before Graduation.wav",
        cover: "./assets/music/Gaokao.Love.100Days.Soundtrack/AlbumArtwork.png"
    },
    {
        name: "未来的志愿书（八音盒版）",
        artist: "Days乐团",
        url: "./assets/music/Gaokao.Love.100Days.Soundtrack/13-Application of the Future (music box ver).wav",
        cover: "./assets/music/Gaokao.Love.100Days.Soundtrack/AlbumArtwork.png"
    },
    {
        name: "未来的志愿书（主题曲）",
        artist: "Days乐团",
        url: "./assets/music/Gaokao.Love.100Days.Soundtrack/14-Application of the Future (theme song).wav",
        cover: "./assets/music/Gaokao.Love.100Days.Soundtrack/AlbumArtwork.png"
    },
    {
        name: "未来的志愿书（演奏版）",
        artist: "Days乐团",
        url: "./assets/music/Gaokao.Love.100Days.Soundtrack/15-Application of the Future (instrumental ver).wav",
        cover: "./assets/music/Gaokao.Love.100Days.Soundtrack/AlbumArtwork.png"
    },
    
    // TrueLove.Soundtrack - 以文件名为title，artist为"SPtime"
    {
        name: "枫海",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/01枫海.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "枫音乡-序幕曲-",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/02枫音乡-序幕曲-.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "枫华高中-印象曲-",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/03枫华高中-印象曲-.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "枫怡相伴",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/04枫怡相伴.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "枫茜相随",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/05枫茜相随.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "月海之音",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/06月海之音.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "萝莉乐园",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/07萝莉乐园.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "喧嚣港城",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/08喧嚣港城.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "流动都市",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/09流动都市.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "枫华高中-piano solo-",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/10枫华高中-piano solo-.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "Flamingo",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/11Flamingo.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "凉风拂面",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/12凉风拂面.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "枫霖之夜",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/13枫霖之夜.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "樱之忆",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/14樱之忆.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "夕海忆涌",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/15夕海忆涌.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "最想念的人",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/16最想念的人.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "枫茜相随-piano solo-",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/17枫茜相随-piano solo-.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "最想念的人-piano solo-",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/18最想念的人-piano solo-.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "枫花泪凝",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/19枫花泪凝.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "向死而生",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/20向死而生.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "最想念的人伴奏",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/21最想念的人伴奏.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "枫海伴奏",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/22枫海伴奏.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    },
    {
        name: "永恒的等待-寄语枫秋-",
        artist: "SPtime",
        url: "./assets/music/TrueLove.Soundtrack/23永恒的等待-寄语枫秋-.wav",
        cover: "./assets/music/TrueLove.Soundtrack/AlbumArtwork.jpg"
    }
];

class MusicPlayer {
    constructor() {
        this.playlist = playlistData;
        this.currentIndex = 0;
        this.isPlaying = false;
        this.audio = new Audio();
        this.volume = 0.7;
        this.audio.volume = this.volume;
        
        this.setupAudioEvents();
    }
    
    setupAudioEvents() {
        this.audio.addEventListener('ended', () => this.next());
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('loadedmetadata', () => this.updateDuration());
    }
    
    play() {
        if (this.playlist.length === 0) return;
        
        this.audio.src = this.playlist[this.currentIndex].url;
        this.audio.play();
        this.isPlaying = true;
        this.onPlay && this.onPlay();
        this.onMusicChange && this.onMusicChange();
    }
    
    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.onPause && this.onPause();
    }
    
    toggle() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }
    
    next() {
        if (this.playlist.length === 0) return;
        
        this.currentIndex = (this.currentIndex + 1) % this.playlist.length;
        this.play();
    }
    
    prev() {
        if (this.playlist.length === 0) return;
        
        this.currentIndex = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length;
        this.play();
    }
    
    changeTo(index) {
        if (index >= 0 && index < this.playlist.length) {
            this.currentIndex = index;
            this.play();
        }
    }
    
    seek(time) {
        this.audio.currentTime = time;
    }
    
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
        this.audio.volume = this.volume;
    }
    
    updateProgress() {
        const progress = this.audio.currentTime;
        const duration = this.audio.duration;
        this.onProgress && this.onProgress(progress, duration);
    }
    
    updateDuration() {
        const duration = this.audio.duration;
        this.onDurationUpdate && this.onDurationUpdate(duration);
    }
    
    getCurrentMusic() {
        return this.playlist[this.currentIndex] || null;
    }
    
    addToPlaylist(music) {
        this.playlist.push(music);
    }
    
    removeFromPlaylist(index) {
        if (index >= 0 && index < this.playlist.length) {
            this.playlist.splice(index, 1);
            if (this.currentIndex >= this.playlist.length) {
                this.currentIndex = this.playlist.length - 1;
            }
            if (this.currentIndex < 0) {
                this.currentIndex = 0;
            }
        }
    }
}

class MusicPlayerElement extends HTMLElement {
    constructor() {
        super();
        this.player = new MusicPlayer();
        this.isDragging = false;
        this.dragOffset = { x: 0, y: 0 };
        this.isPlaylistExpanded = false;
        this.playlistWindow = null;
        
        this.player.onPlay = () => this.updatePlayButton();
        this.player.onPause = () => this.updatePlayButton();
        this.player.onProgress = (progress, duration) => this.updateProgressBar(progress, duration);
        this.player.onDurationUpdate = (duration) => this.updateDuration(duration);
        this.player.onMusicChange = () => this.updateMusicInfo();
        
        this.render();
        this.setupEventListeners();
        this.createPlaylistWindow();
    }
    
    render() {
        this.innerHTML = `
            <style>
                /* 音乐播放器主容器 - 半透明渐变背景 */
                .music-player {
                    *{
                        user-select: none;
                    }
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    width: 320px;
                    height: 480px;
                    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.1) 100%);
                    backdrop-filter: blur(15px);
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    overflow: hidden;
                    z-index: 1000;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                }
                
                /* 专辑封面作为背景 - 完整显示在底部 */
                .album-cover-bg {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 100%;
                    z-index: -1;
                }
                
                .album-cover-bg img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    opacity: 0.4;
                    filter: blur(2px);
                }
                
                /* 播放器头部 - 半透明黑色 */
                .player-header {
                    background: rgba(0, 0, 0, 0.7);
                    padding: 15px 20px;
                    border-radius: 15px 15px 0 0;
                    cursor: move;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-shrink: 0;
                    position: relative;
                    z-index: 2;
                }
                
                .player-title {
                    color: white;
                    font-size: 16px;
                    font-weight: 500;
                }
                
                .player-controls {
                    display: flex;
                    gap: 10px;
                }
                
                .control-btn {
                    background: rgba(255, 255, 255, 0.2);
                    border: none;
                    color: white;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    transition: all 0.3s ease;
                }
                
                .control-btn:hover {
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(1.1);
                }
                
                /* 专辑封面显示区域 - 缩小并居中 */
                .album-cover {
                    width: 120px;
                    height: 120px;
                    margin: 20px auto;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                    flex-shrink: 0;
                    position: relative;
                    z-index: 2;
                }
                
                .album-cover img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                /* 音乐信息 - 半透明背景 */
                .music-info {
                    padding: 0 20px;
                    text-align: center;
                    margin-bottom: 20px;
                    position: relative;
                    z-index: 2;
                }
                
                .music-title {
                    color: white;
                    font-size: 18px;
                    font-weight: 500;
                    margin-bottom: 5px;
                    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
                }
                
                .music-artist {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 14px;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
                }
                
                /* 进度条容器 - 半透明背景 */
                .progress-container {
                    padding: 0 20px;
                    margin-bottom: 15px;
                    position: relative;
                    z-index: 2;
                }
                
                .progress-bar {
                    background: rgba(255, 255, 255, 0.2);
                    height: 4px;
                    border-radius: 2px;
                    cursor: pointer;
                    margin-bottom: 8px;
                    position: relative;
                    overflow: hidden;
                }
                
                .progress-fill {
                    background: linear-gradient(135deg, #002fff48 0%, #212121 100%);
                    height: 100%;
                    border-radius: 2px;
                    transition: width 0.1s ease;
                    width: 0%;
                }
                
                .time-display {
                    display: flex;
                    justify-content: space-between;
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 12px;
                }
                
                /* 播放控制 - 半透明背景 */
                .playback-controls {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;
                    margin-bottom: 20px;
                    padding: 0 20px;
                    position: relative;
                    z-index: 2;
                }
                
                .play-btn {
                    background: linear-gradient(135deg, #002fff48 0%, #212121 100%);
                    border: none;
                    color: white;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
                }
                
                .play-btn:hover {
                    transform: scale(1.1);
                    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
                }
                
                /* 音量控制 - 半透明背景 */
                .volume-container {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 0 20px;
                    margin-bottom: 20px;
                    position: relative;
                    z-index: 2;
                }
                
                .volume-bar {
                    background: rgba(255, 255, 255, 0.2);
                    height: 4px;
                    border-radius: 2px;
                    cursor: pointer;
                    flex: 1;
                    position: relative;
                    overflow: hidden;
                }
                
                .volume-fill {
                    background: rgba(255, 255, 255, 0.8);
                    height: 100%;
                    border-radius: 2px;
                    transition: width 0.1s ease;
                    width: 70%;
                }
                
                /* 最小化视图 - 半透明渐变 */
                .minimized-view {
                    display: none;
                    padding: 15px;
                    background: rgba(0, 0, 0, 0.8);
                    border-radius: 15px;
                    position: relative;
                    z-index: 2;
                }
                
                .music-player.minimized {
                    width: 200px;
                    height: auto;
                    padding: 0;
                }
                
                .music-player.minimized .player-header,
                .music-player.minimized .album-cover-bg,
                .music-player.minimized .album-cover,
                .music-player.minimized .music-info,
                .music-player.minimized .progress-container,
                .music-player.minimized .playback-controls,
                .music-player.minimized .volume-container {
                    display: none;
                }
                
                .music-player.minimized .minimized-view {
                    display: block;
                }
                
                /* 播放列表切换按钮高亮 */
                .control-btn.playlist-toggle.active {
                    background: linear-gradient(135deg, #002fff48 0%, #212121 100%);
                }
                
                /* 播放列表窗口样式保持不变 */
                .playlist-window {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 400px;
                    height: 500px;
                    background: linear-gradient(135deg, rgba(30, 30, 50, 0.95) 0%, rgba(20, 20, 40, 0.95) 100%);
                    backdrop-filter: blur(20px);
                    border-radius: 15px;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
                    z-index: 1001;
                    display: none;
                    flex-direction: column;
                    overflow: hidden;
                }
                
                .playlist-window.show {
                    display: flex;
                }
                
                .playlist-header {
                    background: rgba(0, 0, 0, 0.7);
                    padding: 15px 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-shrink: 0;
                }
                
                .playlist-title {
                    color: white;
                    font-size: 18px;
                    font-weight: 500;
                }
                
                .playlist-close {
                    background: rgba(255, 255, 255, 0.2);
                    border: none;
                    color: white;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    transition: all 0.3s ease;
                }
                
                .playlist-close:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
                
                .playlist-content {
                    flex: 1;
                    overflow-y: auto;
                    padding: 10px;
                }
                
                .playlist-item {
                    display: flex;
                    align-items: center;
                    padding: 12px 15px;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    margin-bottom: 6px;
                    background: rgba(255, 255, 255, 0.05);
                }
                
                .playlist-item:hover {
                    background: rgba(255, 255, 255, 0.1);
                }
                
                .playlist-item.active {
                    background: linear-gradient(135deg, #002fff48 0%, #212121 100%);
                }
                
                .playlist-item-info {
                    flex: 1;
                    margin-left: 15px;
                }
                
                .playlist-item-title {
                    color: white;
                    font-size: 14px;
                    font-weight: 500;
                    margin-bottom: 3px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                
                .playlist-item-artist {
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 12px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                
                .playlist-item-number {
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 12px;
                    min-width: 30px;
                    text-align: center;
                }
                
                /* 滚动条样式 */
                .playlist-content::-webkit-scrollbar {
                    width: 6px;
                }
                
                .playlist-content::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 3px;
                }
                
                .playlist-content::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 3px;
                }
                
                .playlist-content::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.5);
                }
            </style>
            
            <div id="musicPlayer" class="music-player">
                <!-- 专辑封面背景层 -->
                <div class="album-cover-bg">
                    <img id="albumCoverBg" src="" alt="专辑封面背景">
                </div>
                
                <div class="player-header">
                    <div class="player-title">音乐播放器</div>
                    <div class="player-controls">
                        <button class="control-btn playlist-toggle" id="playlistToggle" title="播放列表">📋</button>
                        <button class="control-btn" id="minimizeBtn" title="最小化">−</button>
                        <button class="control-btn" id="closeBtn" title="关闭">✕</button>
                    </div>
                </div>
                
                <div class="album-cover">
                    <img id="albumCover" src="" alt="专辑封面">
                </div>
                
                <div class="music-info">
                    <div class="music-title" id="musicTitle">暂无音乐</div>
                    <div class="music-artist" id="musicArtist">未知艺术家</div>
                </div>
                
                <div class="progress-container">
                    <div class="progress-bar" id="progressBar">
                        <div class="progress-fill" id="progressFill"></div>
                    </div>
                    <div class="time-display">
                        <span id="currentTime">0:00</span>
                        <span id="totalTime">0:00</span>
                    </div>
                </div>
                
                <div class="playback-controls">
                    <button class="control-btn" id="prevBtn">⏮</button>
                    <button class="play-btn" id="playBtn">▶</button>
                    <button class="control-btn" id="nextBtn">⏭</button>
                </div>
                
                <div class="volume-container">
                    <span>🔊</span>
                    <div class="volume-bar" id="volumeSlider">
                        <div class="volume-fill" id="volumeFill"></div>
                    </div>
                </div>
                
                <div class="minimized-view">
                    <div style="text-align: center; font-size: 12px;">
                        <div id="minimizedTitle">暂无音乐</div>
                        <div style="display: flex; justify-content: center; gap: 10px; margin-top: 5px;">
                            <button class="control-btn" id="minimizedPrevBtn">⏮</button>
                            <button class="control-btn" id="minimizedPlayBtn">▶</button>
                            <button class="control-btn" id="minimizedNextBtn">⏭</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    createPlaylistWindow() {
        const playlistWindow = document.createElement('div');
        playlistWindow.className = 'playlist-window';
        playlistWindow.id = 'playlistWindow';
        playlistWindow.innerHTML = `
            <div class="playlist-header">
                <div class="playlist-title">播放列表</div>
                <button class="playlist-close" id="playlistClose">✕</button>
            </div>
            <div class="playlist-content" id="playlistContent"></div>
        `;
        
        document.body.appendChild(playlistWindow);
        this.playlistWindow = playlistWindow;
        
        const playlistClose = playlistWindow.querySelector('#playlistClose');
        playlistClose.addEventListener('click', () => this.hidePlaylist());
        
        document.addEventListener('click', (e) => {
            if (this.isPlaylistExpanded && 
                !playlistWindow.contains(e.target) && 
                !e.target.closest('#playlistToggle')) {
                this.hidePlaylist();
            }
        });
    }
    
    setupEventListeners() {
        const playerElement = this.querySelector('#musicPlayer');
        const playBtn = this.querySelector('#playBtn');
        const prevBtn = this.querySelector('#prevBtn');
        const nextBtn = this.querySelector('#nextBtn');
        const progressBar = this.querySelector('#progressBar');
        const volumeSlider = this.querySelector('#volumeSlider');
        const closeBtn = this.querySelector('#closeBtn');
        const minimizeBtn = this.querySelector('#minimizeBtn');
        const playlistToggle = this.querySelector('#playlistToggle');
        const header = this.querySelector('.player-header');
        
        playBtn.addEventListener('click', () => this.player.toggle());
        prevBtn.addEventListener('click', () => this.player.prev());
        nextBtn.addEventListener('click', () => this.player.next());
        
        this.querySelector('#minimizedPlayBtn').addEventListener('click', () => this.player.toggle());
        this.querySelector('#minimizedPrevBtn').addEventListener('click', () => this.player.prev());
        this.querySelector('#minimizedNextBtn').addEventListener('click', () => this.player.next());
        
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            const duration = this.player.audio.duration;
            this.player.seek(percent * duration);
        });
        
        volumeSlider.addEventListener('click', (e) => {
            const rect = volumeSlider.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            this.player.setVolume(percent);
            this.updateVolumeBar(percent);
        });
        
        playlistToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (this.isPlaylistExpanded) {
                this.hidePlaylist();
            } else {
                this.showPlaylist();
            }
        });
        
        minimizeBtn.addEventListener('click', () => {
            playerElement.classList.toggle('minimized');
            minimizeBtn.textContent = playerElement.classList.contains('minimized') ? '+' : '−';
        });
        
        closeBtn.addEventListener('click', () => this.hide());
        
        header.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            const rect = playerElement.getBoundingClientRect();
            this.dragOffset.x = e.clientX - rect.left;
            this.dragOffset.y = e.clientY - rect.top;
            header.style.cursor = 'grabbing';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (this.isDragging) {
                playerElement.style.left = (e.clientX - this.dragOffset.x) + 'px';
                playerElement.style.top = (e.clientY - this.dragOffset.y) + 'px';
                playerElement.style.right = 'auto';
                playerElement.style.bottom = 'auto';
            }
        });
        
        document.addEventListener('mouseup', () => {
            this.isDragging = false;
            header.style.cursor = 'move';
        });
        
        this.updateMusicInfo();
    }
    
    showPlaylist() {
        this.isPlaylistExpanded = true;
        this.playlistWindow.classList.add('show');
        playlistToggle.classList.add('active');
        this.renderPlaylist();
    }
    
    hidePlaylist() {
        this.isPlaylistExpanded = false;
        this.playlistWindow.classList.remove('show');
        playlistToggle.classList.remove('active');
    }
    
    renderPlaylist() {
        const playlistContent = this.playlistWindow.querySelector('#playlistContent');
        playlistContent.innerHTML = '';
        
        this.player.playlist.forEach((music, index) => {
            const item = document.createElement('div');
            item.className = 'playlist-item';
            if (index === this.player.currentIndex) {
                item.classList.add('active');
            }
            
            item.innerHTML = `
                <div class="playlist-item-number">${index + 1}</div>
                <div class="playlist-item-info">
                    <div class="playlist-item-title">${music.name}</div>
                    <div class="playlist-item-artist">${music.artist}</div>
                </div>
            `;
            
            item.addEventListener('click', () => {
                this.player.changeTo(index);
                this.updatePlaylistHighlight();
            });
            
            playlistContent.appendChild(item);
        });
    }
    
    updatePlaylistHighlight() {
        if (this.isPlaylistExpanded) {
            const items = this.playlistWindow.querySelectorAll('.playlist-item');
            items.forEach((item, index) => {
                if (index === this.player.currentIndex) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    }
    
    updatePlayButton() {
        const playBtn = this.querySelector('#playBtn');
        const minimizedPlayBtn = this.querySelector('#minimizedPlayBtn');
        const icon = this.player.isPlaying ? '⏸' : '▶';
        playBtn.textContent = icon;
        minimizedPlayBtn.textContent = icon;
    }
    
    updateProgressBar(progress, duration) {
        const progressFill = this.querySelector('#progressFill');
        const currentTimeEl = this.querySelector('#currentTime');
        
        if (duration) {
            const percent = (progress / duration) * 100;
            progressFill.style.width = percent + '%';
            currentTimeEl.textContent = this.formatTime(progress);
        }
    }
    
    updateDuration(duration) {
        const totalTimeEl = this.querySelector('#totalTime');
        totalTimeEl.textContent = this.formatTime(duration);
    }
    
    updateVolumeBar(volume) {
        const volumeFill = this.querySelector('#volumeFill');
        volumeFill.style.width = (volume * 100) + '%';
    }
    
    updateMusicInfo() {
        const currentMusic = this.player.getCurrentMusic();
        if (currentMusic) {
            this.querySelector('#musicTitle').textContent = currentMusic.name;
            this.querySelector('#musicArtist').textContent = currentMusic.artist;
            this.querySelector('#albumCover').src = currentMusic.cover;
            this.querySelector('#albumCoverBg').src = currentMusic.cover;
            this.querySelector('#minimizedTitle').textContent = currentMusic.name;
            
            if (this.isPlaylistExpanded) {
                this.updatePlaylistHighlight();
            }
        }
    }
    
    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    show() {
        this.style.display = 'block';
        this.style.position = 'fixed'
        this.style.bottom = '20px'
        this.style.right = '20px'
        this.style.left = 'auto'
        this.style.top = 'auto'
    }
    
    hide() {
        this.style.display = 'none';
        if (this.isPlaylistExpanded) {
            this.hidePlaylist();
        }
    }
}

function initMusicPlayer() {
    const musicPlayer = document.createElement('music-player');
    document.body.appendChild(musicPlayer);
    window.musicPlayer = musicPlayer;
}

function showMusicPlayer() {
    if (window.musicPlayer) {
        window.musicPlayer.show();
    }
}

function hideMusicPlayer() {
    if (window.musicPlayer) {
        window.musicPlayer.hide();
    }
}

function playMusic() {
    if (window.musicPlayer) {
        window.musicPlayer.player.play();
    }
}

function pauseMusic() {
    if (window.musicPlayer) {
        window.musicPlayer.player.pause();
    }
}

function nextMusic() {
    if (window.musicPlayer) {
        window.musicPlayer.player.next();
    }
}

function prevMusic() {
    if (window.musicPlayer) {
        window.musicPlayer.player.prev();
    }
}

function changeToMusic(index) {
    if (window.musicPlayer) {
        window.musicPlayer.player.changeTo(index);
    }
}

customElements.define('music-player', MusicPlayerElement);

document.addEventListener('DOMContentLoaded', () => {
    initMusicPlayer();
    
    setTimeout(() => {
        showMusicPlayer();
    }, 1000);
});

window.initMusicPlayer = initMusicPlayer;
window.showMusicPlayer = showMusicPlayer;
window.hideMusicPlayer = hideMusicPlayer;
window.playMusic = playMusic;
window.pauseMusic = pauseMusic;
window.nextMusic = nextMusic;
window.prevMusic = prevMusic;
window.changeToMusic = changeToMusic;