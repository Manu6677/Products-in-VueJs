import axiosClient from "../axiosClient";

export function search({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearch", data.meals);
  });
}

export function searchMealsByNameSection({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedNameOfCategoryPage", data.meals);
  });
}

export async function searchMealsByLetter({ commit }, keyword) {
  try {
    let data = await axiosClient.get(`search.php?f=${keyword}`);
    // console.log(data?.data?.meals);
    let res = data?.data?.meals;
    commit("searchedMealsByLetter", res);
  } catch (err) {}
}

export async function searchMealsByCategorySection({ commit }, keyword) {
  try {
    let data = await axiosClient.get(
      `filter.php?c=${keyword != "all" ? keyword : "Seafood"}`
    );
    let res = data?.data?.meals;
    commit("searchedMealsByAction", res);
  } catch (err) {}
}
