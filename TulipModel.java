public class TulipModel {
    private String color;
    private int height;

    public TulipModel(String color, int height) {
        this.color = color;
        this.height = height;
    }

    public void describe() {
        System.out.println("Tulip Color: " + color);
        System.out.println("Height: " + height + " cm");
    }

    public static void main(String[] args) {
        TulipModel tulip = new TulipModel("Red", 40);
        tulip.describe();
    }
}
