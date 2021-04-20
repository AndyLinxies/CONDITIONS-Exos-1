//1
console.log(1 == "1");

//2
console.log(1 === "1");

//3
let prenom = prompt('Quel est ton prénom ?');

if (prenom.length < 5) {
    alert('ton nom est trop court !!!');
}

//4
let addition = prompt('2 + 2 = ?');

if (addition == 4) {
    alert('Bravo !!!');
}
else {
    alert("T'es con !!!");
}

//5
let multiplication = prompt('2 x 2 = ?');

if (multiplication == 4) {
    alert('La réponse était bien ' + multiplication);
} else {
    alert("C'est dommage, tu n'étais qu'a " + Math.abs(4 - multiplication) + " unité de la bonne réponse");
}

//6
let tableau = [];
let question1 = prompt('écris un premier truc');
let question2 = prompt('écris un deuxième truc');
let question3 = prompt('écris un troisième truc');
tableau.push(question1, question2, question3);

if (tableau.length == 3) {
    alert(tableau);
}

//7
let grandNombres = [];
let petitNombres = [];
let chiffres1 = prompt('Votre chiffre');
let chiffres2 = prompt('Votre chiffre');

if (chiffres1 >= 12 && chiffres2 >= 12) {
    grandNombres.push(chiffres1, chiffres2);
} else if (chiffres1 < 12 && chiffres2 < 12) {
    petitNombres.push(chiffres1, chiffres2);
} else if (chiffres1 >= 12 && chiffres2 < 12) {
    grandNombres.push(chiffres1);
    petitNombres.push(chiffres2);
} else {
    grandNombres.push(chiffres2);
    petitNombres.push(chiffres1);
}

alert(`votre bac contient ${grandNombres} et ${petitNombres}`);