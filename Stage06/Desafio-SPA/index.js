const all_Links = document.querySelectorAll('.nav-link');

const routes = {
    '/index.html': './Stage06/Desafio-SPA/pages/home.html',
    "/": "./Stage06/Desafio-SPA/pages/home.html",
    "/universe": "./Stage06/Desafio-SPA/pages/universe.html",
    "/exploration": "./Stage06/Desafio-SPA/pages/exploration.html",
    404: "./Stage06/Desafio-SPA/pages/404.html"
}

function route (event){
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    handle()
}

async function handle () {
    const { pathname } = window.location
    const route = routes[pathname] || routes[404]

    changeActiveLink(pathname)
    
    fetch(route)
    .then(data => data.text())
    .then(html => document.querySelector("#app").innerHTML = html)
}



function changeActiveLink (route){
    all_Links.forEach(link => {
        const test = (link.pathname == route)
        link.classList.remove("active-link")
        if (test) {link.classList.add("active-link")}
    })
}

handle()
window.route = () => route()
window.onpopstate = () => handle()
