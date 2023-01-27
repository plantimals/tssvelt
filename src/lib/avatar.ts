export class Avatar {

    private elements: string[] = [ "back", "nose", "face", "chin", "sideback", "side", "ear", "sclera", "pupil"];
    private colors: string[] = ["#ADA386", "#825F43", "#5F8076", "#402B1A", /*blue*/ "#3c3957", /*rust*/ "#92432b", /*olive*/ "#57633e"];
    //elCol: Map<string, string> = new Map;
    svg: HTMLElement;

    constructor(svg: HTMLElement) {
        this.svg = svg;
        this.elements.forEach((el, idx) => {
            //this.elCol.set(el, this.colors[idx%this.colors.length]);
            let element = document.getElementById(el);
            let color = this.colors[this.getRandomInt(this.colors.length)]
            element?.setAttribute("style", "fill:"+color);
        })
    }

    public getRandomInt = (max: number):number => {
        return Math.floor(Math.random() * max);
    }

    public iterate():void {
        let x = this.getRandomInt(this.colors?.length-1);
        this.elements.forEach((el, idx) => {
            let element = document.getElementById(el);
            let color = this.colors[(idx+x)%(this.colors?.length-1)]
            element?.setAttribute("style", "fill:"+color);
        });
    }
}