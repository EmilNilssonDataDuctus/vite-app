import React from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import {
  MyBox,
  MyBox2,
  MyBox3,
  MyBox4,
  MyBox5,
  MyContainer,
  MyContainer2,
  MyContainer3,
  MyContainer4,
  MyContainer5,
  MyContainerWrapper,
  MyH3,
} from "./FlexBoxTest.styled";

export const FlexBoxTest = () => {
  return (
    <MainWrapper>
      <h1>Flexbox testing</h1>
      <section>
        <h2>Case 1</h2>
        <MyContainerWrapper>
          <MyH3>
            <pre>{`
justify-content: center;  
            `}</pre>
          </MyH3>
          <Case1 />
        </MyContainerWrapper>
      </section>
      <section>
        <h2>Case 2</h2>
        <MyContainerWrapper>
          <MyH3>
            <pre>{`
justify-content: center;  
            `}</pre>
          </MyH3>
          <Case2 />
        </MyContainerWrapper>
      </section>
      <section>
        <h2>Case 3</h2>
        <MyContainerWrapper>
          <MyH3 style={{ textAlign: "center" }}>
            <pre>{`
justify-content: center;  
            `}</pre>
          </MyH3>
          <Case3 />
        </MyContainerWrapper>
      </section>
      <section>
        <h2>Case 4</h2>
        <MyContainerWrapper>
          <MyH3>
            <pre>{`
justify-content: center;  
            `}</pre>
          </MyH3>
          <Case4 />
        </MyContainerWrapper>
      </section>
      <section>
        <h2>Case 5</h2>
        <MyContainerWrapper>
          <MyH3>
            <pre>{`
justify-content: center;  
            `}</pre>
          </MyH3>
          <Case5 />
        </MyContainerWrapper>
      </section>
    </MainWrapper>
  );
};

const Case1 = () => (
  <MyContainer>
    <MyBox>
      <pre>{`
&:first-child {
  margin-right: auto;
}
`}</pre>
    </MyBox>
    <MyBox>
      <pre>{`

`}</pre>
    </MyBox>
    <MyBox>
      <pre>{`

`}</pre>
    </MyBox>
    <MyBox>
      <pre>{`
&:last-child {
  margin-left: auto;
}
`}</pre>
    </MyBox>
  </MyContainer>
);

const Case2 = () => (
  <MyContainer2>
    <MyBox2>
      <pre>{`

`}</pre>
    </MyBox2>
    <MyBox2>
      <pre>{`

`}</pre>
    </MyBox2>
    <MyBox2>
      <pre>{`

`}</pre>
    </MyBox2>
    <MyBox2>
      <pre>{`

`}</pre>
    </MyBox2>
  </MyContainer2>
);

const Case3 = () => (
  <MyContainer3>
    <MyBox3>
      <pre>{`
&:first-child {
  margin-right: auto;
}
`}</pre>
    </MyBox3>
    <MyBox3>
      <pre>{`

`}</pre>
    </MyBox3>
    <MyBox3>
      <pre>{`
&:nth-child(3) {
  margin-left: auto;
}
`}</pre>
    </MyBox3>
    <MyBox3>
      <pre>{`

`}</pre>
    </MyBox3>
  </MyContainer3>
);

const Case4 = () => (
  <MyContainer4>
    <MyBox4>
      <pre>{`
&:first-child {
  margin-right: auto;
}
`}</pre>
    </MyBox4>
    <MyBox4>
      <pre>{`

`}</pre>
    </MyBox4>
    <MyBox4>
      <pre>{`

`}</pre>
    </MyBox4>
    <MyBox4>
      <pre>{`
&:last-child {
  margin-right: auto;
}
`}</pre>
    </MyBox4>
  </MyContainer4>
);

const Case5 = () => (
  <MyContainer5>
    <MyBox5>
      <pre>{`
&:first-child {
  margin-right: auto;
}
`}</pre>
    </MyBox5>
    <MyBox5>
      <pre>{`

`}</pre>
    </MyBox5>
    <MyBox5>
      <pre>{`

`}</pre>
    </MyBox5>
    <MyBox5>
      <pre>{`

`}</pre>
    </MyBox5>
  </MyContainer5>
);
