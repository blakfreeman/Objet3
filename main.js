// ## Exo 1

// ### Créer deux personnages du nom de François et Sergio
// ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// ### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.

var François = {
  parnier : ["pain ","café ","coca "],
  derober : function() {
   François.parnier.push(Sergio.parnier[0]);
   François.parnier.push(Sergio.parnier[1]);

   Sergio.parnier.splice(0,2)

      
  }
}



var Sergio = {
  parnier : ["steak ","bierre ","wiski "],

}

console.log(Sergio.parnier);


François.derober();

console.log(François.parnier);
console.log(Sergio.parnier);
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(0,2) ;

// console.log(fruits);