<script lang="ts">
    import { type Render, Canvas, Layer, t } from 'svelte-canvas';
    import { Automaton } from '$lib/automaton'


    let pubkey = "dd81a8bacbab0b5c3007d1672fb8301383b4e9583d431835985057223eb298a5";

    let a = new Automaton(pubkey);

    let render: Render;
    $: render = ({ context, width, height }) => {
        console.log(t);
        a.draw(context, t);
    };
</script>

<p> this is to rad</p>

<Canvas width={640} height={640}>
    <Layer {render} />
</Canvas>