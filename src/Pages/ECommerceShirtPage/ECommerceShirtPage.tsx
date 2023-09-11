import React from "react"
import { MainWrapper } from "../../Shared/Page.styled"

export const ECommerceShirtPage = () => {

  return (
    <MainWrapper>
      <h1>Buy our shirts</h1>
      <section>
        <h2>Shirt name</h2>
        <img src="" alt="Shirt for sale" />
        <span>$20.00 USD</span>
        <div>
          <h3>Color</h3>
          <ul>
            <li>Black</li>
            <li>White</li>
          </ul>
        </div>
        <div>
          <h3>Sizes</h3>
          <ul>
            <li>XS</li>
            <li>XL</li>
          </ul>
        </div>
      </section>
    </MainWrapper>
  )
}