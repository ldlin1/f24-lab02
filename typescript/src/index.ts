import { Renderer } from "./renderer.js"
import { Rectangle } from "./shapes/rectangle.js";
import { Circle } from "./shapes/circle.js";
import { Square } from "./shapes/square.js";

const rectangle: Rectangle = new Rectangle(2, 3)
const renderer1 = new Renderer(rectangle)
renderer1.draw();

const circle: Circle = new Circle(3)
const renderer2 = new Renderer(circle)
renderer2.draw();

const square: Square = new Square(3)
const renderer3 = new Renderer(square)
renderer3.draw();
