import React, { Component } from "react";
import { Table, Divider, Tag, Button, DatePicker, Input } from "antd";
import MasterPage from "../components/layout/MasterPage";
const { RangePicker } = DatePicker;

class Test extends Component {
  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address"
      },
      {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? "geekblue" : "green";
              if (tag === "loser") {
                color = "volcano";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        )
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <span>
            <a href="/">Invite {record.name}</a>
            <Divider type="vertical" />
            <a href="/">Delete</a>
          </span>
        )
      }
    ];

    const data = [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"]
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"]
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"]
      },
      {
        key: "11",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"]
      },
      {
        key: "12",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"]
      },
      {
        key: "13",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"]
      },
      {
        key: "21",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"]
      },
      {
        key: "22",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"]
      },
      {
        key: "23",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"]
      }
    ];
    const searchN = (
      <div>
        <span>开始结束时间：</span>
        <RangePicker placeholder={["开始时间", "结束时间"]} />
        <span style={{ marginLeft: 10 }}>用户名：</span>
        <Input placeholder="请输入用户名" style={{ width: 150 }} />
        <Button icon="search" type="primary" style={{ marginLeft: 10 }}>
          查询
        </Button>
      </div>
    );

    return (
      <div>
        <MasterPage
          title="综合态势"
          subTitle="子标题"
          topRight={
            <Button icon="plus" type="primary">
              添加
            </Button>
          }
          searchLeft={searchN}
          searchRight={
            <div>
              <Button icon="edit" type="default">
                编辑
              </Button>
              <Button icon="delete" type="danger" style={{ marginLeft: 10 }}>
                删除
              </Button>
            </div>
          }
        >
          <Table
            size="small"
            bordered
            columns={columns}
            dataSource={data}
            pagination={{ size: "default" }}
          />
        </MasterPage>
      </div>
    );
  }
}

export default Test;
