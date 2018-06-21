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
var EnemyPlane = (function (_super) {
    __extends(EnemyPlane, _super);
    function EnemyPlane() {
        var _this = _super.call(this) || this;
        _this.speed = 3;
        _this.flyLeft = true; //是否向左飞
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initView, _this);
        return _this;
    }
    EnemyPlane.prototype.initView = function () {
        this.myEnemy = Lg.createBitmapByName("small_enemy_png");
        this.HP = 2;
        this.myEnemy.scaleX = 1.7;
        this.myEnemy.scaleY = 1.7;
        this.addChild(this.myEnemy);
    };
    EnemyPlane.prototype.init = function (stage) {
        this.HP = 1;
        this.y = 0;
        //随机数
        this.x = Math.ceil(Math.random() * stage.stageWidth);
        if (Math.random() > 0.5) {
            this.flyLeft = true;
        }
        else {
            this.flyLeft = false;
        }
    };
    //飞机爆炸
    EnemyPlane.prototype.EnemyExplosion = function (enemy, gyg, bullet) {
        this.removeChildren();
        var data = RES.getRes("small_json");
        var txtr = RES.getRes("small_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var mc1 = new egret.MovieClip(mcFactory.generateMovieClipData("small"));
        this.addChild(mc1);
        mc1.scaleX = 1.7;
        mc1.scaleY = 1.7;
        mc1.gotoAndPlay("baoza", 0);
        mc1.addEventListener(egret.Event.COMPLETE, function (e) {
            if (enemy.parent != null) {
                gyg.objEnemy.Free(enemy);
                gyg.EnemyList.splice(gyg.EnemyList.indexOf(enemy), 1);
                gyg.removeChild(enemy);
            }
        }, this);
    };
    return EnemyPlane;
}(BaseObjcet));
__reflect(EnemyPlane.prototype, "EnemyPlane");
