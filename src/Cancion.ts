class Cancion {
    private autor: string;
    public titulo: string;
    public genero: string;
  
    constructor(titulo: string, genero: string) {
      this.titulo = titulo;
      this.genero = genero;
      this.autor = "Eminem";
    }
  
    public getAutor(): string {
      return this.autor;
    }
  
    public setAutor(autor: string): void {
      if (typeof autor === "string" && autor.trim() !== "") {
        this.autor = autor;
      } else {
        throw new Error("Autor no valido. Autor no debe estar vacio.");
      }
    }
  
    public mostrarDatos(): void {
      console.log(`Título: ${this.titulo}`);
      console.log(`Género: ${this.genero}`);
      console.log(`Autor: ${this.autor}`);
    }
  }
  
  export default Cancion;
  