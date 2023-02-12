function playGame(playerInput){
    clearMessages();
    console.log(clearMessages);
 

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if (argMoveId ==2){
        return 'papier';
    } else if (argMoveId ==3){
        return 'nożyce';
    }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

/*let computerMove = 'nieznany ruch';*/
let computerMove= getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber ==2){
    computerMove= "papier";
} else if (randomNumber ==3){
    computerMove= "nożyce";
}*/

printMessage('Ruch komputera to: ' + computerMove);

/*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);*/

let playerMove = getMoveName(playerInput);
/*if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput =='2'){
    playerMove= "papier";
} else if(playerInput =='3'){
    playerMove= "nożyce";
}*/

printMessage('Ruch gracza to: ' + playerMove);

/*if(computerMove=='kamień'&& playerMove=="kamień"){
    printMessage('Wynik rundy: REMIS. Spróbujcie jeszcze raz!');
}else if(computerMove=='nożyce' && playerMove=='nożyce'){
    printMessage('Wynik rundy: REMIS. Spróbujcie jeszcze raz!');
}else if(computerMove=='papier' && playerMove== 'papier'){
    printMessage('Wynik rundy: REMIS. Spróbujcie jeszcze raz!');
}else if(computerMove=='kamień' && playerMove== 'nożyce'){
    printMessage('Przegrałeś! wygrywa: KOMPUTER!');
}else if(computerMove=='nożyce' && playerMove=='papier'){
    printMessage('Przegrałeś! wygrywa: KOMPUTER!');
}else if(computerMove=='papier' && playerMove=="kamień"){
    printMessage('Przegrałeś! wygrywa: KOMPUTER!');
}else if(computerMove== 'papier' && playerMove=='nożyce'){
    printMessage('WYGRAŁEŚ!');
}else if(computerMove=='nożyce' && playerMove=='kamień'){
    printMessage('WYGRAŁEŚ!');
}else if(computerMove=='kamień' && playerMove=='papier'){
    printMessage('WYGRAŁEŚ!');
}else if(computerMove=='kamień' && playerMove=='nieznany ruch'){
    printMessage('Gracz wykonał nieznany ruch. Ponów rozgrywkę');
}else if(computerMove=='nożyce' && playerMove=='nieznany ruch'){
    printMessage('Gracz wykonał nieznany ruch. Ponów rozgrywkę');
}else if(computerMove=='papier' && playerMove=='nieznany ruch'){
    printMessage('Gracz wykonał nieznany ruch. Ponów rozgrywkę');
}*/

function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
    if(argComputerMove=='kamień'&& argPlayerMove=="kamień"){
        printMessage('Wynik rundy: REMIS. Spróbujcie jeszcze raz!');
    }else if(argComputerMove=='nożyce' && argPlayerMove=='nożyce'){
        printMessage('Wynik rundy: REMIS. Spróbujcie jeszcze raz!');
    }else if(argComputerMove=='papier' && argPlayerMove== 'papier'){
        printMessage('Wynik rundy: REMIS. Spróbujcie jeszcze raz!');
    }else if(argComputerMove=='kamień' && argPlayerMove== 'nożyce'){
        printMessage('Przegrałeś! wygrywa: KOMPUTER!');
    }else if(argComputerMove=='nożyce' && argPlayerMove=='papier'){
        printMessage('Przegrałeś! wygrywa: KOMPUTER!');
    }else if(argComputerMove=='papier' && argPlayerMove=="kamień"){
        printMessage('Przegrałeś! wygrywa: KOMPUTER!');
    }else if(argComputerMove== 'papier' && argPlayerMove=='nożyce'){
        printMessage('WYGRAŁEŚ!');
    }else if(argComputerMove=='nożyce' && argPlayerMove=='kamień'){
        printMessage('WYGRAŁEŚ!');
    }else if(argComputerMove=='kamień' && argPlayerMove=='papier'){
        printMessage('WYGRAŁEŚ!');
    }else if(argComputerMove=='kamień' && argPlayerMove=='nieznany ruch'){
        printMessage('Gracz wykonał nieznany ruch. Ponów rozgrywkę');
    }else if(argComputerMove=='nożyce' && argPlayerMove=='nieznany ruch'){
        printMessage('Gracz wykonał nieznany ruch. Ponów rozgrywkę');
    }else if(argComputerMove=='papier' && argPlayerMove=='nieznany ruch'){
        printMessage('Gracz wykonał nieznany ruch. Ponów rozgrywkę');

  }
}

printMessage=(displayResult)(computerMove,playerMove);
}
document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });

