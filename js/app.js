
let url = window.location.href
let swDirect = "/PWA_U1_01/sw.js"

if(navigator.serviceWorker){
    if(url.includes('localhost')){
        swDirect = "/sw.js"
    }
    navigator.serviceWorker.register(swDirect)
}else{
    console.log("Nada bien")
}

document.getElementById("registrar").onclick = function(){
    let personas = $('#registros')
    let data = {name: "El", job: "Bicho"}
    fetch("https://reqres.in/api/users", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
            
        },
        body: JSON.stringify(data)
    })
        .then(respuesta => respuesta.json())
        .then(resJson => {
            console.log(resJson)
            
            let card = $('<div class="col-sm-6">' +
                    '<div class="card" style="width: 16rem;">' +
                        `<img class="card-img-top" src="${resJson.avatar}" alt="Card image cap">` +
                        '<div class="card-body">' +
                            `<h5 class="card-title">${resJson.name}</h5>` +
                            `<div class="card-text">${resJson.job}</div>` +
                                '<a href="#" class="btn btn-danger">Conlleva una gran responsabilidad</a>' +
                            "</div>" +
                        "</div>" +
                    "</div>");
            personas.append(card)
    });
}