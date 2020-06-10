//PROMISE

/*
    -Las promesas
        - las promesas, te prometen que algo puede pasar o no
        - vienen de los callback, y te prometian que esto no va a pasar mientras no se ejecuten algo
    - las promesas
        - pending
        - fuldiled
        - rejected

    - 
*/


/*  SINTAXIS DE UNA PROMESA 

    new Promise (function (resolve,reject)
        {
            -podemos tenes metodos de validación 
                .then (valor=>) cuando todo funciona bien 
                .catch (err=>) cuando hay errores
        })

*/
new Promise (function (resolve,reject)
    {
        
    });


/*
    --------------------------------
        ESTRUCTURA DE UNA PROMESA
    --------------------------------
*/

//EmaScript 6


const QUE_PASARA = () => 
    {
        //resolve si se ejecutara de forma correcta
        // reject si es rechazada
        return new PROMISE((resolve, reject)=>
            {
                if (true)
                    {
                        resolve('Bien echo!!!!');
                    }
                else
                    {
                        reject("Mal hecho!!!!");
                    }
            });
    };


/*
    - EJECUTAR
        - Al ejecutar una promesa hay unos elementos encadenados que son :
            .then
            .catch
*/

QUE_PASARA()
    .then((response) => console.log(response));
    //.catch((err) => console.error(err));






/*************************************************************/

/*
    OTRO EJEMPLO DE ESTRUCTURA
*/


const QUE_PASARA_AHORA = () => 
    {
        return new Promise((resolve, reject) => 
            {
                if (true)
                    {
                        setTimeout(() => 
                            {
                                resolve("Verdadero");

                            },3000);
                    }
                else 
                {
                    const ERROR = new Error("Vamos Mal !!");
                }
            });
    };

QUE_PASARA_AHORA()
        .then((response) => console.log(response));
        //.catch((err) => console.error(err));



/*
    Aqui vamos a solucionar el RUIDO CODIGO
        - Utilizando "Promise.all"
*/

// poder ejecutar  VARIAS Promesas a la vez
// con esto avanzamos mucho en la historia
//Evolucion del CallBack
Promise.all([QUE_PASARA_AHORA(), QUE_PASARA_AHORA()])
    .then((response) => 
        {   
            console.log("Resultados", response);
        });
    // .catch(err) => 
    //     {
    //         console.error(err);
    //     };