import { BitSet } from 'bitset';

// Automaton is a 1-D cellular automaton
//
export class Automaton {
    size: number;
    bits: BitSet;
    pubkey: string;
    rule: number;
    mask: number[];
    paused: boolean;
    resetCanvas: boolean;
    lines: number;

    constructor(pubkey: string) {
        this.pubkey = pubkey;
        this.size = 256;
        this.rule = 129;
        this.lines = 1;
        this.bits =  new BitSet("0x"+pubkey);
        this.mask = this.initMask();
        this.paused = false;
        this.resetCanvas = true;
    }

    reset() {
        this.size = 256;
        this.rule = 129;
        this.lines = 1;
        this.bits =  new BitSet("0x"+this.pubkey);
        this.paused = true;
        this.resetCanvas = true;
    }


    initMask(): number[] {
        let msk = [];
        for (var i = 0; i < 8; i++) {
            msk.push(Math.pow(2, i));
        }
        return msk;
    }

    update(): void {
        let n = this.newRow();
        if (!this.bits.equals(n)) {
            this.lines++;
            this.bits = n;
        } else {
            this.pause();
        }
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
        if (this.resetCanvas) {
            ctx.fillStyle = 'white';
            ctx.fillRect(0,0,512,512);
            this.resetCanvas = false;
        }
        if (this.paused){
            return;
        }
        ctx.drawImage(ctx.canvas,0,2)
        ctx.fillStyle = 'white';
        ctx.fillRect(0,0,512,2);
        this.update();
        ctx.fillStyle = 'black';
        this.bits.toArray().forEach((index, value) => {
            ctx.fillRect(index * 2, 0, 2, 2);
        })
        
        //ctx.resetTransform();
    }
    getHex():string {
        return this.bits.toString(16);
    }

    getLines():number{
        return this.lines;
    }

    pause(): void {
        this.paused = !this.paused;
    }

    getRule(): number {
        return this.rule;
    }

    setRule(rule: number): void {
        if (rule >= 0 && rule < 256) {
            this.rule = rule;
        }
    }
}
