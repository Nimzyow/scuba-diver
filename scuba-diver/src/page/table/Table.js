import React, { useState, useEffect } from "react";
import { Box } from "../../components/box/Box";

import * as Row from "./rowFigures/RowFigures";

import "./Table.scss";

export const Table = () => {
  const [table, setTable] = useState([]);
  const [colorRow, setColorRow] = useState("");

  const highlightRow = () => {};

  const displayTable = (figures, boxStyle, rowNumber, start, finish) => {
    return figures.map((figure, index) => {
      if (index >= start && index <= finish) {
        return (
          <Box
            boxStyle={boxStyle}
            timeFigure={figure}
            rowNumber={rowNumber}
            colorRow={colorRow}
            setColorRow={(e) => setColorRow(e)}
          />
        );
      }
    });
  };

  return (
    <div className="tableContainer">
      <div className="row">
        <Box boxStyle="whiteBoxBlackBorderNoClick" />
        {displayTable(
          Row.DEPTH_FIGURES,
          "whiteBoxBlackBorderNoClick",
          0,
          0,
          11,
        )}
      </div>
      <div className="row">
        <Box boxStyle="letterBox" rowNumber={1} letter="A" />
        {displayTable(Row.FIRST_TIME_FIGURES, "blueBoxBlackBorder", 1, 0, 7)}
        {displayTable(Row.FIRST_TIME_FIGURES, "greyBoxBlackBorder", 1, 8, 11)}
      </div>
      <div className="row">
        <Box boxStyle="letterBox" rowNumber={2} letter="B" />
        {displayTable(Row.SECOND_TIME_FIGURES, "whiteBoxBlackBorder", 2, 0, 7)}
        {displayTable(Row.SECOND_TIME_FIGURES, "greyBoxBlackBorder", 2, 8, 11)}
      </div>
      <div className="row">
        <Box boxStyle="letterBox" rowNumber={3} letter="C" />
        {displayTable(Row.THIRD_TIME_FIGURES, "blueBoxBlackBorder", 3, 0, 7)}
        {displayTable(Row.THIRD_TIME_FIGURES, "greyBoxBlackBorder", 3, 8, 11)}
      </div>
      <div className="row">
        <Box boxStyle="letterBox" rowNumber={4} letter="D" />
        {displayTable(Row.FOURTH_TIME_FIGURES, "whiteBoxBlackBorder", 4, 0, 7)}
        {displayTable(Row.FOURTH_TIME_FIGURES, "greyBoxBlackBorder", 4, 8, 11)}
      </div>
      <div className="row">
        <Box boxStyle="letterBox" rowNumber={5} letter="E" />
        {displayTable(Row.FIFTH_TIME_FIGURES, "blueBoxBlackBorder", 5, 0, 7)}
        {displayTable(Row.FIFTH_TIME_FIGURES, "greyBoxBlackBorder", 5, 8, 11)}
      </div>
      <div className="row">
        <Box boxStyle="letterBox" rowNumber={6} letter="F" />
        {displayTable(Row.SIXTH_TIME_FIGURES, "whiteBoxBlackBorder", 6, 0, 7)}
        {displayTable(Row.SIXTH_TIME_FIGURES, "greyBoxBlackBorder", 6, 8, 10)}
        {displayTable(Row.SIXTH_TIME_FIGURES, "blackBoxBlackBorder", 6, 11, 11)}
      </div>
      <div className="row">
        <Box boxStyle="letterBox" rowNumber={7} letter="G" />
        {displayTable(Row.SEVENTH_TIME_FIGURES, "blueBoxBlackBorder", 7, 0, 7)}
        {displayTable(Row.SEVENTH_TIME_FIGURES, "greyBoxBlackBorder", 7, 8, 9)}
        {displayTable(
          Row.SEVENTH_TIME_FIGURES,
          "blackBoxBlackBorder",
          6,
          10,
          10,
        )}
      </div>
      <div className="row">
        <Box boxStyle="letterBox" rowNumber={8} letter="H" />
        {displayTable(Row.EIGHTH_TIME_FIGURES, "whiteBoxBlackBorder", 8, 0, 7)}
        {displayTable(Row.EIGHTH_TIME_FIGURES, "greyBoxBlackBorder", 8, 8, 9)}
      </div>
      <div className="row">
        <Box boxStyle="letterBox" rowNumber={9} letter="I" />
        {displayTable(Row.NINTH_TIME_FIGURES, "blueBoxBlackBorder", 9, 0, 7)}
        {displayTable(Row.NINTH_TIME_FIGURES, "greyBoxBlackBorder", 9, 8, 9)}
      </div>
      <div className="row">
        <Box boxStyle="letterBox" rowNumber={10} letter="J" />
        {displayTable(Row.TENTH_TIME_FIGURES, "whiteBoxBlackBorder", 10, 0, 7)}
        {displayTable(Row.TENTH_TIME_FIGURES, "greyBoxBlackBorder", 10, 8, 9)}
      </div>
      <div className="row">
        <Box boxStyle="letterBox" rowNumber={11} letter="K" />
        {displayTable(
          Row.ELEVENTH_TIME_FIGURES,
          "blueBoxBlackBorder",
          11,
          0,
          7,
        )}
        {displayTable(
          Row.ELEVENTH_TIME_FIGURES,
          "greyBoxBlackBorder",
          11,
          8,
          8,
        )}
        {displayTable(
          Row.ELEVENTH_TIME_FIGURES,
          "blackBoxBlackBorder",
          11,
          9,
          9,
        )}
      </div>
      <div className="row">
        <Box boxStyle="letterBox" rowNumber={12} letter="L" />
        {displayTable(Row.TWELTH_TIME_FIGURES, "whiteBoxBlackBorder", 12, 0, 7)}
        {displayTable(Row.TWELTH_TIME_FIGURES, "greyBoxBlackBorder", 12, 8, 9)}
      </div>
      <div className="row">
        <Box boxStyle="letterBox" rowNumber={13} letter="M" />
        {displayTable(
          Row.THIRTEENTH_TIME_FIGURES,
          "blueBoxBlackBorder",
          13,
          0,
          7,
        )}
        {displayTable(
          Row.THIRTEENTH_TIME_FIGURES,
          "greyBoxBlackBorder",
          13,
          8,
          9,
        )}
      </div>
      <div className="row">
        <Box boxStyle="letterBox" rowNumber={14} letter="N" />
        {displayTable(
          Row.FOURTEENTH_TIME_FIGURES,
          "whiteBoxBlackBorder",
          14,
          0,
          6,
        )}
        {displayTable(
          Row.FOURTEENTH_TIME_FIGURES,
          "greyBoxBlackBorder",
          14,
          7,
          7,
        )}
        {displayTable(
          Row.FOURTEENTH_TIME_FIGURES,
          "blackBoxBlackBorder",
          14,
          8,
          8,
        )}
      </div>
      <div className="row">
        <Box boxStyle="letterBox" rowNumber={15} letter="O" />
        {displayTable(
          Row.FIFTEENTH_TIME_FIGURES,
          "blueBoxBlackBorder",
          15,
          0,
          6,
        )}
        {displayTable(
          Row.FIFTEENTH_TIME_FIGURES,
          "greyBoxBlackBorder",
          15,
          7,
          7,
        )}
      </div>
      <div className="row">
        <Box boxStyle="letterBox" rowNumber={16} letter="P" />
        {displayTable(
          Row.SIXTEENTH_TIME_FIGURES,
          "whiteBoxBlackBorder",
          16,
          0,
          5,
        )}
        {displayTable(
          Row.SIXTEENTH_TIME_FIGURES,
          "greyBoxBlackBorder",
          16,
          6,
          7,
        )}
      </div>
      <div className="row">
        <Box boxStyle="letterBox" rowNumber={17} letter="Q" />
        {displayTable(
          Row.SEVENTEENTH_TIME_FIGURES,
          "blueBoxBlackBorder",
          17,
          0,
          5,
        )}
        {displayTable(
          Row.SEVENTEENTH_TIME_FIGURES,
          "greyBoxBlackBorder",
          17,
          6,
          6,
        )}
        {displayTable(
          Row.SEVENTEENTH_TIME_FIGURES,
          "blackBoxBlackBorder",
          17,
          7,
          7,
        )}
      </div>
      <div className="row">
        <Box boxStyle="letterBox" rowNumber={18} letter="R" />
        {displayTable(
          Row.EIGHTTEENTH_TIME_FIGURES,
          "whiteBoxBlackBorder",
          18,
          0,
          5,
        )}
        {displayTable(
          Row.EIGHTTEENTH_TIME_FIGURES,
          "greyBoxBlackBorder",
          18,
          6,
          7,
        )}
      </div>
      <div className="row">
        <Box boxStyle="letterBox" rowNumber={19} letter="S" />
        {displayTable(
          Row.NINETEENTH_TIME_FIGURES,
          "blueBoxBlackBorder",
          19,
          0,
          4,
        )}
        {displayTable(
          Row.NINETEENTH_TIME_FIGURES,
          "greyBoxBlackBorder",
          19,
          5,
          5,
        )}
        {displayTable(
          Row.NINETEENTH_TIME_FIGURES,
          "blackBoxBlackBorder",
          19,
          6,
          6,
        )}
      </div>
      <div className="row">
        <Box boxStyle="letterBox" rowNumber={20} letter="T" />
        {displayTable(Row.TWENTY_TIME_FIGURES, "whiteBoxBlackBorder", 20, 0, 3)}
        {displayTable(Row.TWENTY_TIME_FIGURES, "greyBoxBlackBorder", 20, 4, 6)}
      </div>
    </div>
  );
};
