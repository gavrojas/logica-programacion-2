//Defino mis constantes globales
const formConvertir = document.getElementById('form');
// Capturar 'p's 
const celsiusValue = document.getElementById('text-celsius');
const fahrenheitValue = document.getElementById('text-fahrenheit');
const kelvinValue = document.getElementById('text-kelvin');
const errorMessage = document.getElementById('error-message');
let celsius, fahrenheit, kelvin;

//Escuchar evento submit form
formConvertir.addEventListener('submit', (e) => {
  //Evitar que el formulario se envíe, en este caso no es necesario. 
  e.preventDefault();

  //Capturar valor temperatura y unidad desde donde se desea convertir
  const inputTemperature = document.getElementById('temperature-value').value;
  const unitTemperature = document.getElementById('type-temperature').value;

  //Convertir input de termperatura en valor númerico.
  let gradosAConvertir = parseFloat(inputTemperature);

  // Verifico que el input de temperatura si sea un número si no, imprimo mensaje de error por temperatura inválida
  if(typeof(gradosAConvertir) == 'number' && isFinite(gradosAConvertir) ){
    errorMessage.classList.add("hide");
    errorMessage.classList.remove("show");
    switch(unitTemperature){
      case 'celsius':
        celsius = gradosAConvertir;
        fahrenheit = (gradosAConvertir * 9/5) + 32;
        kelvin = gradosAConvertir + 273.15;
        break;
      case 'fahrenheit':
        celsius = (gradosAConvertir - 32) * 5/9;
        fahrenheit = gradosAConvertir;
        kelvin = celsius + 273.15;
        break;
      case 'kelvin':
        celsius = gradosAConvertir - 273;
        fahrenheit = (gradosAConvertir - 273) * 9/5;
        kelvin = gradosAConvertir;
        break;

      //imprimo mensaje de error por unidad no escogida y me salgo de la función
      default: 
        errorMessage.innerText = `Ups 😶! \n Por favor selecciona al menos una unidad`;
        errorMessage.classList.add("show");
        errorMessage.classList.remove("hide");
        return;
    }
  } 

  //imprimo mensaje de error por temperatura errónea y me salgo de la función
  else{
    errorMessage.innerText = `Ups 😶! \n Por favor escribe nuevamente un valor válido para temperatura`;
    errorMessage.classList.add("show");
    errorMessage.classList.remove("hide");
    return
  }

  celsiusValue.innerText = celsius.toFixed(2);
  fahrenheitValue.innerText = fahrenheit.toFixed(2);
  kelvinValue.innerText = kelvin.toFixed(2);

  console.log(`Resultado en celsius: ${celsius} \nResultado en fahrenheit: ${fahrenheit} \nResultado en kelvin: ${kelvin}`);
  console.log(`Formato: ${typeof(gradosAConvertir)}`);
  console.log(`Unidad elegida: ${unitTemperature}`);
})








