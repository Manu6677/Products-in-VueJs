import axiosClient from "../axiosClient";

export function search({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    
    commit("setSearch", data.meals);
  });
}
