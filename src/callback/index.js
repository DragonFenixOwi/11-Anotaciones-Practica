/*
    // Son objetos creados por JavaScript
// para pasar informacion de un lenguaje a otro 

Metodologia para poder trabajar con Node.js
para base de datos

    - JSON  Metodologia de trabajo 
        - 

    -CALLBACK  
        -Son la partes mas antiguas
        - la version mas antigua
*/




/*


*/


function sumar (numero1, numero2)
    {
        return numero1 + numero2;
    }

// la comunidad de desarrolladores de JS llama al callback siempre 
function calcular(numero1, numero2,callback)
    {
        return callback(numero1, numero2);
    }



/*
    - la unica forma de que el argumento "3" se convierta en un callback es que meta una funcion, en este caso "sumar" 
    - argumento 1 = 2
    - argumento 2 = 2
    - argumento 3 = funcion
*/
console,log(calcular(2,2,sumar));























/*
    OTRO EJEMPLO 
        -CALLBACK con tiempo
            -
    */

function fecha(callback)
    {
        //enseñar la fecha completa
        console.log(new Date());

        //esperamos 3 segundos para enseñar otra vez la fecha
        setTimeout(function()
            {
                let date = new Date();
                callback(date);

            },3000);
    }



// funcion simple que imprime
// tu seras el callback 
function imprimirFecha(dateNow)
    {
        console.log(dateNow);
    }



//llamada a la function

//insertamos dentro de la funcion fecha, un argumento que es otra funcion que espera el callback
fecha(imprimirFecha)