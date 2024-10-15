    const ingredientPrice={
        sugar:250,
        bakingPowder:200,
        salt:50
    }
console.log(Object.isFrozen(ingredientPrice))
Object.freeze(ingredientPrice);


let chocolate_recipe = {

    title: "Chocolate Cake",
    ingredients: [
      "2 cups flour",
      "1 1/2 cups sugar",
      "2 large eggs",
    ],
    instructions: [
      "Preheat oven to 350°F (175°C).",
      "Grease and flour two 9-inch round pans.",
      "In a large bowl, combine flour, sugar, cocoa powder, baking powder, and salt.",
      "Bake for 30-35 minutes"
    ]
  };



const ingredients=chocolate_recipe.ingredients;
// console.log(ingredients)
ingredients.push("1 cup cocoa powder");
console.log(ingredients)

const updatedInstructions = chocolate_recipe.instructions.map(instruction => {
    if (instruction.includes("Bake for 30-35 minutes")) {
      return "Bake for 45-50 minutes";
    }
    return instruction;
  });
  
chocolate_recipe.instructions = updatedInstructions;
console.log(chocolate_recipe);

const printedIngredients=ingredients.join(" | ");
console.log(printedIngredients)

const recipes = [
    {
      name: "Spaghetti Carbonara",
      category: "appetizer",
      ingredients: [
        "200g spaghetti",
        "100g pancetta",
        "2 large eggs",
        "50g pecorino cheese",
        "Salt and pepper",
        "Fresh parsley"
      ],
      instructions: "Cook spaghetti. Fry pancetta. Beat eggs with cheese, add to pasta off heat. Mix in pancetta. Serve with parsley."
    },
    {
      name: "Vegetable Stir-Fry",
      category: "Main Course",
      ingredients: [
        "2 cups mixed vegetables (bell peppers, broccoli, carrots)",
        "2 tablespoons soy sauce",
        "1 tablespoon olive oil",
        "1 clove garlic, minced",
        "Salt and pepper"
      ],
      instructions: "Heat oil, add garlic, and stir-fry vegetables for 5-7 minutes. Add soy sauce and cook for another minute."
    }];

const newRecipe={
    name:"Chocolate Cake",
    category:"Dessert",
    ingredients:[
        "1 cup flour",
        "1 cup sugar",
    ],
    instructions:"Bluh bluh blih"
}

recipes.push(newRecipe);
// console.log(recipes);

const recipeNames=recipes.map(recipe=>recipe.name)
console.log(recipeNames);

const enterCategory ="appetizer"

const filteredRecipes=recipes.filter(recipe=>recipe.category===enterCategory)
console.log(filteredRecipes)

const player = {
    name: "Lionnel Messi",
    age:36,
    position: "Forward",
    team: "Inter Miami",
    goals: 700,
    assists: 300,
    stats: function() {
        return `${this.name} has scored ${this.goals} goals and provided ${this.assists} assists.`;
    }
}

console.log(player.stats());

