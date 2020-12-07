import React from "react";
import Header from "./components/Header/Header";
import OperationButtons from "./containers/OperationButtons/OperationButtons";
import SelectionRadios from "./containers/SelectionRadios/SelectionRadios";
import RingTable from "./containers/RingTable/RingTable";

const App = () => (
  <>
    <Header
      brand="React Workshop Lab"
      links={["Home", "Feeds"]}
      theme={"dark"}
    />
    <OperationButtons />
    <SelectionRadios
      radiosText={["Complete", "Ongoing", "Paused", "Failed", "Aborted", "All"]}
    />
    <RingTable />
  </>
);

export default App;
