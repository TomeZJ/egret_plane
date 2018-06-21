var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ObjPool = (function () {
    function ObjPool() {
        this.m_pool = new Array();
    }
    ObjPool.prototype.hasObjcet = function () {
        if (this.m_pool != null && this.m_pool.length > 0) {
            return true;
        }
        return false;
    };
    // 分配对象
    ObjPool.prototype.AllcoObj = function (ctor) {
        if (this.m_pool == null || this.m_pool.length == 0) {
            var obj = new ctor();
            return obj;
        }
        return this.m_pool.shift();
    };
    // 回收对象
    ObjPool.prototype.Free = function (obj) {
        this.m_pool.push(obj);
    };
    // 清空对象
    ObjPool.prototype.Clear = function () {
        this.m_pool.splice(0);
    };
    return ObjPool;
}());
__reflect(ObjPool.prototype, "ObjPool");
