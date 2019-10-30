document.onload = characterFinder();

function characterFinder() {
  let string = 'En informatique, un logiciel est un ensemble de séquences d’instructions interprétables par une machine et d’un jeu de données nécessaires à ces opérations.';
  let nb4 = string.charAt(4), nb10 = string.charAt(10), nb35 = string.charAt(35), nb59 = string.charAt(59);
  alert('Lettre n°4 : ' + nb4 + '\nLettre n°10 : ' + nb10 + '\nLettre n°35 : ' + nb35 + '\nLettre n°59 : ' + nb59);
}
