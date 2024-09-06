export class Square implements Shape {
    private sideLen: number;

    constructor(sideLen: number) {
        this.sideLen = sideLen;
    }

    getArea(): number {
        return this.sideLen * this.sideLen;
    }
}