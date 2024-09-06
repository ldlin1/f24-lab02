export class Renderer {
    private shape: Shape;

    constructor(shape: Shape) {
        this.shape = shape;
    }

    draw() : void {
        const area = this.shape.getArea();
        console.log("Shape drawn\n" + "Its area is " + area + "\n")
    }
}