public class Calculator {
    public static Decimal add(Decimal num1, Decimal num2) {
        return num1 + num2;
    }

    public static Decimal subtract(Decimal num1, Decimal num2) {
        return num1 - num2;
    }

    public static Decimal multiply(Decimal num1, Decimal num2) {
        return num1 * num2;
    }

    public static Decimal divide(Decimal num1, Decimal num2) {
        if (num2 == 0) {
            throw new MathException('Cannot divide by zero');
        }
        return num1 / num2;
    }

    public class MathException extends Exception {}
}