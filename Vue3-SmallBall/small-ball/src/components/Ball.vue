<template>
    <circle :x="vw"></circle>
</template>

<script>
import {ref, onMounted, onUnmounted} from 'vue';
import {ground, stageInfo} from '../canvas';
import {ballInfo} from '../renderer';

export default {
    setup(){
        let vw = ref(0);
        let speed = 7;
        let ahead = true;
        function gab(){
            if(vw.value <= (stageInfo.width - ballInfo.r*2) && ahead){
                vw.value += speed;
                vw.value > (stageInfo.width - ballInfo.r*2) ? ahead = false : ahead = true;
            }
            if(!ahead){
                vw.value -= speed;
                vw.value < 0 ? ahead = true : ahead = false;
            }
        }

        onMounted(() => {
            ground.ticker.add(gab);
        });
        onUnmounted(() => {
            ground.ticker.remove(gab);
        });

        return {
            vw
        }
    }
}
</script>