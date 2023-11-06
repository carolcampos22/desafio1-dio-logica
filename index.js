const heroes = [
    ["Capitão América", 7500],
    ["Homem de Ferro", 7600],
    ["Capitã Marvel", 18000],
    ["Thor", 9900],
    ["Viúva-Negra", 990],
    ["Hulk", 8200],
    ["Gavião-Arqueiro", 950],
    ["Dr Estranho", 8700],
    ["Feiticeira Escarlate", 7100],
    ["Nick Fury", 1200],
    ["Homem-Aranha", 7200]
]

let level;
for (let i = 0; i < heroes.length; i++) {
    //console.log(heroes[i][0])
    //console.log(heroes[i][1])
    if (heroes[i][1] <= 1000) {
        level = "Ferro"
    } else if (heroes[i][1] > 1001 && heroes[i][1] <= 2000){
        level = "Bronze"
    } else if (heroes[i][1] > 2001 && heroes[i][1] <= 5000){
        level = "Prata"
    } else if (heroes[i][1] > 6001 && heroes[i][1] <= 7000){
        level = "Ouro"
    } else if (heroes[i][1] > 7001 && heroes[i][1] <= 8000){
        level = "Platina"
    } else if (heroes[i][1] > 8001 && heroes[i][1] <= 9000){
        level = "Ascendente"
    } else if (heroes[i][1] > 9001 && heroes[i][1] <= 10000){
        level = "Imortal"
    } else if (heroes[i][1] > 10001){
        level = "Radiante"
    }

    console.log(`O herói ${heroes[i][0]} está no nível de ${level}`)
}



