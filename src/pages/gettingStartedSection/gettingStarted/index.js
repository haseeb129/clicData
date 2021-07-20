import React from "react";
import "./style.css";
// import "./App.css";

export const GettingStarted = () => {
  return (
    <div>
      <h1 className="heading-padding padding-Top">Getting Started</h1>
      <p className="div-font-size">
        Our Support Center contains a complete set of documentation which will
        guide you along the ClicData experience. Learn more about ClicData
        features, benefits and technical details so that you can make the most
        out of your dashboards. <br /> The online help is divided in different
        sections, as follows:
      </p>
      <div className="list-div">
        <ui>
          <li>Getting Started - what is ClicData and how does it work.</li>
          <li>
            Preparing your data - connect your data, schedule its refresh and
            perform transformations.
          </li>

          <li>
            Building a Dashboard - learn how to build graphs, filters and other
            widgets in a few clicks.
          </li>
          <li>
            Automation - set up schedules and tasks to automate dashboards’
            refresh.
          </li>

          <li>
            Users & Teams - organize users in teams with whom you can share the
            dashboards.
          </li>
          <li>
            Administration - manage your account settings, learn how to upgrade
            your account.
          </li>

          <li>
            Need help? Contact us! - access documents, video tutorials and FAQ,
            open support tickets or send feedback.
          </li>
        </ui>
      </div>
      <h2 className="second-heading">In This Section</h2>
      <div className="list-div">
        <ui>
          <li>Become ClicData Expert - Interactive Tutorial.</li>
          <li>What is ClicData.</li>
        </ui>
      </div>
    </div>
  );
};
