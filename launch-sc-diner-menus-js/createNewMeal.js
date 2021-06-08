let createNewMeal = (name, listOfIngredients) => {
    let mealObject = {
        name,
        listOfIngredients,
        isVegetarian() {
            const containMeat = listOfIngredients.find( ingredient => {
                return ingredient.category.includes("meat")
            })

            if (containMeat) {
                return false
            } 
            return true
        },
        isDelicious() {
            const containCheese = listOfIngredients.find( ingredient => {
                return ingredient.category.includes("cheese")
            })

            if (containCheese) {
                return true
            }
            return false
        }
    }
    return mealObject
}

export default createNewMeal