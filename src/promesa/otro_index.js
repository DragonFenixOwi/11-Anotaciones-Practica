

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