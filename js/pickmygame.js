const url = "https://www.freetogame.com/api/games?"
const randombtn = document.querySelector("#randombtn")
const containGame = document.querySelector("#gameContain")

async function getData(apiurl) {
    try {
        fetch(apiurl)
        .then(res => res.json())
        .then(data => randomGamePicker(data))
        .finally(console.log("got api!"))
    } catch (err) {
        console.error(err)    
    }
}
//PC (Windows)
// Web Browser
function randomGamePicker(arrayData) {
let randomIndex = Math.floor(Math.random() * arrayData.length)
console.log(arrayData[randomIndex])
        const div = document.createElement("div")
        div.className = "gameCard"
        
        const pDev = document.createElement("p")
        const devtxt = document.createTextNode(arrayData[randomIndex].developer)
        pDev.append(devtxt)
        pDev.className = "devTxt"

        const pgenre = document.createElement("p")
        const genretxt = document.createTextNode(arrayData[randomIndex].genre)
        pgenre.append(genretxt)
        pgenre.className = "genreTxt"

        const titleh3 = document.createElement("h3")
        const titletxt = document.createTextNode(arrayData[randomIndex].title)
        titleh3.append(titletxt)
        titleh3.className = "title"

        const descp = document.createElement("p")
        const desctxt = document.createTextNode(arrayData[randomIndex].short_description)
        descp.append(desctxt)
        descp.className = "descTxt"

        const figure = document.createElement("figure")
        const gameImg = document.createElement("img")
        gameImg.src = arrayData[randomIndex].thumbnail
        figure.appendChild(gameImg)
        figure.className = "imgContain"
        
        div.append(titleh3, figure, descp, pgenre, pDev)
        containGame.appendChild(div)
}

randombtn.addEventListener("click", (e) => {
    let select = document.querySelector("#gamePlatform")

getData(url + `platform=${select.value}`)
})