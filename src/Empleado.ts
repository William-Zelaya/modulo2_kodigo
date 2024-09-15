import Persona from "./Persona.ts";

class Empleado extends Persona {
  private sueldo: number;

  constructor(
    nombre: string,
    apellido: string,
    direccion: string,
    telefono: string,
    edad: number,
    sueldo: number
  ) {
    super(nombre, apellido, direccion, telefono, edad);
    this.sueldo = sueldo;
  }

  public cargarSueldo(sueldo: number): void {
    this.sueldo = sueldo;
  }

  public imprimirSueldo(): void {
    console.log(
      `El sueldo de ${this.nombre} ${this.apellido} es: $${this.sueldo}`
    );
  }

  public mostrarDatos(): void {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellido: ${this.apellido}`);
    console.log(`Dirección: ${this.direccion}`);
    console.log(`Teléfono: ${this.telefono}`);
    console.log(`Edad: ${this.edad}`);
    this.esMayorDeEdad();
  }
}

export default Empleado;
