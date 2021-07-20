import React from "react";
import Sample from "../../../assests/sample.jpg";

export const ClicData = () => {
  return (
    <div>
      <h1 className="padding-Top">What is ClicData</h1>
      <p>
        ClicData is a data management and visualization tool which allows you to
        manage and track all your data in one place. If you are looking into
        making informed decisions faster, you are at the right place. ClicData
        helps you turn data into information quickly with our live and
        interactive dashboards, self-updating reports and shared work spaces.
      </p>
      <p>
        <span className="bold-text">ClicData helps you to react faster!</span>
        <br />
        ClicData always shows you the latest data.You are able to navigate
        through your information easily: dashboards favorites, drill downs etc.
        You will have a better look at your data with the right visualization.
      </p>
      <img src={Sample} className="imageClass" />

      <p>
        <span className="bold-text">You will stay focused!</span>
        <br />
        <br />
        ClicData takes care of business for you: automatic updates, automatic
        publications. Set up a schedule once and you never lose sight of your
        data history.
      </p>

      <img src={Sample} className="imageClass" />

      <p>
        <span className="bold-text">
          Anytime, anywhere, you will be alerted!
        </span>
        <br />
        <br />
        Any critical changes, you will be notified immediately.You can set up
        your team members to be alerted too.
      </p>
      <br />
      <br />

      <p>
        <span className="bold-text">So, how can you achieve this?</span>
        <br />
        <br />
        Firstly, import all your data (desktop, web service, large databases).
        Connect to a large number of systems and databases such as Google
        Analytics, Facebook, Salesforce, Oracle, MySQL and files on Dropbox,
        Google Drive and many many more. Check here all our direct connectors!
      </p>

      <img src={Sample} className="imageClass" />

      <p>
        <br />
        Schedule your refresh dates and times and ClicData takes care of the
        rest. Then mix it up the way you want: you can create multiple point
        merges and data transformations, you can design your data warehouse
        yourself.
      </p>

      <img src={Sample} className="imageClass" />

      <p>
        <br />
        The next step is to set up the dashboards the way the users need to see
        them. Regroup all your users under your account and give them different
        access rights. Sharing the analyses with them is simple and intuitive.
        You can add comments to your live dashboards and share them with your
        colleagues or clients in a few clicks.
        <br />
        <br />
        <span className="bold-text">Happy Dashboarding!</span>
      </p>
    </div>
  );
};
