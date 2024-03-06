import handleResponseFromAPI from "./2-then";

const promise2 = Promise.reject();
handleResponseFromAPI(promise2);