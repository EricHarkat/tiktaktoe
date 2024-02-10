/*joueur*/

    const play = document.querySelector(".btnPlay")
    const player1 = document.querySelector("#P1")
    const player2 = document.querySelector("#P2")
   
    

    function setName1(value, value1){
        player1.textContent += value + " " + value1;
    }

    function setName2(value, value1){
        player2.textContent += value + " " + value1;
    }

    
    /*lancer une partie*/

    play.addEventListener("click", () =>{
        let event = new CustomEvent('createPlayer');
        document.dispatchEvent(event);
    })

    /*recommencer*/
