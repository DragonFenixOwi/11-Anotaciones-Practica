//https://rickandmortyapi.com/


/*
    POSTMAN
        - se suele emplear una aplicacion llamada Postman 
        - sirve tambien para hacer API directamnete
        - para que te traiga resultados de las API's
        - 

    JQuery no era necesario
        - Podemos hacer lo mismo con una llamada y un 


*/



/*
    -llamar/instanciar la dependencia a traves de "require"
    - dentro de la dependencia suelen haber diferentes modulos

    - ¿seria lo mismo que un import?
        - si pero en javascript esta seria la manera mas correcta de hacer

    - ".XMLHttpRequest" es lo que busco
    - JQuery solo sirve en javascript
*/


let XMLHttppRequest = require('xmlhttprequest').XMLHttpRequest

const API = "https://rickandmortyapi.com/character/";




//conexion + validacion 
function traerDatos(url_api, callback)
    {
        //lo primero es instanciar
        // instanciar de XMLHttpRequest
        let xhttp = new XMLHttpRequest();


        /*
            - el metodo "GET" es la visualizacion del url que ves en "const API"
            - 
            */
        xhttp.open('GET',url_api,true);


        /*
            - Manera de escuchar eventos. Es decir, nos preparamos para un cambio
        */
        xhttp.onreadystatechange = function(event)
                    {
                        // aqui creamos una validacion para ver si ejecutamos nuestro callback o no
                        //Hay diferentes estados. El estado 4 es que ha sido completado el request

                        // manera de verficar si es el estado 4
                        if(xhttp.readyState ===4)
                            {
                                //validamos si es correcta la peticion del servidor
                                if(xhttp.status===20)
                                    {
                                        /*
                                        ahora si esta todo bien. Parsear un JSON y lo mandamos a traves del callback
                                        */

                                        callback(null, JSON.parse(xttp.responseText))

                                    }
                                else  
                                    {
                                        // si algo sale mal, mandamos un error con nuestro callback
                                        // esto es para hacer un debbuger con mas sentido. Para saber que exactamente es el error
                                        let error = new Error('Error' + url_api);
                                        return callback(error,null);
                    
                                    }
                            }
                        // 
                    }
        // utilizar el metodo send
        xhttp.send();
    }


/*

    ENVIO DE DATOS 
    RECUPERACION DE DATOS 
    "siempre se hace con validacion de datos"
*/




/*
    - ¿como llamamos a la API de arriba atraves de un CALLBACK?
    - el callback sigue siendo una funcion como argumento de otra funcion
    -Callback HELL
    
    -El codigo de abajo es lo que hacia peor JQuery pero pero   
        -peor porque no es tu coigo
        - era muy pesado
*/

//llamamos a la unica function



//traer datods a la consola despues de manejo de errores
traerDatos(API,function(error1,data1)
    {
        
        if(error1) return console.error(error1);

        //otro callbak
        traerDatos(API + data1.result[0].id, function(error2,data2)
            {
                if (error2) return console.error(error2);

                traerDatos(data2.origin.url, function(error3,data3)
                    {
                        if (error3) return console.error(error3);

                        // aqui hacemos las tres peticiones a la API. Porque la API no me deja hacer todo de una vez.
                        //asi como vimos en otros ejemplos podemos encadenar los callback para hacer solo 3 petiiciones a la api
                        // tres peticiones estaria "ok", pero no llegar a muchas mas sino entrariamos en el callBackNELL
                    
                    
                    console.log(data1.info.count);
                    console.log(data2.name);
                    console.log(data1.dimension);
                    
                    })
            })
    })

