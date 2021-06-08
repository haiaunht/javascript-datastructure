let createNewMenu = (title, startTime, endTime) => {
    let menuObject = {
        title,
        startTime,
        endTime,
        meals: [],
        addMeal(meal) {
            this.meals.push(meal)
        },
        printMenu() {            
            let mealList = ""
            this.meals.forEach(meal => {
                mealList += "\n---  " + meal.name + "  ---"
            })
            return mealList
        }
    }
    return menuObject
}

export default createNewMenu