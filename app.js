// SA-LPD2 - PRÁCTICA DE CONVERSIONES DE TEMPERATURAS
// Crear un programa en Javascript que realice lo siguiente:
// Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
// Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
// Debe imprimir ambos resultados por consola o por el DOM.
// Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
// Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
// Entrada: 
// 45.
// Salida
// Grados Kelvin: 318.15
// Grados Fahrenheit: 113. 
// Entrada:
//  14.
// Salida
// Grados Kelvin: 287.15
// Grados Fahrenheit: 57.2. 


// let gradosCelsius;
// gradosCelsius = parseFloat(prompt("Ingrese los grados que quiere convertir"));

// while (!isFinite(gradosCelsius)){
//   gradosCelsius = Number(prompt("Ingrese un dato válido de los grados que quiere convertir"));
// }

if( typeof(gradosCelsius) == 'number' && isFinite(gradosCelsius) ){
  convertFahrenheit = (gradosCelsius) => {
    return (gradosCelsius * 9/5) + 32;
  }
  convertKelvin = (gradosCelsius) => {
    return gradosCelsius + 273.15;
  }
}

console.log(convertFahrenheit(gradosCelsius));
console.log(convertKelvin(gradosCelsius));

console.log(typeof(gradosCelsius));


