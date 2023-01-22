import { BitSet } from 'bitset';
import { type Render, Canvas, Layer, t} from 'svelte-canvas';
import { type Readable } from 'stream';


export class Automaton {
    size: number;
    bits: BitSet;
    pubkey: string;
    rule: number;
    mask: number[];
    paused: boolean;

    constructor(pubkey: string) {
        this.pubkey = pubkey;
        this.size = 256;
        this.rule = 129;
        this.bits =  new BitSet("0x"+pubkey);
        this.mask = this.initMask();
        this.paused = false;
    }

    initMask(): number[] {
        let msk = [];
        for (var i = 0; i < 8; i++) {
            msk.push(Math.pow(2, i));
        }
        return msk;
    }

    update(): void {
        this.bits = this.newRow();
    }

    newRow(): BitSet {
        let row = new BitSet(this.size);   
        for (var i = 0; i < this.size; i++) {
            row.set(i, this.getCell(i));
        }
        return row;
    }

    getCell(i: number): number {
        let idx = 0;

        // find left neighbor
        if (i==0) {
            if (this.bits.get(this.size - 1))
                idx+=1;
        } else {
            if (this.bits.get(i - 1)) {
                idx += 1;
            }
        }

        //find self
        if (this.bits.get(i)) {
            idx += 2;
        }

        //find right neighbor
        if (i == (this.size - 1)) {
            if (this.bits.get(0)) {
                idx += 4;
            }
        } else {
            if (this.bits.get(i + 1)) {
                idx += 4;
            }
        }
        return (this.rule & this.mask[idx]) ? 1 : 0;
    }

    draw(ctx: CanvasRenderingContext2D):void {
        //ctx.drawImage(ctx.canvas,0,0,this.size,49,0,1,this.size,49);
        if (this.paused){
            return;
        }
        ctx.drawImage(ctx.canvas,0,1)
        ctx.fillStyle = 'white';
        ctx.fillRect(0,0,256,1);
        this.update();
        this.bits.toArray().forEach((value, index) => {
            ctx.fillStyle = value != 0 ? 'black' : 'white';
            ctx.fillRect(value, 0, 1, 1);
        })
        
        //ctx.resetTransform();
    }
    getHex():string {
        return this.bits.toString(16);
    }

    pause():void {
        this.paused = !this.paused;
    }
}