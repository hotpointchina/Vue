import {Application, Graphics } from 'pixi.js';
// import {onMounted, onUnmounted, ref} from 'vue';

const game = new Application({
    width:567,
    height:566
});
document.body.append(game.view);


function openBall(){
    // word
    // const text = new Text('rrrrrrrrr');
    // text.style = new TextStyle({fill:'red'});
    // game.stage.addChild(text);

    const circle = new Graphics();
    circle.beginFill(0xffa31a);
    circle.drawCircle(50, 50, 50);
    circle.endFill();
    circle.x = 100;
    game.stage.addChild(circle);
}
openBall();


// onMounted(()=>{
//     game.ticker.add(ballMove);
// });


// function ballMove(){

// }