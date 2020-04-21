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
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
}

attackBtn.addEventListener('click', attackEvent);