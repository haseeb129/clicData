import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebarMenu";
import { Redirect } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import { GettingStarted } from "../pages/gettingStartedSection/gettingStarted";
import { BecomeDataExpert } from "../pages/gettingStartedSection/becomeDataExpert";
import { CIPARTHENON } from "../pages/gettingStartedSection/ciPARTHENON";
import { ComingSoon } from "../pages/gettingStartedSection/comingSoon";
import { DataProperties } from "../pages/preparingYourDataSection/dataProperties";
import { DashboardProperties } from "../pages/accessingDashboardSection/dashboardProperties";
import { ChartFunction } from "../pages/introductionToFormulasSection/chartFunction";
import { DashboardBinders } from "../pages/buildingDashboardSection/dashboardBinders";
import { AccessingDashboard } from "../pages/accessingDashboardSection";
import { PreparingYourData } from "../pages/preparingYourDataSection";
import { BuildingDashboard } from "../pages/buildingDashboardSection";
import { IntroductionToFormulas } from "../pages/introductionToFormulasSection";

import {
  AiOutlineTwitter,
  AiOutlineMail,
  AiOutlinePrinter,
} from "react-icons/ai";

export const Layout = (props) => {
  return (
    <div>
      <Header style={{ height: "90px" }} />

      <Container fluid style={{ height: "100%" }}>
        <Row style={{ height: "88vh" }}>
          <Col xs={5} md={5} lg={4} xl={4}>
            <Sidebar />
          </Col>
          <Col xs={7} md={7} lg={8} xl={8} className="right-column">
            <div className="icon-div">
              <AiOutlineMail className="icon-wrapper" />
              <AiOutlineTwitter className="icon-wrapper" />
              <AiOutlinePrinter className="icon-wrapper" />
            </div>

            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <Redirect to="/gettingStarted" />}
              />

              <Route
                exact
                path="/gettingStarted"
                render={(props) => <GettingStarted {...props} />}
              />
              <Route
                exact
                path="/becomeDataExpert"
                render={(props) => <BecomeDataExpert {...props} />}
              />
              <Route
                exact
                path="/CIPARTHENON"
                render={(props) => <CIPARTHENON {...props} />}
              />
              <Route
                exact
                path="/dataProperties"
                render={(props) => <DataProperties {...props} />}
              />
              <Route
                exact
                path="/dashboardProperties"
                render={(props) => <DashboardProperties {...props} />}
              />

              <Route
                exact
                path="/chartFunctions"
                render={(props) => <ChartFunction {...props} />}
              />

              <Route
                exact
                path="/dashboardBinders"
                render={(props) => <DashboardBinders {...props} />}
              />
              <Route
                exact
                path="/accessingDashboard"
                render={(props) => <AccessingDashboard {...props} />}
              />

              <Route
                exact
                path="/preparingYourData"
                render={(props) => <PreparingYourData {...props} />}
              />
              <Route
                exact
                path="/buildingDashboard"
                render={(props) => <BuildingDashboard {...props} />}
              />
              <Route
                exact
                path="/introductionToFormulas"
                render={(props) => <IntroductionToFormulas {...props} />}
              />

              <Route
                exact
                path="/comingsoon"
                render={(props) => <ComingSoon {...props} />}
              />
            </Switch>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};
