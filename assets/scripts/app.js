// Base constants
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 30;
const MONSTER_ATTACK_VALUE = 15;

// Base variables
let maxHealth = 250;
let currentMonsterHealth = maxHealth;
let currentPlayerHealth = maxHealth;

// Set healthbars value
adjustHealthBars(maxHealth);

// Attack monster
function attackEvent() {
    const damageToMonster = dealMonsterDamage(ATTACK_VALUE);
    const damageToPlayer = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    
    currentMonsterHealth -= damageToMonster;
    currentPlayerHealth -= damageToPlayer;

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lose!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!');
    }
}

attackBtn.addEventListener('click', attackEvent);