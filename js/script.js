{ 
    const playGame= function(playerInput){
    clearMessages();
    console.log(clearMessages);


const getMoveName= function(argMoveId){
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
const randomNumber = Math.floor(Math.random() * 3 + 1);

const computerMove= getMoveName(randomNumber);

console.log('Wylosowana liczba to: ' + randomNumber);

printMessage('Ruch komputera to: ' + computerMove);


const playerMove = getMoveName(playerInput);


printMessage('Ruch gracza to: ' + playerMove);


const displayResult= function(argComputerMove, argPlayerMove){
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
    displayResult(computerMove,playerMove);
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

}