export function setSearch(state, productMeal) {
  state.searchedMeals = productMeal;
}

export function setSearchedNameOfCategoryPage(state, mealName) {
  state.searchedMealsForCategoryPage = mealName;
}

export function searchedMealsByLetter(state, mealLetter) {
    console.log(mealLetter)
  state.searchedMealsForCategoryPage = mealLetter;
}

export function searchedMealsByAction(state, mealCategory) {
    state.searchedMealsForCategoryPage = mealCategory;
}
