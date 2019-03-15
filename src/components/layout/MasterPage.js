import React, { Component } from "react";
import { PageHeader } from "antd";
import { If, Then, Else, When, Unless } from "react-if";
import "./masterPage.scss";

class MasterPage extends Component {
  render() {
    return (
      <div className="master-page-container">
        <div className="holder-top">
          <div className="h-t-left">
            <PageHeader
              title={this.props.title}
              subTitle={this.props.subTitle}
            />
          </div>
          <div className="h-t-right">{this.props.topRight}</div>
        </div>
        <If
          condition={
            (this.props.searchLeft !== null &&
              typeof this.props.searchLeft !== "undefined") ||
            (this.props.searchRight !== null &&
              typeof this.props.searchRight !== "undefined")
          }
        >
          <Then>
            {() => (
              <div className="holder-search">
                <div className="h-s-left">{this.props.searchLeft}</div>
                <div className="h-s-right">{this.props.searchRight}</div>
              </div>
            )}
          </Then>
        </If>

        <div className="holder-content">{this.props.children}</div>
      </div>
    );
  }
}

export default MasterPage;
