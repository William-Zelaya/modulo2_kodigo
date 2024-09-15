export const enum Alineacion {
    Izquierda = "izquierda",
    Centro = "centro",
    Derecha = "derecha",
  }
  
  class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: Alineacion;
  
    constructor(titulo: string, color: string, fuente: string) {
      this.titulo = titulo;
      this.color = color;
      this.fuente = fuente;
      this.alineacion = Alineacion.Izquierda;
    }
  
    public obtenerPropiedades(): {
      titulo: string;
      color: string;
      fuente: string;
    } {
      return {
        titulo: this.titulo,
        color: this.color,
        fuente: this.fuente,
      };
    }
  
    public establecerAlineacion(alineacion: Alineacion): void {
      this.alineacion = alineacion;
    }
  
    public imprimirPropiedades(): void {
      console.log(`Título: ${this.titulo}`);
      console.log(`Color: ${this.color}`);
      console.log(`Fuente: ${this.fuente}`);
      console.log(`Alineación: ${this.alineacion}`);
    }
  }
  
  export default CabeceraPagina;
  