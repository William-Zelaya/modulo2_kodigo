import CabeceraPagina, { Alineacion } from "./CabeceraPagina";
import Calculadora from "./Calculadora";
import Cancion from "./Cancion";
import Cuenta from "./Cuenta";
import Empleado from "./Empleado";

import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>TypeScript POO Exercises</h1>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

// --------------------Ejercicio #1 - Cabecera Pagina --------------------------

console.warn("Ejercicio #1 - Cabecera Pagina");

const cabecera = new CabeceraPagina("Mi Página", "#000", "Arial");

// Obtener las propiedades
console.log(cabecera.obtenerPropiedades());

// Establecer la alineación
cabecera.establecerAlineacion(Alineacion.Centro);

// Imprimir todas las propiedades
cabecera.imprimirPropiedades();

// --------------------Ejercicio #2 - Calculadora --------------------------

console.warn("Ejercicio #2 - Calculadora");

console.log("5 + 10 = ", Calculadora.sumar(5, 10)); // 10
console.log("10 - 3 = ", Calculadora.restar(10, 3)); // 7
console.log("10 * 3 = ", Calculadora.multiplicar(10, 3)); // 30
console.log("10 / 2 = ", Calculadora.dividir(10, 2)); // 5
console.log("2 ** 3 = ", Calculadora.potencia(2, 3)); // 8
console.log("5! = ", Calculadora.factorial(5)); // 120

// --------------------Ejercicio #3 - Cancion --------------------------

console.warn("Ejercicio #3 - Cancion");

const cancion = new Cancion("Lose Yourself", "RAP");
cancion.setAutor("Eminem");
cancion.mostrarDatos();

// --------------------Ejercicio #4 - Cuenta --------------------------

console.warn("Ejercicio #4 - Cuenta");

const miCuenta = new Cuenta("William Henrriquez",200, "Ahorros", "1234567890");

miCuenta.mostrarDatos();
miCuenta.depositar(4);
miCuenta.depositar(10);
miCuenta.retirar(3);
miCuenta.retirar(15);
miCuenta.retirar(1000);

// --------------------Ejercicio #5 - Persona y Empleado --------------------------

console.warn("Ejercicio #5 - Persona y Empleado");

const empleado = new Empleado(
  "Willliam",
  "Henrriquez",
  "Santa Ana, El Salvador",
  "2430-1594",
  30,
  1100
);

empleado.mostrarDatos();
empleado.imprimirSueldo();
