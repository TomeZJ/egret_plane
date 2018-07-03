var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(r,a){function s(t){try{l(n.next(t))}catch(e){a(e)}}function o(t){try{l(n["throw"](t))}catch(e){a(e)}}function l(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(s,o)}l((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return n([t,e])}}function n(i){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,a&&(s=a[2&i[0]?"return":i[0]?"throw":"next"])&&!(s=s.call(a,i[1])).done)return s;switch(a=0,s&&(i=[0,s.value]),i[0]){case 0:case 1:s=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,a=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(s=l.trys,!(s=s.length>0&&s[s.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){l.label=i[1];break}if(6===i[0]&&l.label<s[1]){l.label=s[1],s=i;break}if(s&&l.label<s[2]){l.label=s[2],l.ops.push(i);break}s[2]&&l.ops.pop(),l.trys.pop();continue}i=e.call(t,l)}catch(n){i=[6,n],a=0}finally{r=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var r,a,s,o,l={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},BaseObjcet=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e}(egret.Sprite);__reflect(BaseObjcet.prototype,"BaseObjcet");var EnemyBullet=function(t){function e(){var e=t.call(this)||this;return e.speed=10,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.initView,e),e}return __extends(e,t),e.prototype.initView=function(){var t=Lg.createBitmapByName("n3_png");t.scaleX=.5,t.scaleY=.5,this.addChild(t)},e.prototype.move=function(){this.y+=this.speed},e}(BaseObjcet);__reflect(EnemyBullet.prototype,"EnemyBullet");var BgMap=function(t){function e(){var e=t.call(this)||this;return e.speed=2,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(t){this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this),this.stageW=this.stage.stageWidth,this.stageH=this.stage.stageHeight;var e=RES.getRes("bg_png");this.textureHeight=e.textureHeight,this.rowCount=Math.ceil(this.stageH/this.textureHeight)+1,this.bmpArr=[];for(var i=0;i<this.rowCount;i++){var n=this.createBitmapByName("bg_png");n.width=this.stage.width,n.y=this.textureHeight*i-(this.textureHeight*this.rowCount-this.stageH),this.bmpArr.push(n),this.addChild(n)}},e.prototype.start=function(){this.removeEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this),this.addEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this)},e.prototype.enterFrameHandler=function(t){for(var e=0;e<this.rowCount;e++){var i=this.bmpArr[e];i.y+=this.speed,i.y>this.stageH&&(i.y=this.bmpArr[0].y-this.textureHeight,this.bmpArr.pop(),this.bmpArr.unshift(i))}},e.prototype.pause=function(){this.removeEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,console.log(e),e},e}(egret.DisplayObjectContainer);__reflect(BgMap.prototype,"BgMap");var Lg=function(){function t(){}return t.createBitmapByName=function(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,e},t}();__reflect(Lg.prototype,"Lg");var Const=function(){function t(){}return t.SCENT_WIDTH=0,t.SCENT_HEIGHT=0,t.GamePoxY=0,t.setSwfArr=["s","t","a","t","i","c",".","e","g","r","e","t","-","l","a","b","s",".","o","r","g"],t}();__reflect(Const.prototype,"Const");var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center",this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var ObjPool=function(){function t(){this.m_pool=new Array}return t.prototype.hasObjcet=function(){return null!=this.m_pool&&this.m_pool.length>0?!0:!1},t.prototype.AllcoObj=function(t){if(null==this.m_pool||0==this.m_pool.length){var e=new t;return e}return this.m_pool.shift()},t.prototype.Free=function(t){this.m_pool.push(t)},t.prototype.Clear=function(){this.m_pool.splice(0)},t}();__reflect(ObjPool.prototype,"ObjPool");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,i,n){function r(t){e.call(n,t)}function a(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),i.call(n))}"undefined"!=typeof generateEUI?egret.callLater(function(){e.call(n,generateEUI)},this):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),RES.getResByUrl(t,r,this,RES.ResourceItem.TYPE_TEXT))},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var EnemyBig=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,e.initView,e),e}return __extends(e,t),e.prototype.initView=function(){var t=Lg.createBitmapByName("big_1_png");this.HP=20,t.scaleX=1.7,t.scaleY=1.7,this.addChild(t)},e.prototype.initView2=function(){var t=Lg.createBitmapByName("big_2_png");t.scaleX=1.7,t.scaleY=1.7,this.addChild(t)},e.prototype.initMoviceClip=function(t,e,i){var n=this,r=RES.getRes("big_json"),a=RES.getRes("big_png"),s=new egret.MovieClipDataFactory(r,a),o=new egret.MovieClip(s.generateMovieClipData("big"));this.addChild(o),o.scaleX=1.7,o.scaleY=1.7,o.gotoAndPlay("big",1),o.addEventListener(egret.Event.COMPLETE,function(i){null!=t.parent&&(e.bigList.splice(e.bigList.indexOf(t),1),n.removeChildren,e.removeChild(t))},this)},e}(BaseObjcet);__reflect(EnemyBig.prototype,"EnemyBig");var AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,i){function n(n){e.call(i,n,t)}if(RES.hasRes(t)){var r=RES.getRes(t);r?n(r):RES.getResAsync(t,n,this)}else RES.getResByUrl(t,n,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var EnemyPlane=function(t){function e(){var e=t.call(this)||this;return e.speed=3,e.flyLeft=!0,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.initView,e),e}return __extends(e,t),e.prototype.initView=function(){this.myEnemy=Lg.createBitmapByName("small_enemy_png"),this.HP=2,this.myEnemy.scaleX=1.7,this.myEnemy.scaleY=1.7,this.addChild(this.myEnemy)},e.prototype.init=function(t){this.HP=1,this.y=0,this.x=Math.ceil(Math.random()*t.stageWidth),Math.random()>.5?this.flyLeft=!0:this.flyLeft=!1},e.prototype.EnemyExplosion=function(t,e,i){this.removeChildren();var n=RES.getRes("small_json"),r=RES.getRes("small_png"),a=new egret.MovieClipDataFactory(n,r),s=new egret.MovieClip(a.generateMovieClipData("small"));this.addChild(s),s.scaleX=1.7,s.scaleY=1.7,s.gotoAndPlay("baoza",0),s.addEventListener(egret.Event.COMPLETE,function(i){null!=t.parent&&(e.objEnemy.Free(t),e.EnemyList.splice(e.EnemyList.indexOf(t),1),e.removeChild(t))},this)},e}(BaseObjcet);__reflect(EnemyPlane.prototype,"EnemyPlane");var Main=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return[4,this.loadResource()];case 1:return i.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=i.sent(),this.startAnimation(t),[4,platform.login()];case 3:return i.sent(),[4,platform.getUserInfo()];case 4:return e=i.sent(),console.log(e),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,this.loadTheme()];case 2:return i.sent(),[4,RES.loadGroup("preload",0,t)];case 3:return i.sent(),this.stage.removeChild(t),[3,5];case 4:return e=i.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,i){var n=new eui.Theme("resource/default.thm.json",t.stage);n.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){var t=new startView(this);t.width=this.stage.stageWidth,t.height=this.stage.stageHeight,this.addChild(t),this.onGet()},e.prototype.onGet=function(){var t=new egret.HttpRequest;t.responseType=egret.HttpResponseType.TEXT,t.open("http://192.168.0.103:8080/game/10/search",egret.HttpMethod.GET),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t.send(),t.addEventListener(egret.Event.COMPLETE,this.onGetComplete,this),t.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onGetIOError,this),t.addEventListener(egret.ProgressEvent.PROGRESS,this.onGetProgress,this)},e.prototype.onGetComplete=function(t){var e=t.currentTarget;console.log("get data : ",e.response);var i=JSON.parse(e.response);this.requestRoomId=i.data.roomId,this.requestUserId=i.data.userId;var n=new egret.TextField;n.size=18,this.addChild(n),n.x=50,n.y=70,this.onWebSocket()},e.prototype.onGetIOError=function(t){console.log("get error : "+t)},e.prototype.onGetProgress=function(t){console.log("get progress : "+Math.floor(100*t.bytesLoaded/t.bytesTotal)+"%")},e.prototype.onWebSocket=function(){this.sock=new egret.WebSocket,this.sock.addEventListener(egret.ProgressEvent.SOCKET_DATA,this.onReceiveMessage,this),this.sock.addEventListener(egret.Event.CONNECT,this.onSocketOpen,this),this.sock.connect("192.168.0.103/SinglePKRoom/"+this.requestRoomId+"/"+this.requestUserId,8080)},e.prototype.onReceiveMessage=function(){var t=this.sock.readUTF();console.log("收到数据："+t)},e.prototype.onSocketOpen=function(){},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,e},e.prototype.startAnimation=function(t){var e=this,i=new egret.HtmlTextParser,n=t.map(function(t){return i.parse(t)}),r=this.textfield,a=-1,s=function(){a++,a>=n.length&&(a=0);var t=n[a];r.textFlow=t;var i=egret.Tween.get(r);i.to({alpha:1},200),i.wait(2e3),i.to({alpha:0},200),i.call(s,e)};s()},e.prototype.initView=function(){var t=this.createBitmapByName("bg_jpg");this.addChild(t);var e=this.stage.stageWidth,i=this.stage.stageHeight;t.width=e,t.height=i;var n=new egret.Shape;n.graphics.beginFill(0,.5),n.graphics.drawRect(0,0,e,172),n.graphics.endFill(),n.y=33,this.addChild(n);var r=this.createBitmapByName("egret_icon_png");this.addChild(r),r.x=26,r.y=33;var a=new egret.Shape;a.graphics.lineStyle(2,16777215),a.graphics.moveTo(0,0),a.graphics.lineTo(0,117),a.graphics.endFill(),a.x=172,a.y=61,this.addChild(a);var s=new egret.TextField;s.textColor=16777215,s.width=e-172,s.textAlign="center",s.text="Hello Egret",s.size=24,s.x=172,s.y=80,this.addChild(s);var o=new egret.TextField;this.addChild(o),o.alpha=0,o.width=e-172,o.textAlign=egret.HorizontalAlign.CENTER,o.size=24,o.textColor=16777215,o.x=172,o.y=135,this.textfield=o;var l=new eui.Button;l.label="Click!",l.horizontalCenter=0,l.verticalCenter=0,this.addChild(l),l.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClick,this)},e.prototype.onButtonClick=function(t){var e=new eui.Panel;e.title="Title",e.horizontalCenter=0,e.verticalCenter=0,this.addChild(e)},e}(eui.UILayer);__reflect(Main.prototype,"Main");var Model=function(){function t(){}return t}();__reflect(Model.prototype,"Model");var DataModel=function(){function t(){}return t}();__reflect(DataModel.prototype,"DataModel");var MyPlane=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,e.initView,e),e}return __extends(e,t),e.prototype.initView=function(){this.type=1,this.myPlaneBitmap=Lg.createBitmapByName("blue_plane_png"),this.myPlaneBitmap.scaleX=1.7,this.myPlaneBitmap.scaleY=1.7,this.x=this.stage.stageWidth/2-this.myPlaneBitmap.width/2,this.y=this.stage.height/3,this.addChild(this.myPlaneBitmap)},e.prototype.initImage=function(){this.myPlaneBitmap=Lg.createBitmapByName("red_plane_png"),this.myPlaneBitmap.scaleX=1.7,this.myPlaneBitmap.scaleY=1.7,this.addChild(this.myPlaneBitmap)},e.prototype.PlaneExplosion=function(){var t=RES.getRes("myplaneexplosion_json"),e=RES.getRes("myplaneexplosion_png"),i=new egret.MovieClipDataFactory(t,e),n=new egret.MovieClip(i.generateMovieClipData("explosion"));this.addChild(n),n.scaleX=1.7,n.scaleY=1.7,n.gotoAndPlay("exp",1)},e}(BaseObjcet);__reflect(MyPlane.prototype,"MyPlane");var PlaneBullet=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,e.initFil,e),e}return __extends(e,t),e.prototype.initView=function(t){switch(t){case 1:var e=Lg.createBitmapByName("blue_bullet_png");e.scaleX=1.3,e.scaleY=1.3,this.addChild(e);break;case 2:this.myBUllet=Lg.createBitmapByName("my_bullet_purple_png"),this.myBUllet.scaleX=1.5,this.myBUllet.scaleY=1.5,this.addChild(this.myBUllet)}},e.prototype.initFil=function(){this.type=6},e}(BaseObjcet);__reflect(PlaneBullet.prototype,"PlaneBullet");var AudioManager=function(){function t(){}return t.getInstance=function(){return null==this.instance&&(this.instance=new t),this.instance},t.prototype.playFightAudio=function(){this.sound=RES.getRes("game_mp3"),this.sound.play()},t.prototype.playStop=function(){this.sound.close()},t}();__reflect(AudioManager.prototype,"AudioManager");var MainView=function(t){function e(e){var i=t.call(this)||this;return i.totalIntegral=0,i.BulletList=[],i.EnemyList=[],i.EnemyNum=6,i.bigList=[],i.bigNum=1,i.bigBulletLits=[],i.flyLeft=!0,i.bulletGoList=[],i.main=e,i.objcBullet=new ObjPool,i.objEnemy=new ObjPool,i.objcBig=new ObjPool,i.objcBigBullet=new ObjPool,i.addEventListener(egret.Event.ADDED_TO_STAGE,i.myPlaneView,i),i.addEventListener(egret.Event.ENTER_FRAME,i.onEnterFrame,i),i}return __extends(e,t),e.prototype.myPlaneView=function(){this.initBG(),this.MyPlane(),this.enemyPlaneImage(),this.totalIntegralText=new egret.TextField,this.totalIntegralText.text="积分:"+this.totalIntegral,this.totalIntegralText.x=10,this.totalIntegralText.y=10,this.addChild(this.totalIntegralText)},e.prototype.initBG=function(){var t=new BgMap;this.addChildAt(t,0),t.start()},e.prototype.MyPlane=function(){this.myPlane=new MyPlane,this.addChild(this.myPlane),this.myPlane.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.planeMobile,this),this.myPlane.touchEnabled=!0,this.timer=new egret.Timer(200,0),this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerInitPlaneBullet,this),this.timer.start(),this.timer1=new egret.Timer(200,0),this.timer1.addEventListener(egret.TimerEvent.TIMER,this.timerInitPlaneBullet1,this),this.big=new egret.Timer(1e3,0),this.big.addEventListener(egret.TimerEvent.TIMER,this.timerInitBig,this),this.big.start(),this.wupin=new egret.Timer(8e3,0),this.wupin.addEventListener(egret.TimerEvent.TIMER,this.timerInitwuping,this),this.wupin.start()},e.prototype.planeMobile=function(t){this.myPlane.x=t.stageX-this.myPlane.width/2,this.myPlane.y=t.stageY-this.myPlane.height/2},e.prototype.enemyPlaneImage=function(){this.timerEnemy=new egret.Timer(1e3,0),this.timerEnemy.addEventListener(egret.TimerEvent.TIMER,this.timerInitEnemy,this),this.timerEnemy.start()},e.prototype.timerInitEnemy=function(){if(this.EnemyList.length<this.EnemyNum){var t=new EnemyPlane;t.x=Math.ceil(Math.random()*this.stage.stageWidth),t.init(this.stage),this.addChild(t),this.EnemyList.push(t)}},e.prototype.onEnterFrame=function(){var t=this;null!=t&&(t.EnemyList.forEach(function(e){e.y+=e.speed,Math.random()>.99&&(e.flyLeft=!e.flyLeft),e.x<=0&&(e.flyLeft=!1),e.x>=t.stage.stageWidth-e.width&&(e.flyLeft=!0),e.flyLeft?e.x-=Math.ceil(3*Math.random()):e.x+=Math.ceil(3*Math.random()),e.y>t.stage.stageHeight&&null!=e.parent&&(t.objEnemy.Free(e),t.EnemyList.splice(t.EnemyList.indexOf(e),1),t.removeChild(e))}),t.bulletGoList.forEach(function(e){e.y+=1,e.x<=0&&(e.flyLeft=!1),e.x>=t.stage.stageWidth-e.width&&(e.flyLeft=!0),1==e.flyLeft?e.x-=3:e.x+=3,t.myPlane.hitTestPoint(e.x,e.y)&&null!=e.parent&&(t.removeChild(e),t.pemgzhuang())}),t.BulletList.forEach(function(t){1==t.timerOne&&(t.y-=20),0==t.timerOne&&1==t.isAlive&&(t.y-=16,t.x+=6*Math.sin(t.y/100)),0==t.timerOne&&0==t.isAlive&&(t.y-=16,t.x-=6*Math.sin(t.y/100))}),t.bigList.forEach(function(e){e.y+=.2,e.x<=0&&(e.flyLeft=!1),e.x>=t.stage.stageWidth-e.width&&(e.flyLeft=!0),e.flyLeft?e.x-=Math.ceil(3*Math.random()):e.x+=Math.ceil(3*Math.random())}),t.bigBulletLits.forEach(function(e){e.move(),null!=t&&null!=t.stage&&(e.y>=t.stage.stageHeight&&null!=e.parent&&t.removeChild(e),t.myPlanebaoza(e.x,e.y))}),t.gameHitTest())},e.prototype.gameHitTest=function(){var t=this;null!=t.totalIntegralText&&(t.EnemyList.forEach(function(e){t.BulletList.forEach(function(i){if(0!=e.HP&&1==e.hitTestPoint(i.x,i.y)&&(null!=i.parent&&(e.HP--,t.removeChild(i)),0==e.HP)){var n=RES.getRes("explosion_mp3");n.play(0,1),e.EnemyExplosion(e,t,i),t.totalIntegral+=100}t.bigList.forEach(function(e){if(0!=e.HP&&1==e.hitTestPoint(i.x,i.y)&&(null!=i.parent&&(e.HP--,t.removeChild(i)),0==e.HP)){var n=RES.getRes("bigexplosion_wav");n.play(0,1),e.initMoviceClip(e,t,i)}})})}),t.totalIntegralText.text="积分:"+t.totalIntegral)},e.prototype.timerInitPlaneBullet=function(){var t=this.objcBullet.hasObjcet(),e=this.objcBullet.AllcoObj(PlaneBullet);e.initView(1),e.timerOne=!0,e.x=this.myPlane.x+this.myPlane.width/2-10,e.y=this.myPlane.y-65,0==t&&(this.addChild(e),this.BulletList.push(e));var i=RES.getRes("shoot_mp3");i.play(0,1)},e.prototype.timerInitwuping=function(){this.bulletGoList.length<=1&&(this.bulletGo1=new egret.Bitmap,this.bulletGo1=Lg.createBitmapByName("bullet_goods1_png"),this.bulletGo1.x=Math.random()*this.stage.stageWidth,this.bulletGo1.y=0,this.addChild(this.bulletGo1),this.bulletGoList.push(this.bulletGo1),Math.random()>.5?this.flyLeft=!0:this.flyLeft=!1)},e.prototype.timerInitPlaneBullet1=function(){var t=this.objcBullet.hasObjcet(),e=this.objcBullet.AllcoObj(PlaneBullet);e.x=this.myPlane.x+this.myPlane.width/2-10+100,e.y=this.myPlane.y-65,e.isAlive=!0,e.timerOne=!1,e.initView(2),0==t&&(this.addChild(e),this.BulletList.push(e));var i=this.objcBullet.hasObjcet(),n=this.objcBullet.AllcoObj(PlaneBullet);n.x=this.myPlane.x+this.myPlane.width/2-10-100,n.y=this.myPlane.y-65,n.isAlive=!1,n.initView(2),n.timerOne=!1,0==i&&(this.addChild(n),this.BulletList.push(n))},e.prototype.timerInitBig=function(){if(this.bigList.length<this.bigNum){var t=(this.objcBig.hasObjcet(),this.objcBig.AllcoObj(EnemyBig));this.addChildAt(t,1),t.x=Math.random()*(this.stage.stageWidth-100),t.y=0,this.bigList.push(t)}this.initbigBullet()},e.prototype.initbigBullet=function(){var t=this;this.bigList.forEach(function(e){var i=(t.objcBigBullet.hasObjcet(),t.objcBigBullet.AllcoObj(EnemyBullet));i.x=e.x+84,i.y=e.y+84,t.addChild(i),t.bigBulletLits.push(i)})},e.prototype.myPlanebaoza=function(t,e){if(1==this.myPlane.hitTestPoint(t,e)){this.timer.stop(),this.timer1.stop(),this.big.stop(),this.timerEnemy.stop(),this.wupin.stop(),this.removeChildren(),this.myPlane.touchEnabled=!1,this.removeEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);var i=new StopView(this.main);this.main.addChild(i),this.main.removeChild(this)}},e.prototype.pemgzhuang=function(){this.timer.stop(),this.timer1.start(),this.myPlane.initImage()},e}(egret.DisplayObjectContainer);__reflect(MainView.prototype,"MainView");var startView=function(t){function e(e){var i=t.call(this)||this;return i.main=e,i.addEventListener(egret.Event.ADDED_TO_STAGE,i.initStartView,i),i}return __extends(e,t),e.prototype.initStartView=function(){var t=Lg.createBitmapByName("mainbg_jpg");this.addChildAt(t,0);var e=this.stage.stageWidth,i=this.stage.stageHeight;t.width=e,t.height=i;var n=new eui.Button;n.skinName="startButtonSkin",n.x=this.stage.stageWidth/2-n.width/2,n.y=this.stage.stageHeight/3,this.addChild(n),n.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClick,this);var r=RES.getRes("fly_json"),a=RES.getRes("fly_png"),s=new egret.MovieClipDataFactory(r,a),o=new egret.MovieClip(s.generateMovieClipData("fly"));this.addChild(o),o.x=this.stage.stageWidth/2-n.width/2,o.y=this.stage.stageHeight/3.5,o.scaleX=1.5,o.scaleY=1.5,o.gotoAndPlay("start",-1)},e.prototype.onButtonClick=function(t){var e=new MainView(this.main);this.main.addChild(e),this.main.removeChild(this);var i=RES.getRes("get_goods_wav");i.play(0,1),AudioManager.getInstance().playFightAudio()},e}(egret.Sprite);__reflect(startView.prototype,"startView");var StopView=function(t){function e(e){var i=t.call(this)||this;return i.main=e,i.addEventListener(egret.Event.ADDED_TO_STAGE,i.initStartView,i),i}return __extends(e,t),e.prototype.initStartView=function(){var t=Lg.createBitmapByName("mainbg_jpg");this.addChildAt(t,0);var e=this.stage.stageWidth,i=this.stage.stageHeight;t.width=e,t.height=i;var n=new eui.Button;n.skinName="btnzailaiyici",n.x=this.stage.stageWidth/2-n.width/2,n.y=this.stage.stageHeight/3,this.addChild(n),n.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClick,this)},e.prototype.onButtonClick=function(t){var e=new MainView(this.main);this.main.addChild(e),this.main.removeChild(this);var i=RES.getRes("get_goods_wav");i.play(0,1)},e}(egret.Sprite);__reflect(StopView.prototype,"StopView");