import React, { Component } from "react";

const View = ({ link, icon, title, changePage }) => {
  return (
    <div className="menu-item-wrapper" onClick={() => changePage(link)}>
      <div className="menu-heading-wrapper">
        <span className="icon-wrapper "> {icon}</span>
        <span className="menu-heading">{title}</span>
      </div>
    </div>
  );
};

export default View;
