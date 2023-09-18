import React, { useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";

const formatToSwedishSEK = (price) => {
  return new Intl.NumberFormat("sv-SE").format(price);
};

const prices = [
  {
    name: "ONE_MILLION",
    price: 1000000,
  },
  {
    name: "ONE_MILLION_ONE_HUNDRED_NINETYFIVE_THOUSAND",
    price: 1195000,
  },
  {
    name: "ONE_MILLION_FIVE_HUNDRED_SEVENTYFIVE_THOUSAND",
    price: 1575000,
  },
  {
    name: "ONE_MILLION_NINE_HUNDRED_NINETYFIVE_THOUSAND",
    price: 1995000,
  },
];

export const MoneyCalculator = () => {
  const [apartmentCost, setApartmentCost] = useState(
    prices.find(({ name }) => name === "ONE_MILLION")!.price
  );

  const handleApartmentCostChange = (e) => {
    setApartmentCost(parseInt(e.target.value, 10));
  };

  const handleClick = (price) => {
    setApartmentCost(price);
  };

  return (
    <MainWrapper>
      <h1>MoneyCalculator</h1>
      <section>
        <h2>Räkna ut kontantinsats</h2>
        <div>
          <h3>Change price quick</h3>
          {prices.map(({ name, price }) => (
            <p key={name}>
              <button onClick={() => handleClick(price)}>
                Change price to {formatToSwedishSEK(price)} kr
              </button>
            </p>
          ))}
        </div>
        <label>
          Pris för lägenhet{" "}
          <input
            style={{ width: "90px" }}
            type="range"
            min={500000}
            max={5000000}
            step={100000}
            value={apartmentCost}
            onChange={(e) => handleApartmentCostChange(e)}
          />{" "}
          kr
        </label>
        <br />
        <label>
          Pris för lägenhet{" "}
          <input
            style={{ width: "90px" }}
            type="number"
            step={10000}
            value={apartmentCost}
            onChange={(e) => handleApartmentCostChange(e)}
          />{" "}
          kr
        </label>

        <p>
          Pris:
          <br />
          {formatToSwedishSEK(apartmentCost)} kr
        </p>
        <p>
          Kontantinstats: 15%:
          <br />
          {formatToSwedishSEK(Math.ceil(apartmentCost * 0.15))} kr
        </p>
        <p>
          Handpenning: 10%:
          <br />
          {formatToSwedishSEK(Math.ceil(apartmentCost * 0.1))} kr
        </p>
      </section>
    </MainWrapper>
  );
};
