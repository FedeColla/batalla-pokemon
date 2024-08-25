//LA SIGUIENTE PREENTRGA ABARCA: CICLOS-CONDICIONALES-FUNCIONES


function inicio () {
    
    let msjBienvenida = confirm(`
    ⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿    Hola!
    ⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠁   
    ⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀     
    ⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿    Estás a punto de iniciar 
    ⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿⡇   una batalla pokemon contra 
    ⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿    Charizard.
    ⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⡇    Para poder enfrentarlo 
    ⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿     necesitás elegir un pokemón.
    ⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⡇
    ⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿     ¿Comenzamos?`);
    
    return msjBienvenida;
}

let inicioJuego = inicio();



function elegirPokemon () {
    let pokemon = prompt(
        `¿Qué pokemon pensás necesitr para derrotar a Charizard?
        Escribí el número para elegir:
            
        1. Charmander🔥    2. Squirtle💧    3. Bulbasure🌱    4. Pikachu⚡`
    );
    return pokemon;
}


function juego() {
    if (inicioJuego === true) {
        // Para obtener un número aleatorio que haga que el pokemón elegido luego tenga más o menos chances de ganar.
        function ataque (a) {
            let ataque = Math.floor(Math.random() * (50 + a + 1)) + a;
            return ataque;
        }

        let resistencia = 250; //Esto es lo que aguanta Charizard inicialmente.

        //Variables vcías que luego van a llenarse con datos.
        let pokemonElegido;
        let ataqueFinal;
        
        //Depende el pokemón elegido, se adquiere una confirmación para iniciar la batalla y un nivel de ataque (el cual no se le dice al usuario)
        while (true) {
            pokemonElegido = elegirPokemon();
        
            switch (pokemonElegido) {
                case "1":
                    alert("Elegiste a Charmander🔥, iniciá el torneo con un ataque! Tenés que vencer a charizard en un máximo de 5 intentos.");
                    ataqueFinal= ataque(10);
                    break
                case "2":
                    alert("Elegiste a Squirtle💧, iniciá el torneo con un ataque! Tenés que vencer a charizard en un máximo de 5 intentos.");
                    ataqueFinal= ataque(50);
                    break
                case "3":
                    alert("Elegiste a Bulbasure🌱, iniciá el torneo con un ataque! Tenés que vencer a charizard en un máximo de 5 intentos.");
                    ataqueFinal= ataque(20);
                    break
                case "4":
                    alert("Elegiste a Pikachu⚡, iniciá el torneo con un ataque! Tenés que vencer a charizard en un máximo de 5 intentos.");
                    ataqueFinal= ataque(30);
                    break
                default:
                    alert("⚠️ No elegiste ningún pokemon! Volvé a intentarlo.");
                    continue;
            }
            break;
        }

        function batalla(ataqueFinal, resistencia) {
            let intentos = 5;
            let puntos = resistencia;
        
            while (intentos > 0 && puntos > 0) {
                puntos = puntos - ataqueFinal;
                intentos--;
        
                if (puntos <= 0) {
                    alert("✔️✔️✔️ Ganaste la batalla! Felicitaciones.✔️✔️✔️");
                    break;
                } else if (intentos <= 0) {
                    alert("❌❌❌ Fuiste vencido. Suerte el próximo torneo! ❌❌❌");
                    break;
                } else {
                    alert(`Charizard ahora tiene ${puntos} puntos de vida. Te quedan ${intentos} intentos.`);
                }
            }
        }
        batalla(ataqueFinal, resistencia);
    }
}


//Para que siempre se pueda elegir seguir jugando

while (inicioJuego === true) { 
    juego();
    inicioJuego = inicio(); 
}