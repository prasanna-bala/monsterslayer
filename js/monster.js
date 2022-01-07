var startGame = document.querySelector('.start_game'),
show = document.querySelectorAll('.show'),
normalSkill = document.querySelector('.attack'),
specialSkill = document.querySelector('.special_attack'),
healSkill = document.querySelector('.heal'),
giveUp = document.querySelector('.give_up'),
player_bar = document.querySelector('.player_bar'),
monsterBar = document.querySelector('.monster_bar'),
logs = document.querySelector('.logs');
 
function display_buttons(){
  startGame.style = "display: none";
show.forEach(function(event) {
  event.style = "display: block"
})
}
function display_giveUp(){
  var HP = 100;
  player_bar.setAttribute('value', HP);
  player_bar.style.width = HP + '%';
  player_bar.innerHTML = HP;
  monsterBar.setAttribute('value', HP);
  monsterBar.style.width = HP + '%';
  monsterBar.innerHTML = HP;
  alert("Game Over");
  show.forEach(function(event) {
    event.style = "display: none";
  })
  startGame.style = "display: block;";
  player_bar.style = "width: 100%;";
  monsterBar.style = "width: 100%;" 
  logs.innerHTML = "";
}




function setHP() {
  var HP = 100;
  player_bar.setAttribute('value', HP);
  player_bar.style.width = HP + '%';
  player_bar.innerHTML = HP;
  monsterBar.setAttribute('value', HP);
  monsterBar.style.width = HP + '%';
  monsterBar.innerHTML = HP;
  logs.innerHTML = "";
  }
  function resetHP() {
  var HP = 0;
  player_bar.setAttribute('value', HP);
  player_bar.style.width = HP + '%';
  player_bar.innerHTML = HP;
  monsterBar.setAttribute('value', HP);
  monsterBar.style.width = HP + '%';
  monsterBar.innerHTML = HP;
  logs.innerHTML = "";
  }

  function monsterSkill() {
    var monsterAttack = Math.floor(Math.random() * (12 - 5 + 1)) + 5,
      myHP = player_bar.getAttribute('value'),
      myHealth = (myHP - monsterAttack);
    player_bar.setAttribute('value', myHealth);
    player_bar.style.width = myHealth + '%';
    player_bar.innerHTML = myHealth;
    logs.insertAdjacentHTML('afterbegin', '<p class="monster_logs">Monster hit for '+monsterAttack+' points health</p>');
    }


  function theWinner() {
    var myHP = player_bar.getAttribute('value'),
      monsterHP = monsterBar.getAttribute('value');
    if (monsterHP <= 0) {
    alert("You Win");
    if(confirm("Do you want play next game?") == true) {
      setHP();   
    }
    else {
      resetHP();
      }
    }
    else if (myHP <=0) {
    alert("You Lose");
    if(confirm("Do you want play next game?") == true) {
     setHP();    
    }
    else {
    resetHP();
    }}}
 
/*begining of player */

class player {

  constructor(name) {
    this.name = name;
  }
  normalSkill() {
    var normalAttack = Math.floor(Math.random() * (10 - 4 + 1)) + 4,
    monsterHP = monsterBar.getAttribute('value'),
    monsterHealth = (monsterHP - normalAttack);
    monsterBar.setAttribute('value', monsterHealth);
    monsterBar.style.width = monsterHealth + '%';
    monsterBar.innerHTML = monsterHealth;
    monsterSkill();
    logs.insertAdjacentHTML('afterbegin', '<p class="my_logs">You hit for ' + normalAttack + ' points health</p>');
    theWinner();
  }
 
  specialSkill() {
    var specialAttack = Math.floor(Math.random() * (20 - 10 + 1)) + 10,
    monsterHP = player_bar.getAttribute('value'),
    monsterHealth = (monsterHP - specialAttack);
    monsterBar.setAttribute('value', monsterHealth);
    monsterBar.style.width = monsterHealth + '%';
    monsterBar.innerHTML = monsterHealth;
    monsterSkill();
    logs.insertAdjacentHTML('afterbegin', '<p class="my_logs">You hit for ' + specialAttack + ' points health</p>');
    theWinner();
  }
  healSkill() {
    var myHP = player_bar.getAttribute('value'),
    myHealth = (myHP - (-10));
    if (myHP <= 100) {
    player_bar.setAttribute('value', myHealth);
    player_bar.width = myHealth + '%';
    player_bar.innerHtml = myHealth;
    } else {
    player_bar.style = "width: 100%";
    player_bar.innerHTML = "100";
    }
    monsterSkill();
    logs.insertAdjacentHTML('afterbegin', '<p class="my_logs">You have healed for 10 points health</p>');
  }

}
 
  /*end of player */
  let player1 = new player('player');

  normalSkill.addEventListener('click', function() { 
    player1.normalSkill();
    
    })
  
    specialSkill.addEventListener('click', function() { 
      player1.specialSkill()  
    
      })
      
      healSkill.addEventListener('click', function() {
        player1.healSkill()  
      }) 
  