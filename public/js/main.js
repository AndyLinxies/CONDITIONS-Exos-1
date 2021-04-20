console.log(1=="1");
console.log(1==="1");

//3
//let prenom= prompt('Quel est votre prénom ?')
//if(prenom.length<5){
//    alert('Ton nom est trop court')
//}

//4
//let addition = prompt('4+4=?')
//if(addition==8){
//    alert('Felicitation !')
//}
//else{
//    alert('incorrect')
//}

//5
//alert('Resolvez 4*5 = ?');
//let multiplication = prompt('Resolvez 4*5 = ?')//;
//if(multiplication==20){
//    alert(`la réponse était bien : ${multiplication}`);
//}
//else{
//    alert("C'est dommage vous étiez à "+(parseInt(multiplication)-20) +" Unités De //la réponse" );
//}
//Mettre un Math.abs pour eviter les chiffres négatifs

//6

//let var1= prompt('Element 1');
//let var2= prompt('Element 2');
//let var3= prompt('Element 3');
//let tab = [var1,var2,var3];
//if(tab.length==3){
 //   alert('Votre tableau contient ' + tab)
//}

//7
//let grandNombres =[];
//let petitNombres =[];
//let chiffre1 = prompt('Votre chiffre');
//let chiffre2 = prompt('Votre chiffre')
//if (chiffre1 >=12) {
//    grandNombres.push(chiffre1)
//} else if (chiffre2 <12) {
//    petitNombres.push(chiffre2)
//}
//alert(`Votre bac contient ${grandNombres} et ${petitNombres}`)

//8
let age = prompt('Quel est votre age ?')
if (age>=18) {
    alert('Bienvenue')
} else {
    alert('Vous n\'êtes pas majeur. Accès interdit')
}