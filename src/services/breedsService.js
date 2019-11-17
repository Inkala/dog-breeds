import axios from 'axios';

class BreedService {
  constructor() {
    this.breeds = axios.create({
      baseURL: 'https://dog.ceo/api/'
    });
  }

  getAllBreeds() {
    return this.breeds.get('breeds/list/all').then(response => {
      return response;
    });
  }

  getBreedImages(breed) {
    return this.breeds.get(`breed/${breed}/images`).then(response => response);
  }
}

const breedService = new BreedService();

export default breedService;
