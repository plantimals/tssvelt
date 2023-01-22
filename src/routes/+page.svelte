<script lang="ts">
    import { type Render, Canvas, Layer, t } from 'svelte-canvas';
    import { Automaton } from '$lib/automaton'
	import type { Unsubscriber } from 'svelte/store';


    let pubkey = "dd81a8bacbab0b5c3007d1672fb8301383b4e9583d431835985057223eb298a5";
    let a = new Automaton(pubkey);

    let render: Render;
    let hex = pubkey;
    let tval = 0;
    let x: Unsubscriber;

    $: render = ({ context, width, height }) => {
        x = t.subscribe((value: number) =>{
            a.draw(context);
            hex = a.getHex();
        });
    };

    function reset() {
        a = new Automaton(pubkey);
    }

    function pause() {
        a.pause();
    }
        
</script>

<Canvas width={512} height={512}>
    <Layer {render} />
</Canvas>

<button on:click={reset}>reset</button>
<button on:click={pause}>pause</button>
<p>{hex}</p>
<p>{tval}</p>