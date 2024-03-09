//Declaração das variaveis.
let nome = "Madeuz"
let xp = 500
let lv = ""

//Interpolação de String
console.log(`Bem-Vindo ${nome} sua aventura começa agora`)

//Estrutura de repetição para sempre aumentar a experiência do herói, e mostrar em qual nível se encontra.
for(i=1;i<10;i++){

// Utilização de if, else para definir o nível atual do herói.
    if(xp >= 0 && xp <= 1000){
        lv = "Ferro"
    }else if(xp >= 1001 && xp <= 2000){
        lv = "Bronze"
    }else if(xp >= 2001 && xp <= 5000){
        lv = "Prata"
    }else if(xp >= 5001 && xp <= 7000){
        lv = "Ouro"
    }else if(xp >= 7001 && xp <= 8000){
        lv = "Platina"
    }else if(xp >= 8001 && xp <= 9000){
        lv = "Ascendente"
    }else if(xp >= 9001 && xp <= 10000){
        lv = "Imortal"
    }else if(xp >= 10001){
        lv = "Radiante"
    }

    xp += 1050;
    console.log("Parabéns Você Ganhou Uma Partida. Sua Experiência agora é:" + xp)
    console.log("Atualmente seu nível é de: " + lv)
}

//Contatenação de texto para exbição.
console.log("O Herói de nome " + nome + " está no nível: " + lv + "! Está com: " 
+ xp + " pontos de experiência. Faltam " + (10001 - xp) + " pontos de experiência para atingir o nível: Radiante!" )

