// Base constants
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 30;
const MONSTER_ATTACK_VALUE = 15;
const HEAL_VALUE = 25;
const HEAL_CHARGES = 3;

// Base variables
let maxHealth = 250;
let currentMonsterHealth = maxHealth;
let currentPlayerHealth = maxHealth;
let healCounter = HEAL_CHARGES;
let hasBonusLife = true;

// Set healthbars value
adjustHealthBars(maxHealth);

// Attack monster
function attackEvent(mode) {
    let maxDamage;

    if (mode == 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if (mode == 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }

    const damageToMonster = dealMonsterDamage(maxDamage);
    const damageToPlayer = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    const initialHealth = currentPlayerHealth;
    
    currentMonsterHealth -= damageToMonster;
    currentPlayerHealth -= damageToPlayer;

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialHealth;
        setPlayerHealth(initialHealth);
        alert('You have a second chance! :)');
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lose :(');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw! :O');
    }

    if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
        reset();
    }
}

// Heal player
function healEvent() {
    let healValue = HEAL_VALUE;

    if (!healCounter) {
        alert("You don't have charges for heal!");
        return;
    }

    if (currentPlayerHealth == maxHealth) {
        alert("You can't heal to more than your max initial health.");
        return;
    }

    if (currentPlayerHealth >= maxHealth - HEAL_VALUE) {
        healValue = maxHealth - currentPlayerHealth;
    }

    healCounter--;
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    alert(`You have ${healCounter} charges left.`); 
}

// Reset game
function reset() {
    resetGame(maxHealth);
    addBonusLife();
    hasBonusLife = true;
    healCounter = HEAL_CHARGES;
    currentMonsterHealth = maxHealth;
    currentPlayerHealth = maxHealth;
}

function baseAttack() {
    attackEvent('ATTACK');
}

function strongAttack() {
    attackEvent('STRONG_ATTACK');
}

// Event listeners
attackBtn.addEventListener('click', baseAttack);
strongAttackBtn.addEventListener('click', strongAttack);
healBtn.addEventListener('click', healEvent);