<script lang="ts">
    import { type Render, Canvas, Layer, t } from 'svelte-canvas';
    import { Automaton } from '$lib/automaton'
	import type { Unsubscriber } from 'svelte/store';


    let init = "dd81a8bacbab0b5c3007d1672fb8301383b4e9583d431835985057223eb298a5";
    let pubkey = init;

    let a = new Automaton(pubkey);

    let render: Render;
    let hex = pubkey;
    let tval = 0;
    let x: Unsubscriber;
    let lines = 0;
    $: render = ({ context, width, height }) => {
        x = t.subscribe((value: number) =>{
            a.draw(context);
            hex = a.getHex();
            lines = a.getLines();
        });
    };

    function reset() {
        a = new Automaton(pubkey);
    }

    function pause() {
        a.pause();
    }
        
</script>

<div class="card w-2/3 p-10 content-center justify-center">
    <Canvas on:click={pause} width={512} height={512} class="self-center">
        <Layer {render} />
    </Canvas>
</div>
<div class="card w-2/3 p-10 content-center justify-center">
    <button class="btn" on:click={reset}>reset</button>
    <div >
        <label class="label cursor-pointer">
            <span class="label-text">pause</span> 
            <input type="checkbox" class="toggle" on:click={pause}/>
        </label>
    </div>
</div>

<div class="w-1/2">
    <input size="64" type="input input-bordered w-full" value={hex}/>
</div>
<input size="64" type="text" bind:value={pubkey}/>
<p>lines of variation: {lines}</p>