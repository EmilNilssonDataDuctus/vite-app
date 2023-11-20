import React from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import "./GridAnimation.css";

export const GridAnimation = () => {
  return (
    <MainWrapper>
      <h1>GridAnimation</h1>
      <section className="kevin">
        <h2>Challenge</h2>
        <div className="k-grid-container">
          <div className="k-grid-box k-grid-box-1">
            <header>
              <img width="50" height="50" />
              <div>
                <div>Emma Watson</div>
                <div>UX/UI</div>
              </div>
            </header>
            <section>
              <h3>Lorem ipsum dolor sit amet </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus, blanditiis! Nesciunt iusto numquam voluptate
                accusamus repellendus, adipisci ex quia! Adipisci.
              </p>
            </section>
          </div>
          <div className="k-grid-box k-grid-box-2">
            <header>
              <img width="50" height="50" />
              <div>
                <div>Emma Watson</div>
                <div>UX/UI</div>
              </div>
            </header>
            <section>
              <h3>Lorem ipsum dolor sit amet </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus, blanditiis! Nesciunt iusto numquam voluptate
                accusamus repellendus, adipisci ex quia! Adipisci.
              </p>
            </section>
          </div>
          <div className="k-grid-box k-grid-box-3">
            <header>
              <img width="50" height="50" />
              <div>
                <div>Emma Watson</div>
                <div>UX/UI</div>
              </div>
            </header>
            <section>
              <h3>Lorem ipsum dolor sit amet </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus, blanditiis! Nesciunt iusto numquam voluptate
                accusamus repellendus, adipisci ex quia! Adipisci.
              </p>
            </section>
          </div>
        </div>
      </section>
      <section className="kevin">
        <h2>Playing</h2>
        <div className="grid">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </section>
    </MainWrapper>
  );
};
