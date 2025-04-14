// Fonction pour faire une addition
function sum(a, b) {
  return a + b;
}

// Fonction pour faire une soustraction
function diff(a, b) {
  return a - b;
}

// Fonction pour faire une multiplication
function prod(a, b) {
  return a * b;
}

// Fonction pour faire une division
// Vérifie d'abord que le diviseur n'est pas égal à 0
function quot(a, b) {
  return b !== 0 ? a / b : "Division par zéro"; // Évite les erreurs de division par 0
}

// Export des fonctions pour qu'on puisse les utiliser dans un autre fichier
module.exports = { sum, diff, prod, quot };

