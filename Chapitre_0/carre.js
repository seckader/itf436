// Calcul d'un carré à partir de nombre impairs

function carre(entier) {
	resultat = 0;
	nombre_impair = 1;

	for (let i = 0; i < entier; i++) {
		resultat += nombre_impair;
		nombre_impair += 2;
	}

	return resultat;
}

// Exemples
console.log(carre(2));
console.log(carre(3));
console.log(carre(4));
console.log(carre(9));
console.log(carre(12));
console.log(carre(19));