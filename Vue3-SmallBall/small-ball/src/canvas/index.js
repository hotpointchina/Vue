import {Application} from 'pixi.js';

export const stageInfo = {
    width:567,
    height:234
};

export const ground = new Application(stageInfo);
document.body.append(ground.view);

export const stage = ground.stage;