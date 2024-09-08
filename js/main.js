//LA SIGUIENTE PREENTRGA ABARCA: CICLOS-CONDICIONALES-FUNCIONES-ARRAYS-MÉTODOS DE ARRAY-OBJETOS


let pokemones = [
    {
        nombre: "Charmander",
        ataque: 116,
    },
    {
        nombre: "Squirtle",
        ataque: 94,
    },
    {
        nombre: "Bulbasaur",
        ataque: 118,
    },
    {
        nombre: "Pikachu",
        ataque: 112,
    },
    {
        nombre: "Mewtwo",
        ataque: 300,
    },
    {
        nombre: "Latios",
        ataque: 268,
    },
    {
        nombre: "Mew",
        ataque: 210,
    },
    {
        nombre: "Snorlax",
        ataque: 190,
    },
    {
        nombre: "Cloyster",
        ataque: 186,
    },
    {
        nombre: "Magneton",
        ataque: 223,
    },
    {
        nombre: "Blastoise",
        ataque: 171,
    },
    {
        nombre: "Victreebel",
        ataque: 207,
    },
    {
        nombre: "Miltank",
        ataque: 157,
    },
    {
        nombre: "Mr. Mime",
        ataque: 192,
    },
    {
        nombre: "Electrode",
        ataque: 173,
    },
    {
        nombre: "Duskull",
        ataque: 70,
    }
]

function inicio () {
    
    let msjBienvenida = confirm(`
Hola!
Vamos a atrapar Pokemones para ver en tu pokedex qué tan poderosos son, y así calcular tu nivel de poder.`);
    
    return msjBienvenida;
}

let inicioJuego = inicio();



function elegirPokemon() {
    let pokemonesElegidos = [];
    let cantidad = 5;

    while (pokemonesElegidos.length < cantidad) {
        let indices = prompt(`Captura ${cantidad} Pokemones para incluir en tu Pokédex! Para eso tipea los números de índice separados por coma.
${pokemones.map((pokemon, index) => `${index+1}: ${pokemon.nombre}`).join("\n")}`);
        
        if (indices === null) {
            alert("La próxima vez será");
            break;
        }

        let indicesArray = indices.split(',').map(index => parseInt(index.trim())); //convierte los números de string en numbers y elimina espacios vacíos.

        // Verifica si todos los índices son válidos y únicos
        let validaciones = indicesArray.every(index => !isNaN(index) && index >= 0 && index < pokemones.length+1); //.every sirve para asegurarme de que todos los métodos del array creado cumplan con las condiciones que detallo en esta línea de código. SI index es un número, si es mayor o igual a 0 y si es menor a la longitud del array "pokemones".
        
        if (validaciones) {
            // Evita duplicados en la selección
            pokemonesElegidos = [...new Set(indicesArray)].map(index => pokemones[index-1]); // En esta linea se vincula el número del índice elegido por el usuario (que es un string pero lo convierto a array) con el array de objetos de pokemones.
            if (pokemonesElegidos.length === cantidad) {
                break; //Si selecciona 5 pokemones, se corta el ciclo.
            } else {
                alert(`Seleccionaste ${pokemonesElegidos.length} Pokémon. Necesitás seleccionar exactamente ${cantidad}.`);
            }
        } else {
            alert("Algunos índices no son válidos. Intentá de nuevo.");
        }
    }
    return pokemonesElegidos;
}

let seleccion = elegirPokemon();

//Calcular promedio de ataque en el pokedex

function calcularAtaquePromedio(seleccion){
    const suma = seleccion.reduce((acc, pokemon) => acc + pokemon.ataque, 0);
    const promedio = suma / seleccion.length; //Pongo .length, peo también podría poner 5 (total a elegir).
    return promedio;
}

let promedioAtaque = calcularAtaquePromedio(seleccion);
console.log(`TU PROMEDIO DE ATAQUE ES ${promedioAtaque}`);

function ordenarPorAtaque(seleccion) {
    // Ordena el array de seleccion por ataque, de mayor a menor.
    seleccion.sort((a, b) => b.ataque - a.ataque);
    console.log("%c Nivel de ataque de tus Pokemones [DE MAYOR A MENOR]:","background-color:#a3ffa6;color:#035906;font-weight:600;padding: 5px 10px;");
    return seleccion.forEach(element => {
        console.table(element.nombre, element.ataque)
    });
}

let pokemonesOrdenados = ordenarPorAtaque(seleccion);