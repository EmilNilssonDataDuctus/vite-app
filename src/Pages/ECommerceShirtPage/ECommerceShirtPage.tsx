import React from "react";
import { useSearchParams } from "react-router-dom";
import { MainWrapper } from "../../Shared/Page.styled";
import {
  CustomButton,
  OptionList,
  OptionListItem,
  SectionContainer,
} from "./ECommerceShirtPage.styled";

const colors = ["black", "white", "green", "red", "blue"];
const sizes = ["xs", "medium", "xl"];

// Returns either string or undefined
const findIn = (value, array) => array.find((entry) => entry === value);

export const ECommerceShirtPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const color = findIn(searchParams.get("color"), colors) || colors[0];
  const size = findIn(searchParams.get("size"), sizes) || sizes[0];

  const isActiveColor = (colorOfButton) => color === colorOfButton;
  const isActiveSize = (sizeOfButton) => size === sizeOfButton;

  const updateSearchParams = (key, value) => {
    const oldValues = Object.fromEntries(searchParams.entries());
    setSearchParams({
      ...oldValues,
      [key]: [value],
    });
  };

  return (
    <MainWrapper>
      <h1>Buy our shirts</h1>
      <SectionContainer>
        <h2>Shirt name</h2>
        <img src="" alt="Shirt for sale" />
        <span>$20.00 USD</span>
        <div>
          <h3>Color</h3>
          <OptionList style={{ display: "flex" }}>
            {colors.map((color) => (
              <OptionListItem key={color} style={{ display: "flex" }}>
                <CustomButton
                  onClick={() => updateSearchParams("color", color)}
                  $isActive={isActiveColor(color)}
                >
                  {color}
                </CustomButton>
              </OptionListItem>
            ))}
          </OptionList>
        </div>
        <div>
          <h3>Sizes</h3>
          <OptionList>
            {sizes.map((size) => (
              <OptionListItem key={size}>
                <CustomButton
                  onClick={() => updateSearchParams("size", size)}
                  $isActive={isActiveSize(size)}
                >
                  {size.toUpperCase()}
                </CustomButton>
              </OptionListItem>
            ))}
          </OptionList>
        </div>
      </SectionContainer>
    </MainWrapper>
  );
};
