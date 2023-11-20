import React, { useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";

function calculateLastDigit(inputNumbers) {
  console.log("inputNumbers");
  console.log(inputNumbers);

  // Filter out any zeroes from the inputNumbers
  const filterOutZeros = [...inputNumbers].filter((c) => c !== 0);
  console.log("filterOutZeros");
  console.log(filterOutZeros);

  // Perform Luhn-algorithm
  const reduced = [...filterOutZeros].reduce((accumulator, current, index) => {
    if (index % 2 === 1) return accumulator + parseInt(current, 10) * 2;
    return accumulator + parseInt(current, 10);
  }, 0);

  const mappedWAlgo = [...filterOutZeros].map((number, index) => {
    if (index % 2 === 0) {
      console.log("2 * " + number + " =");
      console.log(2 * number);
      const calculatedNumber = 2 * number;
      const stringgedNumber = calculatedNumber.toString();
      const stringgedNumberLength = stringgedNumber.length
      console.log("stringgedNumber.length");
      console.log(stringgedNumber.length);
      if (stringgedNumberLength > 1) {
        let news = stringgedNumber.split("")
        console.log("news");
        console.log(news);
        return news
      } else {
        return stringgedNumber
      }

      return 2 * number;
    } else {
      console.log("1 *", number);
      console.log(number);
      return number;
    }
  });
  console.log("mappedWAlgo");
  console.log(mappedWAlgo);
}

calculateLastDigit([9, 5, 0, 6, 0, 8, 2, 9, 1]);

export const PersonnummerCalc = () => {
  const [birthDate, setBirthDate] = useState<string>("1995-06-08-291");
  const [input, setInput] = useState();
  const [isValid, setIsValid] = useState(false);

  const handleDateChange = (e) => {
    setBirthDate(e.target.value);
  };

  const handleInputChange = (e) => {
    setBirthDate(e.target.value);
  };

  return (
    <MainWrapper>
      <h1>PersonnummerCalc</h1>
      <label>
        Your birth date
        <input
          type="date"
          value={birthDate}
          onChange={(e) => handleDateChange(e)}
        />
      </label>
      <label>
        Your 4 last digits
        <input
          type="number"
          max="9999"
          value={input}
          onChange={(e) => handleInputChange(e)}
        />
      </label>
      <p>
        The personnummer you have entered is{" "}
        <b>{isValid ? "valid" : "not valid"}</b>
      </p>
      <section>
        <h2>Calculations</h2>
        {birthDate && (
          <>
            {typeof birthDate}
            <br />
            {birthDate}
            <br />
            {typeof birthDate.split("-")}
            <br />
            {birthDate.split()}
            <br />
            Make array of birthdate numbers
            {birthDate.split("").map((c) => (
              <li key={Math.random()}>{c}</li>
            ))}
            <br />
            Filter out non numbers
            {birthDate
              .split("")
              .filter((c) => c !== "-")
              .map((c) => (
                <li key={Math.random()}>{c}</li>
              ))}
            <br />
            Filter out irrelevant numbers
            {birthDate
              .split("")
              .filter((c) => c !== "-")
              .filter((_, index) => index !== 0)
              .filter((_, index) => index !== 0)
              .map((c) => (
                <li key={Math.random()}>{c}</li>
              ))}
            <br />
            Add missing numbers
            {birthDate
              .split("")
              .filter((c) => c !== "-")
              .filter((_, index) => index !== 0)
              .filter((_, index) => index !== 0)
              .map((c) => (
                <li key={Math.random()}>{c}</li>
              ))}
            Simply add all digits
            <br />
            {birthDate
              .split("")
              .filter((c) => c !== "-")
              .filter((_, index) => index !== 0)
              .filter((_, index) => index !== 0)
              .reduce((accumulator, current, index) => {
                return accumulator + parseInt(current, 10);
              }, 0)}
            <br />
            Using the Luhn-algorithm
            <br />
            {birthDate
              .split("")
              .filter((c) => c !== "-")
              .filter((_, index) => index !== 0)
              .filter((_, index) => index !== 0)
              .reduce((accumulator, current, index) => {
                if (index % 2 === 1)
                  return accumulator + parseInt(current, 10) * 2;
                return accumulator + parseInt(current, 10);
              }, 0)}
            <br />
            {birthDate
              .split("")
              .filter((c) => c !== "-")
              .filter((_, index) => index !== 0)
              .filter((_, index) => index !== 0)
              .reduce((accumulator, current, index) => {
                if (index % 2 === 1)
                  return accumulator + parseInt(current, 10) * 2;
                return accumulator + parseInt(current, 10);
              }, 0)}
            <br />
          </>
        )}
      </section>
    </MainWrapper>
  );
};
