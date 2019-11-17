import React, { Component } from "react";

import breedsService from "../../services/breedsService";
import breedService from "../../services/breedsService";

class DogsList extends Component {
  state = {
    breedsArray: [],
    totalImages: 0
  };

  componentDidMount() {
    const breedsArray = [];
    breedsService
      .getAllBreeds()
      .then(response => {
        const breedsList = Object.keys(response.data.message);
        Promise.all(
          breedsList.map(breed => {
            return breedService
              .getBreedImages(breed)
              .then(response => {
                breedsArray.push({ [breed]: response.data.message.length });
              })
              .catch(error => {
                console.log(error);
              });
          })
        ).then(() => {
          const totalImages = breedsArray
            .map(breed => Object.values(breed)[0])
            .reduce((amount, acc) => amount + acc);
          this.setState({ breedsArray, totalImages });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  render() {
    let { breedsArray, totalImages } = this.state;
    let breedList = breedsArray.map(breed => {
      const breedName = Object.keys(breed)[0];
      const breedPercentage = ((breed[breedName] / totalImages) * 100).toFixed(
        2
      );
      return (
        <p key={breedName}>
          {breedName}: {breedPercentage}
        </p>
      );
    });

    return (
      <section>
        <h1>breeds</h1>
        {breedList}
      </section>
    );
  }
}

export default DogsList;
