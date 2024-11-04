document.addEventListener('DOMContentLoaded',()=>{

    const fetchRecipes=async()=>{
        try{
            const response=await fetch('http://localhost:3003/recipes')
            const data=await response.json()
            console.log(data)
            displayRecipes(data)
        }catch(error){
            console.error(error)
        }
        }
        const displayRecipes = (recipes) => {
            // Find the container where recipes will be displayed
            const container = document.querySelector('.recipes-container');
            recipes.forEach(recipe => {
                const recipeDiv = document.createElement('div');
                recipeDiv.classList.add('recipe');
    
                const title = document.createElement('h2');
                title.textContent = recipe.author;
    
                const ingredients = document.createElement('p');
                ingredients.textContent = recipe.ingredients;

                const created_at=document.createElement('p');
                created_at.textContent=recipe.created_at

                const image=document.createElement('img');
                image.src=recipe.image;
    
                recipeDiv.appendChild(title);
                recipeDiv.appendChild(ingredients);
                recipeDiv.appendChild(image);
                recipeDiv.appendChild(created_at);
                container.appendChild(recipeDiv);
            });
        };

    fetchRecipes()

    const postRecipes =async (recipe_data,form) => {
        try{
            const response=await fetch("http://localhost:3003/recipes",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(recipe_data)
            })
            const data=await response.json()
            if(response.ok){
                alert("Recipe added successfully")
                form.reset()
            }else{
                alert("Error creating recipe")
            }
        }catch(error){
            console.error(error)
            console.log("An error occurred while sending the request")
        }
    }

    const form=document.querySelector('#recipeForm')
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const recipe_data={
            name:form.name.value,
            author:form.author.value,
            image:form.image.value,
            ingredients:form.ingredients.value
        }
        postRecipes(recipe_data,form)
    })



})