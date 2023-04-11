const miFuncion = async () => {
    console.log ("x1");
    const response = await fetch("https://raw.githubusercontent.com/GLopzu/Taller/main/tienda.json");
    const data = await response.json();
    
    for (let tiendaproductos of data) {
        console.log(tiendaproductos)
    }
} 

miFuncion();
