//玩家子弹
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
var PlaneBullet = (function (_super) {
    __extends(PlaneBullet, _super);
    function PlaneBullet() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initFil, _this);
        return _this;
    }
    // 子弹种类
    PlaneBullet.prototype.initView = function (name) {
        switch (name) {
            case 1:
                var myBUllet = Lg.createBitmapByName("blue_bullet_png");
                myBUllet.scaleX = 1.3;
                myBUllet.scaleY = 1.3;
                this.addChild(myBUllet);
                break;
            case 2:
                this.myBUllet = Lg.createBitmapByName("my_bullet_purple_png");
                this.myBUllet.scaleX = 1.5;
                this.myBUllet.scaleY = 1.5;
                this.addChild(this.myBUllet);
                break;
        }
    };
    PlaneBullet.prototype.initFil = function () {
        this.type = 6;
        // this.myBUllet = Lg.createBitmapByName("blue_bullet_png")
        // this.addChild(this.myBUllet)
    };
    return PlaneBullet;
}(BaseObjcet));
__reflect(PlaneBullet.prototype, "PlaneBullet");
