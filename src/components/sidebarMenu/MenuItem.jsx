import React, { useState } from "react";
import View from "./View";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import { useHistory } from "react-router-dom";

const MenuItem = (props) => {
  let history = useHistory();

  const [isExpanded, setIsExpand] = useState(false);

  const handleExpand = () => {
    setIsExpand(!isExpanded);
  };

  const changePage = (url) => {
    console.log("changePage", url);
    history.push(url);
  };

  return (
    <div style={{ paddingLeft: "10px" }}>
      {props.child.length > 0 && (
        <>
          <div onClick={handleExpand}>
            <View
              title={props.title}
              icon={
                isExpanded ? (
                  <RemoveCircleOutlineIcon
                    fontSize="small"
                    className="silver-color"
                  />
                ) : (
                  <AddCircleOutlineIcon
                    fontSize="small"
                    className="silver-color"
                  />
                )
              }
              link={props.link}
              selectedIndex={props.selectedIndex}
              changePage={changePage}
            />
          </div>
          {isExpanded &&
            props.child.map((element, index) => {
              return (
                <span key={`${element.title}${index}`}>
                  <MenuItem
                    title={element.title}
                    child={element.child}
                    link={element.link}
                  />
                </span>
              );
            })}
        </>
      )}

      {props.child.length == 0 && (
        <View
          title={props.title}
          icon={
            <InsertDriveFileIcon fontSize="small" className="silver-color" />
          }
          link={props.link}
          changePage={changePage}
        />
      )}
    </div>
  );
};

export default MenuItem;
