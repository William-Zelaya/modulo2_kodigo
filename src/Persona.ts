abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;
  
    constructor(
      nombre: string,
      apellido: string,
      direccion: string,
      telefono: string,
      edad: number
    ) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.direccion = direccion;
      this.telefono = telefono;
      this.edad = edad;
    }
  
    public esMayorDeEdad(): void {
      if (this.edad >= 18) {
        console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
      } else {
        console.log(`${this.nombre} ${this.apellido} no es mayor de edad.`);
      }
    }
  
    public abstract mostrarDatos(): void;
  }
  
  export default Persona;
  