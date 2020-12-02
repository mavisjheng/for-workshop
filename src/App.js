import React, { Component } from "react";
import Header from "./Header";
import OperationButtons from "./OperationButtons";
import SelectionRadios from "./SelectionRadios";
import RingTable from "./RingTable";

class App extends Component {
  state = {
    allData: [],
    displayedData: [],
    operation: "",
    statusToShow: "All",
  };

  componentDidMount() {
    fetch("https://run.mocky.io/v3/adc0e655-b26f-4738-a0d8-9cc976a8fa36")
      .then((response) => response.json())
      .then((data) => this.setState({ allData: data, displayedData: data }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.statusToShow !== this.state.statusToShow ||
      prevState.allData !== this.state.allData
    ) {
      let filteredData = [];
      if (this.state.statusToShow === "All") {
        filteredData = this.state.allData;
      } else {
        filteredData = this.state.allData.filter(
          (data) => data.status === this.state.statusToShow
        );
      }
      this.setState({ displayedData: filteredData });
    }

    if (prevState.operation !== this.state.operation) {
      let changedData = this.state.allData;
      if (this.state.operation === "start") {
        changedData = changedData.map((data) => ({
          ...data,
          status: data.status === "Paused" ? "Ongoing" : data.status,
        }));
      } else if (this.state.operation === "pause") {
        changedData = changedData.map((data) => ({
          ...data,
          status: data.status === "Ongoing" ? "Paused" : data.status,
        }));
      } else if (this.state.operation === "abort") {
        changedData = changedData.map((data) => ({
          ...data,
          status:
            data.status === "Paused" || data.status === "Ongoing"
              ? "Aborted"
              : data.status,
        }));
      }
      this.setState({ allData: changedData });
    }
  }

  render() {
    return (
      <>
        <Header
          brand="React Workshop Lab"
          links={["Home", "Feeds"]}
          theme={"dark"}
        />
        <OperationButtons
          onClick={(action) => this.setState({ operation: action })}
        />
        <SelectionRadios
          radiosText={[
            "Complete",
            "Ongoing",
            "Paused",
            "Failed",
            "Aborted",
            "All",
          ]}
          onSelect={(status) => this.setState({ statusToShow: status })}
          selected={this.state.statusToShow}
        />
        <RingTable rows={this.state.displayedData} />
      </>
    );
  }
}

export default App;
