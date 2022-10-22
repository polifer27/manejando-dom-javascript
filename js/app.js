/* Crear un programa que pida al usuario ingresar el nombre de una playlist y cuántas canciones desea agregar a la misma. Luego debe ir pidiendo agregar la cantidad de canciones elegidas de a una. Se debe ir mostrando la cantidad de canciones que quedan por agregar y la playlist con los temas hasta el momento a medida que se va a actualizando. Al finalizar mostrar un mensaje con el nombre de la playlist y la lista de canciones. */ 

let nombrePlayList = prompt("Ingresa el nombre de la playlist: ");

let cantidadCanciones = prompt("Cuantas canciones vas a agregar? ");

const nombre_lista = document.getElementById('nombre-lista');

//const canciones = document.getElementById('titulo-cancion');
nombre_lista.innerHTML = `<h2>Nombre de la Lista: ${nombrePlayList}</h2>
                          <p class="cantidad-canciones">Cantidad de canciones: ${cantidadCanciones}</p>
                          `;

const canciones = [];
let nombreCancion;
let contenido;
let bloque;
let j;
for(let i = 0; i < cantidadCanciones; i++){
    
    if(i === 0){
        nombreCancion = prompt(`Quedan por agregar ${cantidadCanciones - i} canciones Ingresa el nombre de la primera canción: `);
    }
    else if((cantidadCanciones - i) === 1){
        nombreCancion = prompt(`Solo resta agrear una canción, Ingresa el nombre de la última canción: `);
    }else{
        nombreCancion = prompt(`Quedan por agregar ${cantidadCanciones - i} canciones Ingresa el nombre de la siguiente canción: `);
    }
    console.log("i = ", i);
    j = i;
    j++;
    canciones[i] = nombreCancion;
    console.log(canciones[i]);
    //cancion = document.getElementById('cancion');
    //bloque = document.getElementsById('lista-reproduccion');
    bloque = document.querySelector('#lista-reproduccion');
    /*contenido = document.getElementById('cancion');*/
    let text = `
        <article class='cancion'>
            
            <h3 id='titulo_cancion'>Canción n°${j}: ${nombreCancion}</h3>

            
            
        </article>
        <div class='linea'> 
            </div>`;
       
    bloque.insertAdjacentHTML('beforeEnd', text);
           
    
    
}


//let text = '<p>hola perinola</p>';    

//bloque = document.getElementsByClassName('lista-reproduccion');
//let subject = document.querySelector('#lista-reproduccion');
 //     subject.insertAdjacentHTML('afterEnd', '<p>hola perinola</p>');
//console.log(canciones[0]);
/*let i = 0;*/




    


