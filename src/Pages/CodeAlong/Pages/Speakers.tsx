import React, { useCallback, useContext, useEffect, useReducer, useState } from "react";

import { fetchSpeakers } from "../../../Shared/FetchSpeakers";
import { MainWrapper } from "../../../Shared/Page.styled";
import { ConfigContext } from "../../../main";
import { CodeAlongNav } from "../Components/CodeAlongNav";
import { SpeakerDetail } from "../Components/SpeakerDetail/SpeakerDetail";

export const CodeAlongSpeakers = () => {
  // const [speakers, setSpeakers] = useState<any>([]);

  const speakerReducer = (state, action) => {
    const updateFavorite = (favoriteValue) => {
      state.map((item, index) => {
        if (index === action.id) {
          item.favorite = favoriteValue;
        }
        return item;
      });
    };

    switch (action.type) {
      case "setSpeakerList":
        return action.data;

      case "favoriteSpeaker":
        return updateFavorite(true);

      case "unfavoriteSpeaker":
        return updateFavorite(false);

      default:
        return state;
    }
  };

  const [speakersWReducer, dispatch] = useReducer(speakerReducer, []);

  const [isLoading, setIsLoading] = useState(true);

  const [showSaturdaySpeakers, setShowSaturdaySpeakers] = useState(true);
  const [showSundaySpeakers, setShowSundaySpeakers] = useState(true);

  const context = useContext(ConfigContext);

  useEffect(() => {
    setIsLoading(true);

    const runAsyncInUseEffect = async () => {
      try {
        const speakers = await fetchSpeakers();
        setIsLoading(false);
        new Promise<void>(function (resolve) {
          setTimeout(function () {
            resolve();
          }, 1000);
        }).then(() => {
          // This then was empty by accident, now dispatch is called inside the then, as the setState function should have done from the start
          dispatch({
            type: "setSpeakerList",
            data: speakers,
          });
        });
      } catch (error) {
        console.error(error);
      }
    };
    runAsyncInUseEffect();

    return () => {
      console.log("cleanup");
    };
  }, []);

  const heartFavoriteHandler = useCallback((id, favoriteValue) => {
    dispatch({
      type: favoriteValue ? "favorite" : "unfavorite",
      id,
    });
  }, []);

  const handleSaturdayChange = () => {
    setShowSaturdaySpeakers(!showSaturdaySpeakers);
  };

  const handleSundayChange = () => {
    setShowSundaySpeakers(!showSundaySpeakers);
  };

  const speakerListFiltered = isLoading
    ? []
    : speakersWReducer.filter(
        ({ saturday, sunday }) =>
          (showSaturdaySpeakers && saturday) || (showSundaySpeakers && sunday)
      );

  return (
    <MainWrapper>
      <CodeAlongNav></CodeAlongNav>
      <h1>Speakers page</h1>
      {context.showSpeakerSpeakingDays === false ? null : (
        <>
          <label>
            <input
              type="checkbox"
              checked={showSaturdaySpeakers}
              onChange={handleSaturdayChange}
            />
            Saturday Speakers
          </label>
          <label>
            <input
              type="checkbox"
              checked={showSundaySpeakers}
              onChange={handleSundayChange}
            />
            Sunday Speakers
          </label>
        </>
      )}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {speakerListFiltered.map((speaker: any) => {
            return (
              <SpeakerDetail
                key={speaker.id}
                {...speaker}
                heartFavoriteHandler={heartFavoriteHandler}
              />
            );
          })}
        </ul>
      )}
    </MainWrapper>
  );
};
