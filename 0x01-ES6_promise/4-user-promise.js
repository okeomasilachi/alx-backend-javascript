export default function signUpUser(firstName, lastName) => {
  new Promise((resolve) => {
    return resolve({ firstName, lastName });
  });
}
