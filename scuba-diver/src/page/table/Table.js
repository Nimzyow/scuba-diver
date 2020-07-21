import React, { useState, useEffect } from "react";
import { Box } from "../../components/box/Box";

import * as Row from "./rowFigures/RowFigures";

import "./Table.scss";

export const Table = () => {
  const TABLE_ARRAY = [];
  let keyValue = 0;
  useEffect(() => {
    for (let i = 0; i < 28; i++) {
      TABLE_ARRAY.push([]);
    }
    setRow();
  }, []);

  const [table, setTable] = useState([]);
  const [colorRow, setColorRow] = useState("");

  useEffect(() => {
    console.log("how?");

    //displayTable();
  }, [colorRow]);

  const rowSelect = (rowPosition) => {
    console.log("row position ", rowPosition);
    setColorRow(`row${rowPosition}`);
  };

  const setBox = (iterations, rowPosition, style, timeFigures, start = 0) => {
    for (let i = start; i < iterations; i++) {
      if (timeFigures) {
        TABLE_ARRAY[rowPosition].push(
          <Box
            key={keyValue}
            boxStyle={style}
            colorRow={colorRow}
            rowNumber={rowPosition}
            timeFigure={timeFigures[i]}
          />,
        );
        keyValue++;
      } else {
        TABLE_ARRAY[rowPosition].push(<Box key={keyValue} boxStyle={style} />);
        keyValue++;
      }
    }
  };

  const setRow = () => {
    setRow0();
    setRow1();
    //setRow27();
    setTable(TABLE_ARRAY);
    //displayTable();
  };

  const setLetter = (letter, rowPosition, style) => {
    TABLE_ARRAY[rowPosition].push(
      <Box
        key={keyValue}
        boxStyle={style}
        letter={letter}
        colorRow={colorRow}
        rowNumber={rowPosition}
      />,
    );
    keyValue++;
  };

  const setRow0 = () => {
    setBox(1, 0, "emptyWhiteBoxBlackBorderNoClick");
    setBox(12, 0, "WhiteBoxBlackBorderNoClick", Row.DEPTH_FIGURES);
  };

  const setRow1 = () => {
    let rowNumber = 1;
    //setLetter("A", rowNumber, "box letterStyle", 0);
    // TABLE_ARRAY[rowNumber].push(
    //   <Box
    //     boxStyle="letterBox"
    //     letter="A"
    //     colorRow={colorRow}
    //     rowNumber={rowNumber}
    //   />,
    // );
    setLetter("A", rowNumber, "letterBoxBlue");
    setBox(8, rowNumber, "BoxBlueBlackBorder", Row.FIRST_TIME_FIGURES);
    //setBox(12, rowNumber, "box grey", Row.FIRST_TIME_FIGURES, 8);
    //setBox(26, rowNumber, "emptyBox blue emptyBoxBorderBlue", undefined, 12);
    //setLetter("A", rowNumber, "emptyBox borderSet letterStyle blue", 1);
    //setBox(27, rowNumber, "emptyBox blue emptyBoxBorderBlue", undefined, 26);
    //setBox(29, rowNumber, "box surfaceInterval", Row.A_SURFACE_INTERVAL, 28);
    //setBox(30, rowNumber, "emptyBox blue emptyBoxBorderBlue", undefined, 31);
    rowNumber += 1;
    //setRow2(rowNumber);
  };

  const setRow2 = (rowNumber) => {
    setLetter("B", rowNumber, "box letterStyle");
    setBox(8, rowNumber, "box", Row.SECOND_TIME_FIGURES);
    setBox(12, rowNumber, "box grey", Row.SECOND_TIME_FIGURES, 8);
    setBox(13, rowNumber, "emptyBox emptyBoxBorderWhite");
    setLetter("B", rowNumber, "emptyBox borderSet letterStyle");
    setBox(1, rowNumber, "emptyBox emptyBoxBorderWhite");
    setBox(2, rowNumber, "box surfaceInterval", Row.B_SURFACE_INTERVAL);
    rowNumber += 1;
    setRow3(rowNumber);
  };

  const setRow3 = (rowNumber) => {
    setLetter("C", rowNumber, "box letterStyle");
    setBox(8, rowNumber, "box blue", Row.THIRD_TIME_FIGURES);
    setBox(12, rowNumber, "box grey", Row.THIRD_TIME_FIGURES, 8);
    setBox(12, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    setLetter("C", rowNumber, "emptyBox borderSet letterStyle blue");
    setBox(1, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    setBox(3, rowNumber, "box surfaceInterval", Row.C_SURFACE_INTERVAL);
    setBox(1, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    rowNumber += 1;
    setRow4(rowNumber);
  };

  const setRow4 = (rowNumber) => {
    setLetter("D", rowNumber, "box letterStyle");
    setBox(8, rowNumber, "box", Row.FOURTH_TIME_FIGURES);
    setBox(12, rowNumber, "box grey", Row.FOURTH_TIME_FIGURES, 8);
    setBox(11, rowNumber, "emptyBox emptyBoxBorderWhite");
    setLetter("D", rowNumber, "emptyBox borderSet letterStyle");
    setBox(1, rowNumber, "emptyBox emptyBoxBorderWhite");
    setBox(4, rowNumber, "box surfaceInterval", Row.D_SURFACE_INTERVAL);
    rowNumber += 1;
    setRow5(rowNumber);
  };

  const setRow5 = (rowNumber) => {
    setLetter("E", rowNumber, "box letterStyle");
    setBox(8, rowNumber, "box blue", Row.FIFTH_TIME_FIGURES);
    setBox(12, rowNumber, "box grey", Row.FIFTH_TIME_FIGURES, 8);
    setBox(10, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    setLetter("E", rowNumber, "emptyBox borderSet letterStyle blue");
    setBox(1, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    setBox(5, rowNumber, "box surfaceInterval", Row.E_SURFACE_INTERVAL);
    setBox(1, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    rowNumber += 1;
    setRow6(rowNumber);
  };

  const setRow6 = (rowNumber) => {
    setLetter("F", rowNumber, "box letterStyle");
    setBox(8, rowNumber, "box", Row.SIXTH_TIME_FIGURES);
    setBox(11, rowNumber, "box grey", Row.SIXTH_TIME_FIGURES, 8);
    setBox(12, rowNumber, "box black", Row.SIXTH_TIME_FIGURES, 11);
    setBox(9, rowNumber, "emptyBox emptyBoxBorderWhite");
    setLetter("F", rowNumber, "emptyBox borderSet letterStyle");
    setBox(1, rowNumber, "emptyBox emptyBoxBorderWhite");
    setBox(6, rowNumber, "box surfaceInterval", Row.F_SURFACE_INTERVAL);
    rowNumber += 1;
    setRow7(rowNumber);
  };

  const setRow7 = (rowNumber) => {
    setLetter("G", rowNumber, "box letterStyle");
    setBox(8, rowNumber, "box blue", Row.SEVENTH_TIME_FIGURES);
    setBox(10, rowNumber, "box grey", Row.SEVENTH_TIME_FIGURES, 8);
    setBox(11, rowNumber, "box black", Row.SEVENTH_TIME_FIGURES, 10);
    setBox(9, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    setLetter("G", rowNumber, "emptyBox borderSet letterStyle blue");
    setBox(1, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    setBox(7, rowNumber, "box surfaceInterval", Row.G_SURFACE_INTERVAL);
    setBox(1, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    rowNumber += 1;
    setRow8(rowNumber);
  };

  const setRow8 = (rowNumber) => {
    setLetter("H", rowNumber, "box letterStyle");
    setBox(8, rowNumber, "box", Row.EIGHTH_TIME_FIGURES);
    setBox(10, rowNumber, "box grey", Row.EIGHTH_TIME_FIGURES, 8);
    setBox(9, rowNumber, "emptyBox emptyBoxBorderWhite");
    setLetter("H", rowNumber, "emptyBox borderSet letterStyle");
    setBox(1, rowNumber, "emptyBox emptyBoxBorderWhite");
    setBox(8, rowNumber, "box surfaceInterval", Row.H_SURFACE_INTERVAL);
    rowNumber += 1;
    setRow9(rowNumber);
  };

  const setRow9 = (rowNumber) => {
    setLetter("I", rowNumber, "box letterStyle");
    setBox(8, rowNumber, "box blue", Row.NINTH_TIME_FIGURES);
    setBox(10, rowNumber, "box grey", Row.NINTH_TIME_FIGURES, 8);
    setBox(8, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    setLetter("I", rowNumber, "emptyBox borderSet letterStyle blue");
    setBox(1, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    setBox(9, rowNumber, "box surfaceInterval", Row.I_SURFACE_INTERVAL);
    setBox(1, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    rowNumber += 1;
    setRow10(rowNumber);
  };

  const setRow10 = (rowNumber) => {
    setLetter("J", rowNumber, "box letterStyle");
    setBox(8, rowNumber, "box", Row.TENTH_TIME_FIGURES);
    setBox(10, rowNumber, "box grey", Row.TENTH_TIME_FIGURES, 8);
    setBox(7, rowNumber, "emptyBox emptyBoxBorderWhite");
    setLetter("J", rowNumber, "emptyBox borderSet letterStyle");
    setBox(1, rowNumber, "emptyBox emptyBoxBorderWhite");
    setBox(10, rowNumber, "box surfaceInterval", Row.J_SURFACE_INTERVAL);
    rowNumber += 1;
    setRow11(rowNumber);
  };

  const setRow11 = (rowNumber) => {
    setLetter("K", rowNumber, "box letterStyle");
    setBox(8, rowNumber, "box blue", Row.ELEVENTH_TIME_FIGURES);
    setBox(9, rowNumber, "box grey", Row.ELEVENTH_TIME_FIGURES, 8);
    setBox(10, rowNumber, "box black", Row.ELEVENTH_TIME_FIGURES, 9);
    setBox(6, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    setLetter("K", rowNumber, "emptyBox borderSet letterStyle blue");
    setBox(1, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    setBox(11, rowNumber, "box surfaceInterval", Row.K_SURFACE_INTERVAL);
    setBox(1, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    rowNumber += 1;
    setRow12(rowNumber);
  };

  const setRow12 = (rowNumber) => {
    setLetter("L", rowNumber, "box letterStyle");
    setBox(8, rowNumber, "box", Row.TWELTH_TIME_FIGURES);
    setBox(9, rowNumber, "box grey", Row.TWELTH_TIME_FIGURES, 8);
    setBox(6, rowNumber, "emptyBox emptyBoxBorderWhite");
    setLetter("L", rowNumber, "emptyBox borderSet letterStyle ");
    setBox(1, rowNumber, "emptyBox emptyBoxBorderWhite");
    setBox(12, rowNumber, "box surfaceInterval", Row.L_SURFACE_INTERVAL);
    rowNumber += 1;
    setRow13(rowNumber);
  };

  const setRow13 = (rowNumber) => {
    setLetter("M", rowNumber, "box letterStyle");
    setBox(8, rowNumber, "box blue", Row.THIRTEENTH_TIME_FIGURES);
    setBox(9, rowNumber, "box grey", Row.THIRTEENTH_TIME_FIGURES, 8);
    setBox(5, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    setLetter("M", rowNumber, "emptyBox borderSet letterStyle blue");
    setBox(1, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    setBox(13, rowNumber, "box surfaceInterval", Row.M_SURFACE_INTERVAL);
    setBox(1, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    rowNumber += 1;
    setRow14(rowNumber);
  };

  const setRow14 = (rowNumber) => {
    setLetter("N", rowNumber, "box letterStyle");
    setBox(7, rowNumber, "box", Row.FOURTEENTH_TIME_FIGURES);
    setBox(8, rowNumber, "box grey", Row.FOURTEENTH_TIME_FIGURES, 7);
    setBox(9, rowNumber, "box black", Row.FOURTEENTH_TIME_FIGURES, 8);
    setBox(4, rowNumber, "emptyBox emptyBoxBorderWhite");
    setLetter("N", rowNumber, "emptyBox borderSet letterStyle ");
    setBox(1, rowNumber, "emptyBox emptyBoxBorderWhite");
    setBox(14, rowNumber, "box surfaceInterval", Row.N_SURFACE_INTERVAL);
    rowNumber += 1;
    setRow15(rowNumber);
  };

  const setRow15 = (rowNumber) => {
    setLetter("O", rowNumber, "box letterStyle");
    setBox(7, rowNumber, "box blue", Row.FIFTEENTH_TIME_FIGURES);
    setBox(8, rowNumber, "box grey", Row.FIFTEENTH_TIME_FIGURES, 7);
    setBox(4, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    setLetter("O", rowNumber, "emptyBox borderSet letterStyle blue");
    setBox(1, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    setBox(15, rowNumber, "box surfaceInterval", Row.O_SURFACE_INTERVAL);
    setBox(1, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    rowNumber += 1;
    setRow16(rowNumber);
  };

  const setRow16 = (rowNumber) => {
    setLetter("P", rowNumber, "box letterStyle");
    setBox(7, rowNumber, "box", Row.SIXTEENTH_TIME_FIGURES);
    setBox(8, rowNumber, "box grey", Row.SIXTEENTH_TIME_FIGURES, 7);
    setBox(3, rowNumber, "emptyBox emptyBoxBorderWhite");
    setLetter("P", rowNumber, "emptyBox borderSet letterStyle ");
    setBox(1, rowNumber, "emptyBox emptyBoxBorderWhite");
    setBox(16, rowNumber, "box surfaceInterval", Row.P_SURFACE_INTERVAL);
    rowNumber += 1;
    setRow17(rowNumber);
  };

  const setRow17 = (rowNumber) => {
    setLetter("Q", rowNumber, "box letterStyle");
    setBox(6, rowNumber, "box blue", Row.SEVENTEENTH_TIME_FIGURES);
    setBox(7, rowNumber, "box grey", Row.SEVENTEENTH_TIME_FIGURES, 6);
    setBox(8, rowNumber, "box black", Row.SEVENTEENTH_TIME_FIGURES, 7);
    setBox(2, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    setLetter("Q", rowNumber, "emptyBox borderSet letterStyle blue");
    setBox(1, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    setBox(17, rowNumber, "box surfaceInterval", Row.Q_SURFACE_INTERVAL);
    setBox(1, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    rowNumber += 1;
    setRow18(rowNumber);
  };

  const setRow18 = (rowNumber) => {
    setLetter("R", rowNumber, "box letterStyle");
    setBox(5, rowNumber, "box", Row.EIGHTTEENTH_TIME_FIGURES);
    setBox(7, rowNumber, "box grey", Row.EIGHTTEENTH_TIME_FIGURES, 5);
    setBox(2, rowNumber, "emptyBox emptyBoxBorderWhite");
    setLetter("R", rowNumber, "emptyBox borderSet letterStyle ");
    setBox(1, rowNumber, "emptyBox emptyBoxBorderWhite");
    setBox(18, rowNumber, "box surfaceInterval", Row.R_SURFACE_INTERVAL);
    rowNumber += 1;
    setRow19(rowNumber);
  };

  const setRow19 = (rowNumber) => {
    setLetter("S", rowNumber, "box letterStyle");
    setBox(5, rowNumber, "box blue", Row.NINETEENTH_TIME_FIGURES);
    setBox(6, rowNumber, "box grey", Row.NINETEENTH_TIME_FIGURES, 5);
    setBox(7, rowNumber, "box black", Row.NINETEENTH_TIME_FIGURES, 6);
    setBox(2, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    setLetter("S", rowNumber, "emptyBox borderSet letterStyle blue");
    setBox(19, rowNumber, "box surfaceInterval", Row.S_SURFACE_INTERVAL);
    setBox(1, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    rowNumber += 1;
    setRow20(rowNumber);
  };

  const setRow20 = (rowNumber) => {
    setLetter("T", rowNumber, "box letterStyle");
    setBox(4, rowNumber, "box", Row.TWENTY_TIME_FIGURES);
    setBox(6, rowNumber, "box grey", Row.TWENTY_TIME_FIGURES, 4);
    setBox(2, rowNumber, "emptyBox emptyBoxBorderWhite");
    setLetter("T", rowNumber, "emptyBox borderSet letterStyle");
    setBox(20, rowNumber, "box surfaceInterval", Row.T_SURFACE_INTERVAL);
    rowNumber += 1;
    setRow21(rowNumber);
  };

  const setRow21 = (rowNumber) => {
    setLetter("U", rowNumber, "box letterStyle");
    setBox(3, rowNumber, "box blue", Row.TWENTYONE_TIME_FIGURES);
    setBox(5, rowNumber, "box grey", Row.TWENTYONE_TIME_FIGURES, 3);
    setBox(6, rowNumber, "box black", Row.TWENTYONE_TIME_FIGURES, 5);
    setBox(1, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    setLetter("U", rowNumber, "emptyBox borderSet letterStyle blue");
    setBox(21, rowNumber, "box surfaceInterval", Row.U_SURFACE_INTERVAL);
    setBox(1, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    rowNumber += 1;
    setRow22(rowNumber);
  };

  const setRow22 = (rowNumber) => {
    setLetter("V", rowNumber, "box letterStyle");
    setBox(2, rowNumber, "box", Row.TWENTYTWO_TIME_FIGURES);
    setBox(5, rowNumber, "box grey", Row.TWENTYTWO_TIME_FIGURES, 2);
    setBox(1, rowNumber, "emptyBox emptyBoxBorderWhite");
    setLetter("V", rowNumber, "emptyBox borderSet letterStyle");
    setBox(22, rowNumber, "box surfaceInterval", Row.V_SURFACE_INTERVAL);
    rowNumber += 1;
    setRow23(rowNumber);
  };

  const setRow23 = (rowNumber) => {
    setLetter("W", rowNumber, "box letterStyle");
    setBox(4, rowNumber, "box grey", Row.TWENTYTHREE_TIME_FIGURES);
    setBox(5, rowNumber, "box black", Row.TWENTYTHREE_TIME_FIGURES, 4);
    setLetter("W", rowNumber, "emptyBox borderSet letterStyle blue");
    setBox(23, rowNumber, "box surfaceInterval", Row.W_SURFACE_INTERVAL);
    setBox(1, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    rowNumber += 1;
    setRow24(rowNumber);
  };

  const setRow24 = (rowNumber) => {
    setLetter("X", rowNumber, "box letterStyle");
    setBox(3, rowNumber, "box grey", Row.TWENTYFOUR_TIME_FIGURES);
    setBox(4, rowNumber, "box black", Row.TWENTYFOUR_TIME_FIGURES, 3);
    setLetter("X", rowNumber, "emptyBox borderSet letterStyle");
    setBox(24, rowNumber, "box surfaceInterval", Row.X_SURFACE_INTERVAL);
    rowNumber += 1;
    setRow25(rowNumber);
  };

  const setRow25 = (rowNumber) => {
    setLetter("Y", rowNumber, "box letterStyle");
    setBox(2, rowNumber, "box grey", Row.TWENTYFIVE_TIME_FIGURES);
    setBox(3, rowNumber, "box black", Row.TWENTYFIVE_TIME_FIGURES, 2);
    setLetter("Y", rowNumber, "emptyBox borderSet letterStyle blue");
    setBox(25, rowNumber, "box surfaceInterval", Row.Y_SURFACE_INTERVAL);
    setBox(1, rowNumber, "emptyBox blue emptyBoxBorderBlue");
    rowNumber += 1;
    setRow26(rowNumber);
  };

  const setRow26 = (rowNumber) => {
    setLetter("Z", rowNumber, "box letterStyle");
    setBox(2, rowNumber, "box black", Row.TWENTYSIX_TIME_FIGURES);
    setLetter("Z", rowNumber, "emptyBox borderSet letterStyle");
    setBox(26, rowNumber, "box surfaceInterval", Row.Z_SURFACE_INTERVAL);
  };

  const setRow27 = () => {
    setBox(4, 27, "emptyBox borderSet");
    setBox(26, 27, "emptyBox borderSet letterStyle", Row.PRESSURE_GROUP);
  };

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
        <Box boxStyle="letterBoxBlue" rowNumber={1} letter="A" />
        {displayTable(Row.FIRST_TIME_FIGURES, "blueBoxBlackBorder", 1, 0, 7)}
        {displayTable(Row.FIRST_TIME_FIGURES, "greyBoxBlackBorder", 1, 8, 11)}
      </div>
      <div className="row">
        <Box boxStyle="letterBox" rowNumber={2} letter="B" />
        {displayTable(Row.SECOND_TIME_FIGURES, "whiteBoxBlackBorder", 2, 0, 7)}
        {displayTable(Row.SECOND_TIME_FIGURES, "greyBoxBlackBorder", 2, 8, 11)}
      </div>
    </div>
  );
};
