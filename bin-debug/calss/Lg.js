var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Lg = (function () {
    function Lg() {
    }
    /**
    * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
    */
    Lg.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Lg;
}());
__reflect(Lg.prototype, "Lg");
var Const = (function () {
    function Const() {
    }
    Const.SCENT_WIDTH = 0;
    Const.SCENT_HEIGHT = 0;
    Const.GamePoxY = 0;
    Const.setSwfArr = ["s", "t", "a", "t", "i", "c", ".", "e", "g", "r", "e", "t", "-", "l", "a", "b", "s", ".", "o", "r", "g"];
    return Const;
}());
__reflect(Const.prototype, "Const");
