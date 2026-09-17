const url = "https://www.freetogame.com/api/games?"
const containGame = document.querySelector("#gameContain")

async function getData(apiurl) {
    try {
        fetch(apiurl)
        .then(res => res.json())
        .then(data => createCard(data))
        .finally(console.log("got api!"))
    } catch (err) {
        console.error(err)    
    }
}
// [
//     {
//         developer:
//         genre:
//         title:
//         short_description:
//         thumbnail:
//     }
// ]

function createCard(arrayData) {
    arrayData.forEach(apiData => {     
        const div = document.createElement("div")
        div.className = "gameCard"
        
        const pDev = document.createElement("p")
        const devtxt = document.createTextNode(apiData.developer)
        pDev.append(devtxt)
        pDev.className = "devTxt"

        const pgenre = document.createElement("p")
        const genretxt = document.createTextNode(apiData.genre)
        pgenre.append(genretxt)
        pgenre.className = "genreTxt"

        const titleh3 = document.createElement("h3")
        const titletxt = document.createTextNode(apiData.title)
        titleh3.append(titletxt)
        titleh3.className = "title"

        const descp = document.createElement("p")
        const desctxt = document.createTextNode(apiData.short_description)
        descp.append(desctxt)
        descp.className = "descTxt"

        const figure = document.createElement("figure")
        const img = document.createElement("img")
        img.src = apiData.thumbnail
        figure.appendChild(img)
        figure.className = "imgContain"
        
        div.append(titleh3, figure, descp, pgenre, pDev)

        
        containGame.appendChild(div)
    });
}

getData(url)
