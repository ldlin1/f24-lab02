package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.*;

public class Main {
    public static void main(String[] args) {
        Rectangle rectangle = new Rectangle(2, 3);

        Renderer renderer = new Renderer(rectangle);

        renderer.draw();

        Circle circle = new Circle(3);

        renderer = new Renderer(circle);

        renderer.draw();

        Square square = new Square(3);

        renderer = new Renderer(square);

        renderer.draw();
    }
}
