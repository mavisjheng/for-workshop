import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import { connect } from "react-redux";
import { setRings } from "../../redux/modules/rings";

const getBadgeVariant = (status) => {
  switch (status) {
    case "Complete":
      return "success";

    case "Ongoing":
      return "warning";

    case "Failed":
      return "danger";

    case "Aborted":
      return "dark";

    default:
      return "secondary";
  }
};

const operationTransition = {
  start: "Ongoing",
  pause: "Paused",
  abort: "Aborted",
};

class RingTable extends Component {
  state = {
    allData: [],
    displayedData: [],
  };

  componentDidMount() {
    fetch("https://run.mocky.io/v3/adc0e655-b26f-4738-a0d8-9cc976a8fa36")
      .then((response) => response.json())
      .then((data) => this.props.setRings(data));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.rings !== this.props.rings) {
      this.setState({
        allData: this.props.rings,
        displayedData: this.props.rings,
      });
    }

    if (
      prevProps.statusToShow !== this.props.statusToShow ||
      prevState.allData !== this.state.allData
    ) {
      const filteredData =
        this.props.statusToShow === "All"
          ? this.state.allData
          : this.state.allData.filter(
              (data) => data.status === this.props.statusToShow
            );
      this.setState({ displayedData: filteredData });
    }

    if (prevProps.rolloutOpearion !== this.props.rolloutOpearion) {
      const changedData = this.state.allData.map((data) => ({
        ...data,
        status:
          data.status === "Paused" || data.status === "Ongoing"
            ? operationTransition[this.props.rolloutOpearion]
            : data.status,
      }));

      this.setState({ allData: changedData });
    }
  }

  render() {
    return (
      <Table bordered>
        <thead>
          <tr>
            <th></th>
            <th>Rollout Status</th>
            <th>Windows</th>
            <th>Linux</th>
            <th>Unix</th>
          </tr>
        </thead>
        <tbody>
          {this.state.displayedData.map((row, index) => (
            <tr key={`ring-row-${index}`}>
              <td>{row.target}</td>
              <td>
                <Badge variant={getBadgeVariant(row.status)}>
                  {row.status}
                </Badge>
              </td>
              <td>{row.windows}</td>
              <td>{row.linux}</td>
              <td>{row.unix}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => ({
  rings: state.rings.rings,
  statusToShow: state.statusSelection.status,
  rolloutOpearion: state.rolloutOperation.operation,
});

const mapDispatchToProps = (dispatch) => ({
  setRings: (data) => dispatch(setRings(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RingTable);
