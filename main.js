/* A través del siguiente taller, construir un menú en una función
alert que gestione las siguientes opciones de menú referentes al
manejo de los arrays, objetos, funciones y otras operaciones en
JavaScript entre dichos temas. */

var array = []; 

do{
    var seleccion = prompt(`       - - - - - - - - -MENU- - - - - - - - - -
    
                1. Lectura de datos
                2. Crear Objeto 
                3. Mostrar Objeto
                4. Crear Array
                5. Mostrar Array
                6. Elimine primer elemento del Array
                7. Elimine ultimo elemento del Array
                8. Eliminar cualquier elemento del array
                9. Agregar elemento al comienzo del array
                10. Agregar elemento al final del array
                11. Crear array con objetos
                12. Iterar array con objetos con FOR
                13. Iterar array con objetos con ForEach
                14. Iterar array con objetos con Map y crear copia
                15. proceso personal
                0. Salir
                
                Ingrese el la opción que desee.`);
    
    
    if (seleccion == 1){
        console.log(`alterar, no sé que se refiere con la lectura de datos`);
        
    }
    else if (seleccion == 2){
        var objeto = {}
        do{
            var clave = prompt(`Ingrese la key del objeto. (Para dejar de agregrar datos dentro del objeto digite 'n')`);
            if (clave != `n`){
                var valor = prompt(`Ingrese el valor de la key anterior.`);
                objeto[clave]=valor;
            }
        }
        while (clave != `n`);
    }
    else if (seleccion == 3){
        console.log(objeto);
    }
    else if (seleccion == 4){
        do{
            var elemento = prompt(`Ingrese el elemento que desee agregar en el array, para dejar de ingresar datos digine 'n'`);
            array.unshift(elemento);
        }while(elemento != `n`);
        array.shift();
    }
    else if (seleccion == 5){
        console.log(array);
    }
    else if (seleccion == 6){
        array.shift();
        console.log(array);
    }
    else if (seleccion == 7){
        array.pop();
        console.log(array);
    }
    else if (seleccion == 8){
        let valoreliminado = parseInt(prompt(`Que valor quieres eliminar?`));
        array.splice(valoreliminado, 1)
        console.log(array);
    }
    else if (seleccion == 9){
        let elementoAgregar = prompt(`Digita el elemento que deseas agregar: `);
        array.unshift(elementoAgregar);
        console.log(array);
    }
    else if (seleccion == 10){
        let elementoAgregarFinal = prompt(`Digita el elemento que deseas agregar: `);
        array.push(elementoAgregarFinal);
        console.log(array);
    }
    else if (seleccion == 11) {

        do{ 
            var calveObjeto = prompt(`Ingrese el nombre del objeto que desea ingresar (para dejar de ingresar objetos escriba 'n')`);
            if (calveObjeto != `n`){
                var valorObjeto = prompt(`Ingrese el valor de la key anterior.`);
                array.unshift({
                    [calveObjeto]: valorObjeto  
                  })
            };
        
        }while(calveObjeto != `n`);
    }
    else if (seleccion == 12){
        for(let i = 0; i < array.length; i++){
            console.log(array[i]);
        }
    }
    else if(seleccion == 13){
        array.forEach((item)=>{
            console.log(item);
        })
    }
    else if (seleccion == 14){
        array.map(function(item, indice){
            console.log(`el elemento ${item} está en la posicion ${indice}`);
            
        })
        var arrayCopia = array.slice()
        console.log(arrayCopia);
    }
    else if (seleccion == 15){
        let numeroRanbom = parseInt(Math.random() * (array.length));
        console.log(`Esta opción devuelve un valor aleatrorio del array :D y en este caso fue el ${array[numeroRanbom]}`);
    }
    else if (seleccion == 0){
    }
    else {
        alert(`Ingresa un valor válido`);
    }
}while(seleccion != 0)




