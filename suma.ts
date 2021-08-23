class Suma {
    private num1: number;
    private num2: number;
    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }
    operacion = (): number => this.num1 + this.num2;
}
export default Suma