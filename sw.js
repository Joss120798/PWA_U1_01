self.addEventListener('install', (event) => {
    console.log("SW: Instalado")
});

self.addEventListener('activate', (event) => {
    console.log("SW: Activate");
});

self.addEventListener('fetch', (event) => {
    if(event.request.url.includes('.jpg')){
        let newResp = fetch("./images/Morales.jpg")
        event.respondWith(newResp);
    }

    if(event.request.url.includes('page.css')){
        let newResp = new Response(`body{
            background-color:black !important;
            color: red;
            }
            div {
                margin-bottom: 10px;
            }`, {
                headers: {
                    'Content-Type': 'text/css'
                }
            }
        );
        event.respondWith(newResp);
    }

    if(event.request.url.includes('reqres.in')){
        let newResp = new Response(`{
            "name": "Miles Morales",
            "job": "Policia",
            "avatar": "https://www.pikpng.com/pngl/m/294-2941360_miles-morales-spiderman-miles-morales-png-clipart.png"
        }`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        event.respondWith(newResp);
    }
});