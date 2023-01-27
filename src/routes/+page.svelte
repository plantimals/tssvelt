<script lang="ts">
    import { type Render, Canvas, Layer, t } from 'svelte-canvas';
    import { Automaton } from '$lib/automaton'
    import { browser } from '$app/environment'

    let rule: number


    let init = "dd81a8bacbab0b5c3007d1672fb8301383b4e9583d431835985057223eb298a5";
    let pubkey = init;

    let a = new Automaton(pubkey);

    rule = a.getRule();

    let render: Render;
    let hex = pubkey;
    let lines = 0;
    $: render = ({ context }) => {
        context.fillStyle = 'white';
        context.fillRect(0,0,context.canvas.getBoundingClientRect().width, context.canvas.getBoundingClientRect().height);
        t.subscribe(() =>{
            a.draw(context);
            hex = a.getHex();
            lines = a.getLines();
        });
    };

    function reset() {
        a.reset();
    }

    function pause() {
        a.pause();
    }

    if (browser) {
        document.onkeydown = (event: KeyboardEvent) => {
            if (event.key !== 'undefined') {
                switch (event.key) {
                    case " ": {
                        a.pause();
                    }
                    case "ArrowLeft": {
                        a.setRule((a.getRule()-1)%256);
                    }
                    case "ArrowRight": {
                        a.setRule((a.getRule()+1)%256);
                    }
                }
            } 
        }
    } 
        
</script>

<div class="card w-2/3 p-10 content-center justify-center">
    <Canvas on:click={pause} width={512} height={512} class="self-center">
        <Layer {render} />
    </Canvas>
</div>
<div class="card w-2/3 p-10 content-center justify-center">
    <button class="btn" on:click={pause}>pause</button>
    <button class="btn" on:click={reset}>reset</button>
</div>

<div class="w-1/2">
    <input size="64" type="input input-bordered w-full" value={hex}/>
</div>
<input size="64" type="text" bind:value={pubkey}/>
<p>lines of variation: {lines}</p>
