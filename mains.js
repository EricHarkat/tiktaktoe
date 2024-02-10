function creatPlayer(){
    let player1 = prompt("Entrez votre nom!")
    let form1 = prompt('Entrez "x" ou "o"')
    setName1(player1,form1);
    let player2 = prompt("Entrez votre nom!")
    let form2 = prompt('Entrez "x" ou "o"')
    setName2(player2,form2);
}

function start(e){
    let check = e.detail;
    console.log(check)
    if(lastCheck != null && lastCheck.textContent == "x" && check.textContent == ""){
        e.target.textContent = "o"

    }else if(check.textContent == ""){
        e.target.textContent = "x"
    }
    lastCheck = check;
    console.log(lastCheck)
    /*horizontale*/
    if(matrice[0][0].textContent != "" && (matrice[0][0].textContent == matrice[0][1].textContent) && (matrice[0][0].textContent == matrice[0][2].textContent)) {
        document.querySelector("h3").textContent = "victory"
        }else if(matrice[1][0].textContent != "" && (matrice[1][0].textContent == matrice[1][1].textContent) && (matrice[1][0].textContent == matrice[1][2].textContent)){
        document.querySelector("h3").textContent = "victory"
        }else if(matrice[2][0].textContent != "" && (matrice[2][0].textContent == matrice[2][1].textContent) && (matrice[2][0].textContent == matrice[2][2].textContent)){
        document.querySelector("h3").textContent = "victory"
        }
        /*verticale*/
        if(matrice[0][0].textContent != "" && (matrice[0][0].textContent == matrice[1][0].textContent) && (matrice[0][0].textContent == matrice[2][0].textContent)){
        document.querySelector("h3").textContent = "victory"
        }else if(matrice[0][1].textContent != "" && (matrice[0][1].textContent == matrice[1][1].textContent) && (matrice[0][1].textContent == matrice[2][1].textContent)){
        document.querySelector("h3").textContent = "victory"
        }else if(matrice[0][2].textContent != "" && (matrice[0][2].textContent == matrice[1][2].textContent) && (matrice[0][2].textContent == matrice[2][2].textContent)){
        document.querySelector("h3").textContent = "victory"
        }
        /*diagonale*/
        if(matrice[1][1].textContent != "" && (matrice[0][0].textContent == matrice[1][1].textContent) && (matrice[0][0].textContent == matrice[2][2].textContent)){
        document.querySelector("h3").textContent = "victory"
        }else if(matrice[1][1].textContent != "" && (matrice[0][2].textContent == matrice[1][1].textContent) && (matrice[0][2].textContent == matrice[2][0].textContent)){
        document.querySelector("h3").textContent = "victory"
        }
}

document.addEventListener("createPlayer", creatPlayer);
document.addEventListener("play",start);
