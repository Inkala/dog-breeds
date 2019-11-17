import React, { Component } from "react";

import breedsService from "../../services/breedsService";
import breedService from "../../services/breedsService";

import DogsChart from "../DogsChart/DogsChart";

class DogsList extends Component {
  state = {
    BreedsData: []
  };

  componentDidMount() {
    breedsService
      .getAllBreeds()
      .then(response => {
        const breedsArray = Object.keys(response.data.message);
        Promise.all(
          breedsArray.map(breed => {
            return breedService
              .getBreedImages(breed)
              .then(response => {
                return { name: breed, value: response.data.message.length };
              })
              .catch(error => {
                console.log(error);
              });
          })
        ).then(breedsArray => {
          const BreedsData = this.getPicturePercent(breedsArray);
          this.setState({ BreedsData });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getPicturePercent = breedsArray => {

    const totalImages = breedsArray
      .map(breed => Object.values(breed)[1])
      .reduce((amount, acc) => amount + acc);

    const newArray = breedsArray.map(breed => {
      breed.name = breed.name.charAt(0).toUpperCase() + breed.name.slice(1);
      breed.value = Number(((breed.value / totalImages) * 100).toFixed(2));
      return breed;
    });
    return newArray;
  };

  render() {
    const { BreedsData } = this.state;
    return (
      <section>
        <h1>Dogs Chart</h1>
        {BreedsData.length ? <DogsChart breeds={BreedsData} /> : null}
      </section>
    );
  }
}

export default DogsList;
