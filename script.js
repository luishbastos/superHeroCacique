



let getHeroData = (url, callback) => {
    fetch(url)
      .then((messageHTTP) => messageHTTP.json())
      .then((jsonObject) => {
        callback(jsonObject)
      })
}

let showData = (data) => {
    document.getElementById('nomeHeroi').innerHTML = `${data.name}`
  
    document.getElementById('imagemHeroi').src = `${data.image.url}`

    document.getElementById('barraInt').style = `width: ${data.powerstats.intelligence}%; background-color: red`
    document.getElementById('textInt').innerHTML = `Intelligence - ${data.powerstats.intelligence}`

    document.getElementById('barraStr').style = `width: ${data.powerstats.strength}%; background-color: #dfbd1b`
    document.getElementById('textStr').innerHTML = `Strength - ${data.powerstats.strength}`

    document.getElementById('barraSpeed').style = `width: ${data.powerstats.speed}%; background-color: #80e098`
    document.getElementById('textSpeed').innerHTML = `Speed - ${data.powerstats.speed}`

    document.getElementById('barraPower').style = `width: ${data.powerstats.power}%; background-color: #5fc0e1`
    document.getElementById('textPower').innerHTML = `Power - ${data.powerstats.power}`

    document.getElementById('barraDura').style = `width: ${data.powerstats.durability}%; background-color: #9e5ada`
    document.getElementById('textDura').innerHTML = `Durability - ${data.powerstats.durability}`

    document.getElementById('barraCombat').style = `width: ${data.powerstats.combat}%; background-color: green`
    document.getElementById('textCombat').innerHTML = `Combat - ${data.powerstats.combat}`


}

let showData2 = (data) => {
  document.getElementById('nomeHeroi2').innerHTML = `${data.name}`

  document.getElementById('imagemHeroi2').src = `${data.image.url}`

  document.getElementById('barraInt2').style = `width: ${data.powerstats.intelligence}%; background-color: red`
  document.getElementById('textInt2').innerHTML = `Intelligence - ${data.powerstats.intelligence}`

  document.getElementById('barraStr2').style = `width: ${data.powerstats.strength}%; background-color: #dfbd1b`
  document.getElementById('textStr2').innerHTML = `Strength - ${data.powerstats.strength}`

  document.getElementById('barraSpeed2').style = `width: ${data.powerstats.speed}%; background-color: #80e098`
  document.getElementById('textSpeed2').innerHTML = `Speed - ${data.powerstats.speed}`

  document.getElementById('barraPower2').style = `width: ${data.powerstats.power}%; background-color: #5fc0e1`
  document.getElementById('textPower2').innerHTML = `Power - ${data.powerstats.power}`

  document.getElementById('barraDura2').style = `width: ${data.powerstats.durability}%; background-color: #9e5ada`
  document.getElementById('textDura2').innerHTML = `Durability - ${data.powerstats.durability}`

  document.getElementById('barraCombat2').style = `width: ${data.powerstats.combat}%; background-color: green`
  document.getElementById('textCombat2').innerHTML = `Combat - ${data.powerstats.combat}`


}

let showData3 = (data) => {
  document.getElementById('nomeHeroi3').innerHTML = `${data.name}`

  document.getElementById('imagemHeroi3').src = `${data.image.url}`

  document.getElementById('barraInt3').style = `width: ${data.powerstats.intelligence}%; background-color: red`
  document.getElementById('textInt3').innerHTML = `Intelligence - ${data.powerstats.intelligence}`

  document.getElementById('barraStr3').style = `width: ${data.powerstats.strength}%; background-color: #dfbd1b`
  document.getElementById('textStr3').innerHTML = `Strength - ${data.powerstats.strength}`

  document.getElementById('barraSpeed3').style = `width: ${data.powerstats.speed}%; background-color: #80e098`
  document.getElementById('textSpeed3').innerHTML = `Speed - ${data.powerstats.speed}`

  document.getElementById('barraPower3').style = `width: ${data.powerstats.power}%; background-color: #5fc0e1`
  document.getElementById('textPower3').innerHTML = `Power - ${data.powerstats.power}`

  document.getElementById('barraDura3').style = `width: ${data.powerstats.durability}%; background-color: #9e5ada`
  document.getElementById('textDura3').innerHTML = `Durability - ${data.powerstats.durability}`

  document.getElementById('barraCombat3').style = `width: ${data.powerstats.combat}%; background-color: green`
  document.getElementById('textCombat3').innerHTML = `Combat - ${data.powerstats.combat}`


}

let numHeroi = Math.floor(Math.random() * 601);
let numHeroi2 = Math.floor(Math.random() * 601);
let numHeroi3 = Math.floor(Math.random() * 601);
getHeroData(`https://superheroapi.com/api.php/10207244891555840/${numHeroi}`, showData)
getHeroData(`https://superheroapi.com/api.php/10207244891555840/${numHeroi2}`, showData2)
getHeroData(`https://superheroapi.com/api.php/10207244891555840/${numHeroi3}`, showData3)