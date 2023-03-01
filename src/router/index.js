//1.导入路由插件
import VueRouter from 'vue-router'
//2.导入vue插件
import Vue from 'vue'
//3.导入路由的配置信息
import config from './config.js'
//4.使用路由插件

Vue.use(VueRouter);

const router=new VueRouter(config);

//1.获取原来的push方法
const originalPush=VueRouter.prototype.push
//2.修改push函数
VueRouter.prototype.push=function push(location){
    return originalPush.call(this,location).catch(err=>err)
}
//1.获取原来的replace方法
const originalReplace=VueRouter.prototype.replace
//2.修改replace函数
VueRouter.prototype.replace=function replace(location){
    return originalReplace.call(this,location).catch(err=>err)
}
//6.导出设置
export default router;

