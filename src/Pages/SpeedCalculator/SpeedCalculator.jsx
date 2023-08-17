import { useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";

export const SpeedCalculator = () => {
  const [defaultRuntime, setDefaultRuntime] = useState(10);
  const speedTransformer = (originalRunTime, speedModifier) => {
    let transformedSpeed = 10;
    return transformedSpeed;
  };

  return (
    <MainWrapper>
      <h1>Calculate how much time you save by speeding up a video</h1>
      <section>
        <h2>Speed up video by 2x speed</h2>
        <div>
          <div>Runtime:</div>
          <div>1h:0min</div>
        </div>
        <div>
          <div>Runtime with bigger speed:</div>
          <div>0h:30min</div>
        </div>
      </section>
      <section>
        <h2>Speed up custom</h2>
        <div>
          <div>Runtime:</div>
          <div>
            <input
              type="number"
              value={defaultRuntime}
              onChange={(e) => setDefaultRuntime(e.target.value)}
            />
          </div>
          <div>1h:0min</div>
        </div>
        <div>
          <div>Runtime with bigger speed:</div>
          <div>0h:30min</div>
        </div>
      </section>
    </MainWrapper>
  );
};
