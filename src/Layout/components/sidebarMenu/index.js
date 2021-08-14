import React, { Component } from "react";
import MenuItem from "./MenuItem";
import { sideBarMenu, stylSelected } from "../../../helper/sidebar";

class SideBar extends Component {
  state = { selectedMenutitle: "Getting Started" };
  handleSelection = (title) => {
    this.setState({ selectedMenutitle: title });
  };

  componentDidUpdate;
  render() {
    return (
      <div className="sidebar-wrapper">
        {sideBarMenu.map((element, index) => {
          return (
            <MenuItem
              style={stylSelected}
              selectedMenutitle={this.state.selectedMenutitle}
              handleSelection={this.handleSelection}
              key={`${element.title}${index}`}
              title={element.title}
              child={element.child}
              link={element.link}
            />
          );
        })}
      </div>
    );
  }
}

export default SideBar;
