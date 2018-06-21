var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AudioManager = (function () {
    function AudioManager() {
    }
    AudioManager.getInstance = function () {
        if (this.instance == null) {
            this.instance = new AudioManager();
        }
        return this.instance;
    };
    /**
     * 播放战斗音乐
     */
    AudioManager.prototype.playFightAudio = function () {
        // 背景音乐
        this.sound = RES.getRes("game_mp3");
        this.sound.play();
    };
    AudioManager.prototype.playStop = function () {
        this.sound.close();
    };
    return AudioManager;
}());
__reflect(AudioManager.prototype, "AudioManager");
