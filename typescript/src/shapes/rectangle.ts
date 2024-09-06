export class Rectangle implements Shape {
    private height: number;
    private width: number;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    getArea(): number {
        return this.height * this.width;
    }
}