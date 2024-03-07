import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise]);

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If an error occurs in either function, return an empty object
    console.error('An error occurred:', error);
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
