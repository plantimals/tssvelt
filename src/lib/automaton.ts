import { BitSet } from 'bitset';
import { type Render, Canvas, Layer, t} from 'svelte-canvas';
import { type Readable } from 'stream';


export class Automaton {
    size = 256;
    bits: BitSet;
    pubkey: string;
    rule: number;
    mask: number[];

    constructor(pubkey: string) {
        this.pubkey = pubkey;
        this.size = 256;
        this.rule = 129;
        this.bits =  new BitSet("0x"+pubkey);
        this.mask = this.initMask();
    }

    initMask() {
        let msk = [];
        for (var i = 0; i < 8; i++) {
            msk.push(Math.pow(2, i));
        }
        return msk;
    }

    update() {
        this.bits = this.newRow();
    }

    newRow() {
        let row = new BitSet(256);   
        for (var i = 0; i < this.size; i++) {
            row.set(i, this.getCell(i));
        }
        return row;
    }

    getCell(i: number): number {
        let idx = 0;
        if (i==0) {
            if (this.bits.get(this.size - 1))
                idx+=1;
        } else {
            if (this.bits.get((i - 1) % this.size)) {
                idx += 1;
            }
        }
        if (this.bits.get(i % this.size)) {
            idx += 2;
        }
        if (i == (this.size - 1)) {
            if (this.bits.get(0)) {
                idx += 4;
            }
        } else {
            if (this.bits.get((i + 1) % this.size)) {
                idx += 4;
            }
        }
        return (this.rule & this.mask[idx]) ? 1 : 0;
    }

    draw(ctx: CanvasRenderingContext2D, t: any) {
        console.log("running in draw")
        this.update();
        this.bits.toArray().forEach((value, index) => {
            ctx.fillStyle = index != 0 ? 'black' : 'white';
            ctx.fillRect(value, 0, 1, this.size);
        })
    }
}