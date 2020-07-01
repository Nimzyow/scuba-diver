import React from "react";
import "./Box.scss";

export const Box = ({
  boxStyle,
  colorRow,
  rowNumber,
  letter,
  timeFigure,
  i,
}) => {
  switch (boxStyle) {
    case "letterBox":
      return (
        <div
          className={
            colorRow === `row${rowNumber}`
              ? "box letterStyle horizontalBorder"
              : "box letterStyle"
          }
        >
          {letter}
        </div>
      );
    case "letterBoxBlue":
      return (
        <div
          className={
            colorRow === `row${rowNumber}`
              ? "box letterStyle blue horizontalBorder"
              : "box letterStyle blue"
          }
        >
          {letter}
        </div>
      );
    case "emptyWhiteBoxBlackBorderNoClick":
      return <div className="emptyBox borderSet"></div>;
    case "WhiteBoxBlackBorderNoClick":
      return <div className="emptyBox borderSet">{timeFigure}</div>;
    case "BoxBlueBlackBorder":
      return (
        <div
          className={
            colorRow === `row${rowNumber}`
              ? "box blue horizontalBorder"
              : "box blue"
          }
        >
          {timeFigure}
        </div>
      );
    case "BoxBlackBorder":
      return (
        <div
          className={
            colorRow === `row${rowNumber}` ? "box horizontalBorder" : "box"
          }
        >
          {timeFigure}
        </div>
      );
    case "BoxGreyBlackBorder":
      return (
        <div
          className={
            colorRow === `row${rowNumber}`
              ? "box grey horizontalBorder"
              : "box grey"
          }
        >
          {timeFigure}
        </div>
      );
    default:
      break;
  }
};
