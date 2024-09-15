class Cuenta {
    private cantidad: number;
    public nombre: string;
    public tipoCuenta: string;
    public numeroCuenta: string;
  
    constructor(
      nombre: string,
      cantidad: number,
      tipoCuenta: string,
      numeroCuenta: string
    ) {
      this.nombre = nombre;
      this.cantidad = cantidad;
      this.tipoCuenta = tipoCuenta;
      this.numeroCuenta = numeroCuenta;
    }
  
    public depositar(cantidad: number): void {
      if (cantidad < 5) {
        console.error("El valor a depositar debe ser mayor a $10.00");
      } else {
        this.cantidad += cantidad;
        console.log(
          `Depósito exitoso: $${cantidad}. Nuevo saldo: $${this.cantidad}`
        );
      }
    }
  
    public retirar(valor: number): void {
      if (valor < 5) {
        console.error("El valor a retirar debe ser mayor a $5.00");
      } else if (this.cantidad < valor) {
        console.error(
          "No hay suficiente dinero en la cuenta."
        );
      } else {
        this.cantidad -= valor;
        console.log(
          `Retiro exitoso: $${valor}. Saldo restante: $${this.cantidad}`
        );
      }
    }
  
    public mostrarDatos(): void {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Tipo de Cuenta: ${this.tipoCuenta}`);
      console.log(`Número de Cuenta: ${this.numeroCuenta}`);
    }
  }
  
  export default Cuenta;
  