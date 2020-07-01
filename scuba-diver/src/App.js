import React from "react";
import { Table } from "./page/table/Table";
import "./App.css";
import { Box } from "./components/box/Box";
function App() {
  // const ARR = [
  //   [
  //     <Box boxStyle="letterBox" letter="A" colorRow="row" />,
  //     <Box boxStyle="letterBox" letter="A" colorRow="row1" />,
  //   ],
  // ];

  return (
    <div className="minWidth">
      <Table />
    </div>
    // <div className="minWidth">
    //   <Box boxStyle="letterBox" letter="A" colorRow="row" />
    //   {ARR.map((elements) => (
    //     <div className="row">{elements}</div>
    //   ))}
    // </div>
  );
}

export default App;
