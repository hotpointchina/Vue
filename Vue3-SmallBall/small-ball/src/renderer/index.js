import { Graphics, Container } from 'pixi.js';
import {createRenderer} from 'vue';


export const ballInfo = {
    color:0xffa31a,
    r:50,
    x:50,
    y:90
};

/*
    createRenderer --> 创建渲染器
    - 接收一个配置，配置里需要传递一个 createComment 创建元素的接口
*/ 
const renderer = createRenderer({
    // 渲染接口
    /*
        createElement 接收的第一次参数 type 会将
        用户在 template 中创建的标签的【标签名】传入
            - 接收的是用户写入的【虚拟节点】的标签名
    */ 
    createElement(type){
        console.log('renderer-->', type);
        function getcircle(){
            /*
                Graphics : 图形
                    - pixi.js 提供的绘制图形的方法
            */ 
            let circle = new Graphics();
            circle.beginFill(ballInfo.color, 1);
            circle.drawCircle(ballInfo.x, ballInfo.y, ballInfo.r);
            circle.endFill();
            element = circle;
        }


        let element;
        switch (type) {
        case "container":
            element = new Container();
            break;
        case "circle":
            getcircle();
            break;
        default:
            break;
        }
        return element;
    },
        

    // parent 就是根节点
    insert(el,parent){
        // console.log('el-->',el);
        // console.log('parent-->',parent);
        if (parent) {
            parent.addChild(el);
        }
    },
    patchProp(el,key,prevValue,nextValue){
        el[key] = nextValue;
        // switch (key) {
        //     default:
                
        //         // console.log(el,key,nextValue);
        //         break;
        // }
    },

    nextSibling() {},
    parentNode(node) {
        return node.parent;
    },
    remove(el) {
        if (el.parent) {
            el.parent.removeChild(el);
        }
    },

    // canvas 内不需要
    createComment(){}
    
});

export function createApp(rootComponent){
    return renderer.createApp(rootComponent);
}