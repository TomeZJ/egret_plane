/**
 * 玩家飞机
 */
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
var MyPlane = (function (_super) {
    __extends(MyPlane, _super);
    function MyPlane() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initView, _this); //添加精灵
        return _this;
    }
    //初始化
    MyPlane.prototype.initView = function () {
        this.type = 1;
        this.myPlaneBitmap = Lg.createBitmapByName("blue_plane_png");
        this.myPlaneBitmap.scaleX = 1.7;
        this.myPlaneBitmap.scaleY = 1.7;
        this.x = (this.stage.stageWidth / 2) - (this.myPlaneBitmap.width / 2);
        this.y = this.stage.height / 3;
        this.addChild(this.myPlaneBitmap);
    };
    MyPlane.prototype.initImage = function () {
        this.myPlaneBitmap = Lg.createBitmapByName("red_plane_png");
        this.myPlaneBitmap.scaleX = 1.7;
        this.myPlaneBitmap.scaleY = 1.7;
        this.addChild(this.myPlaneBitmap);
    };
    //飞机爆炸
    MyPlane.prototype.PlaneExplosion = function () {
        var data = RES.getRes("myplaneexplosion_json");
        var txtr = RES.getRes("myplaneexplosion_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var mc1 = new egret.MovieClip(mcFactory.generateMovieClipData("explosion"));
        this.addChild(mc1);
        mc1.scaleX = 1.7;
        mc1.scaleY = 1.7;
        mc1.gotoAndPlay("exp", 1);
    };
    return MyPlane;
}(BaseObjcet));
__reflect(MyPlane.prototype, "MyPlane");
