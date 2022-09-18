// Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// TEST 1 A COMPLETER
function sortingNumbers () {
  const sortMeNumbers = [ 4, 1, 2, 3 ];
  // TODO: Utiliser l'une des fonction de array pour sort ce tableau
  return sortMeNumbers.sort();
}

// TEST 2 A COMPLETER
function sortingObjects () {
  const sortMeObjects = [ { taille: 3 }, { taille: 1 }, { taille: 2 } ];
  return sortMeObjects.sort( ( a, b ) => ( a.taille - b.taille ) );
}

// TEST 3 A COMPLETER
function addPropertyToObjects () {
  const modifyMeObjects = [ { taille: 1, prenom: 'toto' }, { taille: 2, prenom: 'titi' }, { taille: 3, prenom: 'tata' } ];
  // TODO: Ajouter la propriété nom à tous les objets dans le tableau avec la valeur 'TUTU'
  // en utilisant une des fonction de array
  return modifyMeObjects.map( ( modifyMeObject ) => ( { ...modifyMeObject, nom: 'TUTU' } ) );
}


// ======== NE PAS TOUCHER AUX COMPARAISONS EN DESSOUS  ==========

// TEST 1
// UNCOMMENT BELLOW pour voir le résultat actuel de la fonctions
// console.log( sortingNumbers().toString() )
sortingNumbers().toString() === [ 1, 2, 3, 4 ].toString() ?
  console.log( ' ++++++ sortingNumbers OK' ) :
  console.log( ' ----- sortingNumbers NOK' );

// TEST 2
// UNCOMMENT BELLOW pour voir le résultat actuel de la fonctions
// console.log( sortingObjects().toString() )
sortingObjects().toString() === [ { taille: 3 }, { taille: 1 }, { taille: 2 } ].toString() ?
  console.log( ' ++++++ sortingObjects OK' ) :
  console.log( ' ----- sortingObjects NOK' );

// TEST 3
// UNCOMMENT ME pour voir le résultat actuel de la fonctions
// console.log( addPropertyToObjects() )
addPropertyToObjects().toString() === [ { taille: 1, prenom: 'toto' }, { taille: 2, prenom: 'titi' }, { taille: 3, prenom: 'tata' } ].toString() ?
  console.log( ' ++++++ addPropertyToObjects OK' ) :
  console.log( ' ----- addPropertyToObjects NOK' );
