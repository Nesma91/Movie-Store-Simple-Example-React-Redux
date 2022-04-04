import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SetStar from "../Store/Actions/StarAction";
import BTButton from "./Button";

export default function FavouriteSwitch() {
  const favourite = useSelector((state) => state.star.currentStar);
  const dispatch = useDispatch();
  const addFavourite = () => {
    dispatch(SetStar(favourite === 0 ? 1 : 0));
  };
  return (
    <div>
      FavouriteSwitch
      <h4>Current Star Movie: {favourite}</h4>
      <BTButton handleClick={addFavourite} name="Add Favourite" />
    </div>
  );
}
