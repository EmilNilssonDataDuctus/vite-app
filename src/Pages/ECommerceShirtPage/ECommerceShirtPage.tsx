import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { MainWrapper } from "../../Shared/Page.styled";
import { CustomButton, SectionContainer } from "./ECommerceShirtPage.styled";

export const ECommerceShirtPage = () => {
  let location = useLocation();
  console.log("location ", location);
  const [searchParams, setSearchParams] = useSearchParams();
  const color = searchParams.get("color") || "black";
  const size = searchParams.get("size") || "xl";
  console.log("setSearchParams: ", setSearchParams);

  // useEffect(() => {
  //   console.log("color or size has changed");
  //   setSearchParams(`?color=${color}&size=${size}`);
  // }, [color, size]);

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
          <ul>
            <li>
              <CustomButton
                onClick={() => updateSearchParams("color", "black")}
                $isActive={isActiveColor("black")}
              >
                Black
              </CustomButton>
            </li>
            <li>
              <CustomButton
                onClick={() => updateSearchParams("color", "white")}
                $isActive={isActiveColor("white")}
              >
                White
              </CustomButton>
            </li>
          </ul>
        </div>
        <div>
          <h3>Sizes</h3>
          <ul>
            <li>
              <CustomButton
                onClick={() => updateSearchParams("size", "xs")}
                $isActive={isActiveSize("xs")}
              >
                XS
              </CustomButton>
            </li>
            <li>
              <CustomButton
                onClick={() => updateSearchParams("size", "xl")}
                $isActive={isActiveSize("xl")}
              >
                XL
              </CustomButton>
            </li>
          </ul>
        </div>
      </SectionContainer>
    </MainWrapper>
  );
};
