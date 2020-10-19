const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

const map = L.map('mapid', options).setView([-7.1250532,-34.8640215], 14);

//create and add tileLayer
L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",)
    .addTo(map);

//create icon 
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor:[29,68],
    popupAnchor:[170,2]
})

//create and add marker
L.marker([-7.1250532,-34.8640215] , {icon})
    .addTo(map)


function selectImage(event){
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de images
    imageContainer.src = image.src

    //adicionar a classe .active para este bloco
    button.classList.add('active')

}

