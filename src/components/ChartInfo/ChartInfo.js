import React from "react";

import './ChartInfo.scss';

function ChartInfo(props) {
  console.log(props.breeds);

  const styles = {
    width: "10px",
    height: "10px",
    borderRadius: "50%"
  }

  return (
    <section id="chart-info">
      <ul>
        {props.breeds.length
          ? props.breeds.map(breed => (
          <li>
            <div style={{...styles, backgroundColor: breed.color}}></div>
            <span class="breed-name">{breed.name}:</span> {breed.value}%
          </li>
          ))
          : null}
      </ul>
    </section>
  );
}

export default ChartInfo;
