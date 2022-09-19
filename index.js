var typedString = "Toto";
var personne1 = {
    nom: "TUTU",
    prenom: typedString,
    age: 25
};
console.log("Voil\u00E0 les d\u00E9tails de ".concat(typedString, " : ").concat(JSON.stringify(personne1)));
