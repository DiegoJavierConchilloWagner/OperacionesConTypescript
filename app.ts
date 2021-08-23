const operacion = async (num1: number, num2: number, mod: string): Promise<void> => {
    try {
        mod = "./"+mod[0].toUpperCase()+mod.slice(1)
        const { default: Mod } = await import(mod)
        const calculo: typeof Mod = new Mod(num1, num2)
        return calculo.operacion()
    }
    catch (err) {
        console.error(err);
        
    };
}
const operaciones = () => {
    operacion(4, 3, "suma")
        .then(console.log) // 7
    operacion(4, 3, "resta")
        .then(console.log) // 1
    operacion(62, 31, "suma")
        .then(console.log) // 93
    operacion(62, 31, "resta")
        .then(console.log) // 31
    operacion(42, 33, "suma")
        .then(console.log) // 75
    operacion(42, 33, "resta")
        .then(console.log) // 9
}
operaciones()