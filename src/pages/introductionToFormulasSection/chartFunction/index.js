import React from "react";
import image1 from "./images/Picture1.png";
import image2 from "./images/Picture2.png";
import image3 from "./images/Picture3.png";
import image4 from "./images/Picture4.png";
import image5 from "./images/Picture5.png";
import image6 from "./images/Picture6.png";
import image7 from "./images/Picture7.png";
import "./index.css";
export const ChartFunction = () => {
  return (
    <div className="chartFunction">
      <h1 className="padding-Top">Chart Function</h1>
      <p>
        The Chart functions allow the user to create calculated columns directly
        in the chart.
      </p>

      <p>
        We currently have four built-in functions regarding the chart's Series:
        <span className="bold-text space">
          SeriesCategory(), SeriesName(), SeriesTotal() and SeriesValue()
        </span>
        and two built-in functions regarding the chart's Category:
        <span className="bold-text space">CategoryName(), CategoryTotal,</span>
        <br />
        There is also another function for the
        <span className="bold-text space">ChartTotal()</span>
      </p>
      <img src={image1} className="imageClass" />

      <p>
        <span className="bold-text"> SeriesCategory() </span>
        <br />
        The function is useful to retrieve the
        <span className="bold-text"> Category </span> values. <br />
        If you want to go directly to the data set and add another column in the
        chart using a DataAggregation formula, you can refer the Category values
        using this function.
      </p>

      <p>
        Example:
        <br />
        You can get the sales units for each Country that is in the Category
        section in the data bindings of the chart. <br />
        The new columns is also filtered by a drop down list. <br />
        When we use DataAggregate formulas in the chart, we need to input the
        filters directly in the formula, not in the Filters area of the chart.
      </p>

      <p>
        <span className="bold-text">
          DataAggregate ('Car Sales', 'Sales Units', 'sum', '[Country] IN (' +
          ArrayToValues(widget('Dropdown List #1', 'selectedvalues'), '"') + ')
          and [Country] = "'+SeriesCategory()+'"')
        </span>
      </p>

      <img src={image2} className="imageClass" />

      <p>
        <span className="bold-text"> SeriesName() </span>
        <br />
        This formula returns the name of the series of the current data point
        being evaluated in a chart.
        <br />
        Example:
        <br />
        Assuming a chart with 2 series, some examples would be:
        <br />
        <div className="seprate">
          <li>
            <span className="bold-text">SeriesName('Country')</span> returns
            'France'
          </li>
          <li>
            <span className="bold-text">SeriesName('Year')</span> returns '2009'
          </li>
          <li>
            <span className="bold-text">SeriesName()</span> returns 'France -
            2009'
          </li>
        </div>
      </p>

      <img src={image3} className="imageClass" />

      <p>
        <span className="bold-text">SeriesTotal()</span>
        <li>
          <span className="bold-text"> SeriesTotal() </span>
          is useful if you want to calculate Percentages of your current point
          vs. Total
        </li>
        <br />
        This is an example:
        <span className="bold-text">
          SeriesValue('Sales Units')/SeriesTotal('Sales Units')
        </span>
      </p>

      <img src={image4} className="imageClass" />

      <p>
        <span className="bold-text">SeriesValue()</span>
        <li>
          <span className="bold-text"> SeriesValue() </span>
          can be useful when you want to do operations with the 2 columns
          already added in the chart:
        </li>
        <br />
        Ex:
        <span className="bold-text">
          SeriesValue('Sales Units')/SeriesValue('Target Units')
        </span>
      </p>

      <img src={image5} className="imageClass" />

      <p>
        <span className="bold-text"> CategoryName() </span>
        <br />
        This formula is similar to
        <span className="bold-text">SeriesName().</span>
        This formula returns the name of the categories of the current data
        point being evaluated in a chart.
      </p>

      <img src={image6} className="imageClass" />

      <p>
        <span className="bold-text">CategoryTotal()</span>
        <br />
        This formula returns an aggregated calculation of all the category
        values. You can combine it with a mathematical formula to obtain your
        desired aggregation. Its use similar to
        <span className="bold-text">SeriesTotal()</span>
      </p>

      <img src={image7} className="imageClass" />
    </div>
  );
};
