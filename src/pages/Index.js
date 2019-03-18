import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { DatePicker } from "antd";
import LayoutPage from "../components/layout/LayoutPage";
import { Table, Divider, Tag } from "antd";
import userAction from "../redux/actions/userAction";

@withRouter
@connect(
  ({ user }) => ({ user }),
  dispatch =>
    bindActionCreators(
      {
        getUsers: userAction.getUserList
      },
      dispatch
    )
)
class Index extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  componentWillReceiveProps(nextProps) {
    console.log("next props", nextProps);
  }

  render() {
    const columns = [
      {
        title: "id",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "email",
        dataIndex: "email",
        key: "email"
      },
      {
        title: "phone",
        key: "phone",
        dataIndex: "phone"
      },
      {
        title: "website",
        key: "website",
        dataIndex: "website"
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <span>
            <a href="javascript:;">Invite {record.name}</a>
            <Divider type="vertical" />
            <a href="javascript:;">Delete</a>
          </span>
        )
      }
    ];

    const { user } = this.props;
    return (
      <div>
        <Table
          size="small"
          bordered
          columns={columns}
          dataSource={user.userList}
          pagination={{ size: "default" }}
        />
      </div>
    );
  }
}

export default Index;
