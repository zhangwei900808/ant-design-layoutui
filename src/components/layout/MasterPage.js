import React, { Component } from "react";
import { PageHeader, Layout, Icon } from "antd";
import { If, Then } from "react-if";
import "./masterPage.scss";
const { Header, Footer, Sider, Content } = Layout;
class MasterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backIcon: false
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.backIcon) {
      this.setState({
        backIcon: nextProps.backIcon
      });
    }
  }
  render() {
    return (
      <div className={`${this.props.className ? `${this.props.className} master-page-container` : "master-page-container"}`}>
        <Layout className="mp-layout">
          <If condition={this.props.side === null || typeof this.props.side === "undefined"}>
            <Then>
              <div className="holder-top">
                <PageHeader
                  backIcon={this.props.onBack ? <Icon type="arrow-left" /> : false}
                  onBack={() => this.props.onBack()}
                  title={this.props.title}
                  subTitle={this.props.subTitle}
                  extra={this.props.topRight}
                  footer={this.props.topFooter}
                />
              </div>
            </Then>
          </If>
          <Layout className="mpl-layout">
            <If condition={this.props.side !== null && typeof this.props.side !== "undefined"}>
              <Then>
                <Sider className="mp-side" theme="light" width="320">
                  <PageHeader title={this.props.title} subTitle={this.props.subTitle} />
                  <div className="mp-side-content">{this.props.side}</div>
                </Sider>
              </Then>
            </If>
            <Content>
              <If condition={(this.props.search !== null && typeof this.props.search !== "undefined") || (this.props.searchRight !== null && typeof this.props.searchRight !== "undefined")}>
                <Then>
                  <div className="holder-search">{this.props.search}</div>
                </Then>
              </If>
              <div className="holder-content">{this.props.children}</div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default MasterPage;
