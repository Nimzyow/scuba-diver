import React from "react";
import "./Box.scss";

export const Box = ({
  boxStyle,
  colorRow,
  rowNumber,
  letter,
  timeFigure,
  setColorRow,
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
    case "whiteBoxBlackBorderNoClick":
      return <div className="emptyBox borderSet">{timeFigure}</div>;
    case "blueBoxBlackBorder":
      return (
        <div
          className={
            colorRow === `row${rowNumber}`
              ? "box blue horizontalBorder"
              : "box blue"
          }
          onClick={() => setColorRow(`row${rowNumber}`)}
        >
          {timeFigure}
        </div>
      );
    case "whiteBoxBlackBorder":
      return (
        <div
          className={
            colorRow === `row${rowNumber}` ? "box horizontalBorder" : "box"
          }
          onClick={() => setColorRow(`row${rowNumber}`)}
        >
          {timeFigure}
        </div>
      );
    case "greyBoxBlackBorder":
      return (
        <div
          className={
            colorRow === `row${rowNumber}`
              ? "box grey horizontalBorder"
              : "box grey"
          }
          onClick={() => setColorRow(`row${rowNumber}`)}
        >
          {timeFigure}
        </div>
      );
    case "blackBoxBlackBorder":
      return (
        <div
          className={
            colorRow === `row${rowNumber}`
              ? "box black horizontalBorder"
              : "box black"
          }
          onClick={() => setColorRow(`row${rowNumber}`)}
        >
          {timeFigure}
        </div>
      );
    default:
      break;
  }
};
