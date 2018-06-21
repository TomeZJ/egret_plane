var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var StopView = (function (_super) {
    __extends(StopView, _super);
    function StopView(main) {
        var _this = _super.call(this) || this;
        _this.main = main;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initStartView, _this);
        return _this;
    }
    StopView.prototype.initStartView = function () {
        var sky = Lg.createBitmapByName("mainbg_jpg");
        this.addChildAt(sky, 0);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        var startButton = new eui.Button();
        startButton.skinName = "btnzailaiyici";
        startButton.x = (this.stage.stageWidth / 2) - (startButton.width / 2);
        startButton.y = this.stage.stageHeight / 3;
        this.addChild(startButton);
        startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    };
    /**
     * 点击按钮
     * Click the button
     */
    StopView.prototype.onButtonClick = function (e) {
        var bggun = new MainView(this.main);
        this.main.addChild(bggun);
        this.main.removeChild(this);
        var sound = RES.getRes("get_goods_wav");
        sound.play(0, 1);
    };
    return StopView;
}(egret.Sprite));
__reflect(StopView.prototype, "StopView");
