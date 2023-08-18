import { useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import { SectionContainer } from "./SpeedCalculator.styled";

export const SpeedCalculator = () => {
  const [outputArray, setOutputArray] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [defaultRuntime, setDefaultRuntime] = useState(60);
  const [updatedRuntime, setUpdatedRuntime] = useState(defaultRuntime);
  const speedTransformer = (originalRunTime, speedModifier) => {
    let transformedSpeed = 10;
    return transformedSpeed;
  };

  const speedTransformerDoubleSpeed = (originalRunTime) => {
    const SPEED_MODIFIER = 2;
    let transformedSpeed = originalRunTime / SPEED_MODIFIER;
    transformedSpeed = parseInt(transformedSpeed, 10);
    setUpdatedRuntime(transformedSpeed);
  };

  const speedTransformerOnePointFiveSpeed = (originalRunTime) => {
    const SPEED_MODIFIER = 1.5;
    let transformedSpeed = originalRunTime / SPEED_MODIFIER;
    transformedSpeed = parseInt(transformedSpeed, 10);
    setUpdatedRuntime(transformedSpeed);
  };

  const runFunctions = () => {
    // accept input
    let input = inputValue;

    // shortcircuit
    if (!input) return;

    // attempt to find number in input
    const inputToNumber = parseInt(input, 10);
    if (!isNaN(inputToNumber)) input = inputToNumber;

    // typecheck
    const typeOfInput = typeof input;
    input = `${input}<${typeOfInput}>`;

    // print to screen
    setOutputArray([input, ...outputArray]);
    setInputValue("");
  };

  // Naive approach
  const speedTransformerNaive = (originalRunTime, speedModifier = 1.5) => {
    let transformedSpeed = originalRunTime / speedModifier;
    return transformedSpeed;
  };

  const ONE_POINT_FIVE_SPEED = 1.5;

  return (
    <MainWrapper>
      <h1>Calculate how much time you save by speeding up a video</h1>
      <SectionContainer>
        <h2>My new demo</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <button onClick={() => runFunctions()}>Click to run function</button>
        <br />
        <ul className="outputcontainer">
          {outputArray.map((thing) => (
            <li>{thing}</li>
          ))}
        </ul>
      </SectionContainer>
      <SectionContainer>
        <h2>Demo 2x speed</h2>
        <p>Original runtime: {defaultRuntime}</p>
        <button onClick={() => speedTransformerDoubleSpeed(updatedRuntime)}>
          Speed up runtime by 2x speed
        </button>
        <p>Updated runtime: {updatedRuntime}</p>
      </SectionContainer>
      <SectionContainer>
        <h2>Demo {ONE_POINT_FIVE_SPEED}x speed</h2>
        <p>Original runtime: {defaultRuntime}</p>
        <button
          onClick={() => speedTransformerOnePointFiveSpeed(updatedRuntime)}
        >
          Speed up runtime by {ONE_POINT_FIVE_SPEED}x speed
        </button>
        <p>Updated runtime: {updatedRuntime}</p>
      </SectionContainer>
      <SectionContainer>
        <h2>Speed up video by 2x speed</h2>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>Runtime:</td>
              <td>1h:0min</td>
            </tr>
            <tr>
              <td>New runtime:</td>
              <td>0h:30min</td>
            </tr>
          </tbody>
        </table>
      </SectionContainer>
      <SectionContainer>
        <h2>Speed up naive</h2>
        <p>
          You would think that since doubling the speed of a video means half
          the watch time, that watching a video on 1.5x speed mean dividing the
          runtime by 1.5
        </p>
        <p>
          60min / 2 = 30min
          <br />
          Simple math: original runtime = 1h:00m {"=>"} 2x speed runtime =
          0h:30m{" "}
        </p>
        <p>Therfore:</p>
        <p>
          60min / 1.5 = 40min
          <br />
          Simple math: original runtime = 1h:00m {"=>"} 1.5x speed = 0h:40m{" "}
        </p>
        <p>
          But something should make your spidey sensen tingle when seeing this.
          How is it possible that the midway point between 1x speed and 2x speed
          is <strong>not</strong> the midpoint between original runtime 60min
          and double runtime 30min
        </p>
        <p>
          The devil is in the details. What we did wrong is simply dividing by
          speed when what we should've done in the first place is convert to
          fractions.
        </p>
        <p>
          When we double the speed what we are really doing is dividing the
          runtime by <sup>1</sup>&frasl;<sub>2</sub>
        </p>
      </SectionContainer>
      <SectionContainer>
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
      </SectionContainer>
    </MainWrapper>
  );
};
