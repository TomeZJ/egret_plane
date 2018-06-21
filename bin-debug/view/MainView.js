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
 * 游戏进行的主界面
 */
var MainView = (function (_super) {
    __extends(MainView, _super);
    function MainView(t) {
        var _this = _super.call(this) || this;
        //积分
        _this.totalIntegral = 0;
        _this.BulletList = [];
        _this.EnemyList = [];
        _this.EnemyNum = 6;
        _this.bigList = [];
        _this.bigNum = 1;
        _this.bigBulletLits = [];
        _this.flyLeft = true;
        _this.bulletGoList = [];
        _this.main = t;
        //创建池子
        _this.objcBullet = new ObjPool();
        _this.objEnemy = new ObjPool();
        _this.objcBig = new ObjPool();
        _this.objcBigBullet = new ObjPool();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.myPlaneView, _this);
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.onEnterFrame, _this); // 帧事件
        return _this;
    }
    MainView.prototype.myPlaneView = function () {
        //背景
        this.initBG();
        //玩家飞机
        this.MyPlane();
        //敌机
        this.enemyPlaneImage();
        //积分
        this.totalIntegralText = new egret.TextField();
        this.totalIntegralText.text = "积分:" + this.totalIntegral;
        this.totalIntegralText.x = 10;
        this.totalIntegralText.y = 10;
        this.addChild(this.totalIntegralText);
    };
    MainView.prototype.initBG = function () {
        var bggun = new BgMap();
        this.addChildAt(bggun, 0);
        bggun.start();
    };
    MainView.prototype.MyPlane = function () {
        this.myPlane = new MyPlane();
        this.addChild(this.myPlane);
        //触摸事件
        this.myPlane.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.planeMobile, this);
        this.myPlane.touchEnabled = true;
        //飞机子弹
        this.timer = new egret.Timer(200, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerInitPlaneBullet, this);
        this.timer.start();
        //飞机子弹二
        this.timer1 = new egret.Timer(200, 0);
        this.timer1.addEventListener(egret.TimerEvent.TIMER, this.timerInitPlaneBullet1, this);
        // this.timer1.start();
        //big 敌机
        this.big = new egret.Timer(1000, 0);
        this.big.addEventListener(egret.TimerEvent.TIMER, this.timerInitBig, this);
        this.big.start();
        //物品
        this.wupin = new egret.Timer(8000, 0);
        this.wupin.addEventListener(egret.TimerEvent.TIMER, this.timerInitwuping, this);
        this.wupin.start();
    };
    //飞机移动
    MainView.prototype.planeMobile = function (event) {
        this.myPlane.x = event.stageX - this.myPlane.width / 2;
        this.myPlane.y = event.stageY - this.myPlane.height / 2;
    };
    MainView.prototype.enemyPlaneImage = function () {
        this.timerEnemy = new egret.Timer(1000, 0);
        this.timerEnemy.addEventListener(egret.TimerEvent.TIMER, this.timerInitEnemy, this);
        this.timerEnemy.start();
    };
    MainView.prototype.timerInitEnemy = function () {
        if (this.EnemyList.length < this.EnemyNum) {
            var enemy = new EnemyPlane();
            enemy.x = Math.ceil(Math.random() * this.stage.stageWidth);
            enemy.init(this.stage);
            this.addChild(enemy);
            this.EnemyList.push(enemy);
        }
    };
    /**帧事件 */
    MainView.prototype.onEnterFrame = function () {
        var gyg = this;
        if (gyg == null) {
            return;
        }
        //敌机
        gyg.EnemyList.forEach(function (enemy) {
            enemy.y += enemy.speed;
            if (Math.random() > 0.99) {
                enemy.flyLeft = !enemy.flyLeft;
            }
            if (enemy.x <= 0) {
                enemy.flyLeft = false;
            }
            if (enemy.x >= gyg.stage.stageWidth - enemy.width) {
                enemy.flyLeft = true;
            }
            if (enemy.flyLeft) {
                enemy.x -= Math.ceil(Math.random() * 3);
            }
            else {
                enemy.x += Math.ceil(Math.random() * 3);
            }
            if (enemy.y > gyg.stage.stageHeight) {
                if (enemy.parent != null) {
                    gyg.objEnemy.Free(enemy);
                    gyg.EnemyList.splice(gyg.EnemyList.indexOf(enemy), 1);
                    gyg.removeChild(enemy);
                }
            }
        });
        //子弹形态二
        gyg.bulletGoList.forEach(function (bulletGo1) {
            bulletGo1.y += 1;
            if (bulletGo1.x <= 0) {
                bulletGo1.flyLeft = false;
            }
            if (bulletGo1.x >= gyg.stage.stageWidth - bulletGo1.width) {
                bulletGo1.flyLeft = true;
            }
            if (bulletGo1.flyLeft == true) {
                bulletGo1.x -= 3;
            }
            else {
                bulletGo1.x += 3;
            }
            //碰撞 紫色
            if (gyg.myPlane.hitTestPoint(bulletGo1.x, bulletGo1.y)) {
                if (bulletGo1.parent != null) {
                    gyg.removeChild(bulletGo1);
                    gyg.pemgzhuang();
                }
            }
        });
        gyg.BulletList.forEach(function (bullet) {
            if (bullet.timerOne == true) {
                bullet.y -= 20;
            }
            if (bullet.timerOne == false && bullet.isAlive == true) {
                bullet.y -= 16;
                bullet.x += 6 * (Math.sin(bullet.y / 100));
            }
            if (bullet.timerOne == false && bullet.isAlive == false) {
                bullet.y -= 16;
                bullet.x -= 6 * (Math.sin(bullet.y / 100));
            }
        });
        //big 敌机
        gyg.bigList.forEach(function (enemyBig) {
            enemyBig.y += 0.2;
            if (enemyBig.x <= 0) {
                enemyBig.flyLeft = false;
            }
            if (enemyBig.x >= gyg.stage.stageWidth - enemyBig.width) {
                enemyBig.flyLeft = true;
            }
            if (enemyBig.flyLeft) {
                enemyBig.x -= Math.ceil(Math.random() * 3);
            }
            else {
                enemyBig.x += Math.ceil(Math.random() * 3);
            }
            // gyg.myPlanebaoza(enemyBig.x, enemyBig.y);
        });
        gyg.bigBulletLits.forEach(function (bigBullet) {
            bigBullet.move();
            if (gyg == null || gyg.stage == null) {
                return;
            }
            if (bigBullet.y >= gyg.stage.stageHeight) {
                if (bigBullet.parent != null) {
                    gyg.removeChild(bigBullet);
                }
            }
            gyg.myPlanebaoza(bigBullet.x, bigBullet.y);
        });
        gyg.gameHitTest();
    };
    //碰撞
    MainView.prototype.gameHitTest = function () {
        var gyg = this;
        if (gyg.totalIntegralText == null) {
            return;
        }
        gyg.EnemyList.forEach(function (enemy) {
            gyg.BulletList.forEach(function (bullet) {
                if (enemy.HP != 0 && enemy.hitTestPoint(bullet.x, bullet.y) == true) {
                    if (bullet.parent != null) {
                        enemy.HP--;
                        gyg.removeChild(bullet);
                    }
                    if (enemy.HP == 0) {
                        var sound = RES.getRes("explosion_mp3");
                        sound.play(0, 1);
                        enemy.EnemyExplosion(enemy, gyg, bullet);
                        gyg.totalIntegral += 100;
                    }
                }
                gyg.bigList.forEach(function (enemyBig) {
                    if (enemyBig.HP != 0 && enemyBig.hitTestPoint(bullet.x, bullet.y) == true) {
                        if (bullet.parent != null) {
                            enemyBig.HP--;
                            gyg.removeChild(bullet);
                        }
                        if (enemyBig.HP == 0) {
                            var sound = RES.getRes("bigexplosion_wav");
                            sound.play(0, 1);
                            enemyBig.initMoviceClip(enemyBig, gyg, bullet);
                        }
                    }
                });
            });
        });
        gyg.totalIntegralText.text = "积分:" + gyg.totalIntegral;
    };
    //时间控制创建 子弹
    MainView.prototype.timerInitPlaneBullet = function () {
        var objc = this.objcBullet.hasObjcet();
        var bullet = this.objcBullet.AllcoObj(PlaneBullet);
        bullet.initView(1);
        bullet.timerOne = true;
        bullet.x = (this.myPlane.x) + (this.myPlane.width / 2) - 10;
        bullet.y = this.myPlane.y - 65;
        if (objc == false) {
            this.addChild(bullet);
            this.BulletList.push(bullet);
        }
        var sound = RES.getRes("shoot_mp3");
        sound.play(0, 1);
    };
    MainView.prototype.timerInitwuping = function () {
        if (this.bulletGoList.length <= 1) {
            this.bulletGo1 = new egret.Bitmap();
            this.bulletGo1 = Lg.createBitmapByName("bullet_goods1_png");
            this.bulletGo1.x = Math.random() * this.stage.stageWidth;
            this.bulletGo1.y = 0;
            this.addChild(this.bulletGo1);
            this.bulletGoList.push(this.bulletGo1);
            if (Math.random() > 0.5) {
                this.flyLeft = true;
            }
            else {
                this.flyLeft = false;
            }
        }
    };
    //时间控制创建 子弹
    MainView.prototype.timerInitPlaneBullet1 = function () {
        var objc = this.objcBullet.hasObjcet();
        var bullet = this.objcBullet.AllcoObj(PlaneBullet);
        bullet.x = (this.myPlane.x) + (this.myPlane.width / 2) - 10 + 100;
        bullet.y = this.myPlane.y - 65;
        bullet.isAlive = true;
        bullet.timerOne = false;
        bullet.initView(2);
        if (objc == false) {
            this.addChild(bullet);
            this.BulletList.push(bullet);
        }
        var objc2 = this.objcBullet.hasObjcet();
        var bullet2 = this.objcBullet.AllcoObj(PlaneBullet);
        bullet2.x = (this.myPlane.x) + (this.myPlane.width / 2) - 10 - 100;
        bullet2.y = this.myPlane.y - 65;
        bullet2.isAlive = false;
        bullet2.initView(2);
        bullet2.timerOne = false;
        if (objc2 == false) {
            this.addChild(bullet2);
            this.BulletList.push(bullet2);
        }
    };
    MainView.prototype.timerInitBig = function () {
        if (this.bigList.length < this.bigNum) {
            var objc = this.objcBig.hasObjcet();
            var big = this.objcBig.AllcoObj(EnemyBig);
            this.addChildAt(big, 1);
            big.x = Math.random() * (this.stage.stageWidth - 100);
            big.y = 0;
            this.bigList.push(big);
        }
        // var bigEnemy: egret.Timer = new egret.Timer(3000, 1);
        // bigEnemy.addEventListener(egret.TimerEvent.TIMER, this.initbigBullet, this);
        // bigEnemy.start();
        this.initbigBullet();
    };
    MainView.prototype.initbigBullet = function () {
        var gyg = this;
        this.bigList.forEach(function (enemyBig) {
            var objc = gyg.objcBigBullet.hasObjcet();
            var bigBullet = gyg.objcBigBullet.AllcoObj(EnemyBullet);
            bigBullet.x = enemyBig.x + 84;
            bigBullet.y = enemyBig.y + 84;
            gyg.addChild(bigBullet);
            gyg.bigBulletLits.push(bigBullet);
        });
    };
    MainView.prototype.myPlanebaoza = function (x, y) {
        if (this.myPlane.hitTestPoint(x, y) == true) {
            //背景关闭
            this.timer.stop(); //停止 时间创建
            this.timer1.stop();
            this.big.stop();
            this.timerEnemy.stop();
            this.wupin.stop();
            this.removeChildren();
            this.myPlane.touchEnabled = false; //点击事件关闭
            // this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this); 
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
            var sktop = new StopView(this.main);
            this.main.addChild(sktop);
            this.main.removeChild(this);
        }
    };
    MainView.prototype.pemgzhuang = function () {
        this.timer.stop();
        this.timer1.start();
        this.myPlane.initImage();
    };
    return MainView;
}(egret.DisplayObjectContainer));
__reflect(MainView.prototype, "MainView");
