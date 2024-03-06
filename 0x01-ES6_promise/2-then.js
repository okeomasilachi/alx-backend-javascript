function handleResponseFromAPI(promise) {
  promise
    /* eslint-disable-next-line no-unused-vars */
    .then((response) => {
      console.log('Got a response from the API'); // Log for each resolution
      return { status: 200, body: 'success' };
    })
    /* eslint-disable-next-line no-unused-vars */
    .catch((error) => {
      console.log('Got a response from the API'); // Log for each resolution
      return new Error(); // Return an empty Error object
    });
}

export default handleResponseFromAPI;
