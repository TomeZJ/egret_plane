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
/**
 *    大敌机
 *
 */
var EnemyBig = (function (_super) {
    __extends(EnemyBig, _super);
    //
    function EnemyBig() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initView, _this);
        return _this;
    }
    EnemyBig.prototype.initView = function () {
        var bigBitmap = Lg.createBitmapByName("big_1_png");
        this.HP = 20;
        bigBitmap.scaleX = 1.7;
        bigBitmap.scaleY = 1.7;
        this.addChild(bigBitmap);
    };
    //  图片二
    EnemyBig.prototype.initView2 = function () {
        var bigBitmap = Lg.createBitmapByName("big_2_png");
        bigBitmap.scaleX = 1.7;
        bigBitmap.scaleY = 1.7;
        this.addChild(bigBitmap);
    };
    //飞机爆炸动画
    EnemyBig.prototype.initMoviceClip = function (big, gyg, bullet) {
        var _this = this;
        var data = RES.getRes("big_json");
        var txtr = RES.getRes("big_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        // console.log(mcFactory);
        var mc1 = new egret.MovieClip(mcFactory.generateMovieClipData("big"));
        // console.log(mc1);
        this.addChild(mc1);
        mc1.scaleX = 1.7;
        mc1.scaleY = 1.7;
        mc1.gotoAndPlay("big", 1);
        mc1.addEventListener(egret.Event.COMPLETE, function (e) {
            if (big.parent != null) {
                // gyg.objEnemy.Free(enemy);
                gyg.bigList.splice(gyg.bigList.indexOf(big), 1);
                _this.removeChildren;
                gyg.removeChild(big);
            }
        }, this);
    };
    return EnemyBig;
}(BaseObjcet));
__reflect(EnemyBig.prototype, "EnemyBig");
