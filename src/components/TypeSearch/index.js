import React, { Component } from "react";
import { render } from "react-dom";
import Downshift from "downshift";

export default function TypeSearch({ getTypes, ...rest }) {
  return (
    <div>
          <h2>Search By Type</h2>
          <p>Select Pokemon Types</p>
          {/* <TypeSearch
            onStateChange={this.handleStateChange}
            onChange={this.handleChange}
            getTypes={this.getTypes}
            selectedItem={this.state.selectedTypes}
          /> */}
        </div>
      // <Downshift {...rest}>
      //   {({ getItemProps, selectedItem }) =>
      //     <div>
      //       {getTypes().map((item, index) =>
      //         <span
      //           key={item}
      //           {...getItemProps({
      //             item,
      //             style: {
      //               display: "inline-block",
      //               border: "1px solid #2f62de",
      //               width: "10%",
      //               borderRadius: "10px",
      //               padding: "3px",
      //               margin: "2px",
      //               textAlign: "center",
      //               cursor: "pointer",
      //               color: "white",
      //               background: selectedItem.indexOf(item) > -1 ? "#2f62de" : "#6890F0",
      //             }
      //           })}
      //         >
      //           {item}
      //         </span>
      //       )}
      //     </div>}
      // </Downshift>
    );
  }
  
  class App extends React.Component {
    types = [
      "Normal",
      "Fire",
      "Fighting",
      "Water",
      "Flying",
      "Grass",
      "Poison",
      "Electric",
      "Ground",
      "Psychic",
      "Rock",
      "Ice",
      "Bug",
      "Dragon",
      "Ghost",
      "Dark",
      "Steel",
      "Fairy"
    ];
    state = {
      selectedTypes: []
      //Pokemon: []
    };
    handleStateChange = (changes, downshiftState) => {
      //I need the Pokemon list to be updated by their types & then for the search bar to use 
      //Pokemon as the state it runs its search ontop of
        };
    handleChange = (selectedItem, downshiftState) => {
      // handle the new selectedItem here
      const { selectedTypes } = this.state;
      const index = selectedTypes.indexOf(selectedItem);
      const newSelectedItems = [...selectedTypes];
      if (index === -1) {
        newSelectedItems.push(selectedItem);
      } else {
        newSelectedItems.splice(index, 1);
      }
      this.setState({
        selectedTypes: newSelectedItems
      });
    };
    getTypes = () => {
      return this.types;
    };
    render() {
      return (
        <div>
          <h2>Search By Type</h2>
          <p>Select Pokemon Types</p>
          <TypeSearch
            onStateChange={this.handleStateChange}
            onChange={this.handleChange}
            getTypes={this.getTypes}
            selectedItem={this.state.selectedTypes}
          />
        </div>
      );
    }
  }
  
  render(<App />, document.getElementById("root"));
  