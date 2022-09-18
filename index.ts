const typedString: String = "Toto";

interface Personne {
  nom: String;
  prenom: String;
  age: number;
}

const personne1: Personne = {
  nom: "TUTU",
  prenom: typedString,
  age: 25,
};

console.log(
  `Voilà les détails de ${typedString} : ${JSON.stringify(personne1)}`
);
