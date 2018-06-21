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
// 子弹
var EnemyBullet = (function (_super) {
    __extends(EnemyBullet, _super);
    function EnemyBullet() {
        var _this = _super.call(this) || this;
        _this.speed = 10;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initView, _this);
        return _this;
    }
    EnemyBullet.prototype.initView = function () {
        var bigBullet = Lg.createBitmapByName("n3_png");
        bigBullet.scaleX = 0.5;
        bigBullet.scaleY = 0.5;
        this.addChild(bigBullet);
        //    bigBullet.x = this.bigBitmap.x + 84;
        //    bigBullet.y = this.bigBitmap.y + 80
    };
    EnemyBullet.prototype.move = function () {
        this.y += this.speed;
    };
    return EnemyBullet;
}(BaseObjcet));
__reflect(EnemyBullet.prototype, "EnemyBullet");
