import React from "react";
import { FavoriteButton } from "./SpeakerDetail.styled";

export const SpeakerDetail = ({
  id,
  firstName,
  lastName,
  bio,
  favorite,
  saturday,
  sunday,
  avatar,
  heartFavoriteHandler,
}) => {
  return (
    <div>
      <img
        width="128"
        height="128"
        src={avatar}
        alt={`${firstName} ${lastName}`}
      />
      <div>
        <p>{bio}</p>
        <div>
          Speaking:
          <ul>
            {saturday ? <li>Saturday</li> : ""}
            {sunday ? <li>Sunday</li> : ""}
          </ul>
        </div>
      </div>
      <FavoriteButton
        $favorite={favorite}
        onClick={(e) => heartFavoriteHandler(id, !favorite)}
      />
    </div>
  );
};
