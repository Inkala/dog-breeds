import React, { Component } from "react";
import randomColor from "randomcolor";

import breedsService from "../../services/breedsService";
import DogsChart from "../DogsChart/DogsChart";
import ChartInfo from "../ChartInfo/ChartInfo";

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
            return breedsService
              .getBreedImages(breed)
              .then(response => {
                const color = randomColor();
                const ammount = response.data.message.length;
                return { name: breed, value: ammount, color };
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

  // Get total ammout of pictures to calculate percentage
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
      <main>
        {BreedsData.length ? <DogsChart breeds={BreedsData} /> : null}
        <ChartInfo breeds={BreedsData}></ChartInfo>
      </main>
    );
  }
}

export default DogsList;
