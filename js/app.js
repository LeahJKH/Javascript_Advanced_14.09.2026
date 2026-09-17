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
        const div  = document.createElement("div")
        
        const pDev = document.createElement("p")
        const devtxt = document.createTextNode(apiData.developer)
        pDev.append(devtxt)
        
        const pgenre = document.createElement("p")
        const genretxt = document.createTextNode(apiData.genre)
        pgenre.append(genretxt)
        
        const titleh3 = document.createElement("h3")
        const titletxt = document.createTextNode(apiData.title)
        titleh3.append(titletxt)
        
        const descp = document.createElement("p")
        const desctxt = document.createTextNode(apiData.short_description)
        descp.append(desctxt)
        
        const img = document.querySelector("img")
        img.src = apiData.thumbnail
        
        div.appendChild(titleh3)
        div.appendChild(img)
        div.appendChild(descp)
        div.appendChild(pgenre)
        div.appendChild(pDev)
        
        containGame.appendChild(div)
    });
}

getData(url)
