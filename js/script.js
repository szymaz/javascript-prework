let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber ==2){
    computerMove= "papier";
} else if (randomNumber ==3){
    computerMove= "nożyce";
}

printMessage('Ruch komputera to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput =='2'){
    playerMove= "papier";
} else if(playerInput =='3'){
    playerMove= "nożyce";
}

printMessage('Ruch gracza to: ' + playerMove);

if(computerMove=='kamień'&& playerMove=="kamień"){
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
}
