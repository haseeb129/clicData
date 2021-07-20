import React, { Component } from "react";
import MenuItem from "./MenuItem";

const data = [
  {
    title: "Getting Started",
    link: "/gettingStarted",
    child: [
      {
        title: "Become ClicData Expert - Interactive Tutorial",
        link: "/becomeDataExpert",
        child: [],
      },
      { title: "What is ClicData", link: "/clicData", child: [] },
    ],
  },

  {
    title: "Preparing your data",
    link: "/comingsoon",
    child: [
      {
        title: "Before importing the data",
        link: "/comingsoon",
        child: [],
      },

      {
        title: "My Data",
        link: "/comingsoon",
        child: [
          {
            title: "Data properties",
            link: "/comingsoon",
            child: [],
          },
          {
            title: "Data Preview",
            link: "/comingsoon",
            child: [],
          },
        ],
      },
    ],
  },
];

const stylSelected = {
  color: "red",
};

class SideBar extends Component {
  state = { selectedIndex: 0 };
  render() {
    return (
      <div className="sidebar-wrapper">
        {data.map((element, index) => {
          return (
            <MenuItem
              style={stylSelected}
              selectedIndex={this.state.selectedIndex}
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
