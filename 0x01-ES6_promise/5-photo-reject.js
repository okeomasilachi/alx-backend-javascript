export default function uploadPhoto(filename) {
  /* eslint-disable-next-line no-unused-vars */
  return new Promise((resolve, reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
}
