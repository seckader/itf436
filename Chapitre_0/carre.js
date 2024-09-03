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