const url = "https://www.freetogame.com/api/games?"

// setTimeout(() => {
//     console.log("Hei")
//     setTimeout(() =>  {
//         console.log("Pål")

//     }, 5000)
// }, 10000);

// setInterval(() => {
// console.log("hade")
// }, 1000)

console.log(fetch(url))

// 100 koder (informasjon)
// 200 koder (jeg er okay)
// 300 koder (beveglses koder) 
// 400 koder (client error) problem hos oss
// 500 koder (server error) problemer hos di


function getName() {
const firstName = "pål"
}
function getlastname() {
const secondname = "borgen"
}
function sumname() {
    const first = getName()
    const last = getlastname()
    const fullname = first + " " + last
}
function greet() {
    sumname()
}
// == sjekker verdi
// === sjekker verdi og type
const checkPass = (pass) => {
 if (pass) {
    const checkEmail = () => {

    }
 }
}

// JSON
// Javascript object notation

async function test() {
    try {
        fetch(url)
        .then(item => item.json())
    } catch (error) {
        console.log(error)
    }
}