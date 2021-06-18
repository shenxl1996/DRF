import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Button, Space } from 'antd';
import "./App.css"

const data = [
  {
    key: '1',
    studynumber:"1",
    patientnumber:"210",
    name: 'John',
    sex:"男",
    birthdate:"2020.3.1",
    studyposition:"脑部",
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    studynumber:"2",
    patientnumber:"210",
    name: 'John Brown',
    sex:"男",
    birthdate:"2020.3.1",
    studyposition:"脑部",
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '3',
    studynumber:"3",
    patientnumber:"210",
    name: 'John Brown',
    sex:"男",
    birthdate:"2020.3.1",
    studyposition:"肺部",
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '4',
    studynumber:"4",
    patientnumber:"210",
    name: 'aahn Brown',
    sex:"男",
    birthdate:"2020.3.1",
    studyposition:"脑部",
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '5',
    studynumber:"4",
    patientnumber:"210",
    name: 'aahn Brown',
    sex:"男",
    birthdate:"2020.3.1",
    studyposition:"脑部",
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '6',
    studynumber:"4",
    patientnumber:"210",
    name: 'aahn Brown',
    sex:"男",
    birthdate:"2020.3.1",
    studyposition:"脑部",
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '7',
    studynumber:"4",
    patientnumber:"210",
    name: 'aahn Brown',
    sex:"男",
    birthdate:"2020.3.1",
    studyposition:"脑部",
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '8',
    studynumber:"4",
    patientnumber:"210",
    name: 'aahn Brown',
    sex:"男",
    birthdate:"2020.3.1",
    studyposition:"脑部",
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '9',
    studynumber:"4",
    patientnumber:"210",
    name: 'aahn Brown',
    sex:"男",
    birthdate:"2020.3.1",
    studyposition:"脑部",
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '10',
    studynumber:"4",
    patientnumber:"210",
    name: 'aahn Brown',
    sex:"男",
    birthdate:"2020.3.1",
    studyposition:"脑部",
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '11',
    studynumber:"4",
    patientnumber:"210",
    name: 'aahn Brown',
    sex:"男",
    birthdate:"2020.3.1",
    studyposition:"脑部",
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '12',
    studynumber:"4",
    patientnumber:"210",
    name: 'aahn Brown',
    sex:"男",
    birthdate:"2020.3.1",
    studyposition:"脑部",
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '13',
    studynumber:"4",
    patientnumber:"210",
    name: 'aahn Brown',
    sex:"男",
    birthdate:"2020.3.1",
    studyposition:"脑部",
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '14',
    studynumber:"4",
    patientnumber:"210",
    name: 'aahn Brown',
    sex:"男",
    birthdate:"2020.3.1",
    studyposition:"脑部",
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '15',
    studynumber:"4",
    patientnumber:"210",
    name: 'aahn Brown',
    sex:"男",
    birthdate:"2020.3.1",
    studyposition:"脑部",
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '16',
    studynumber:"4",
    patientnumber:"210",
    name: 'aahn Brown',
    sex:"男",
    birthdate:"2020.3.1",
    studyposition:"脑部",
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
];

class Test extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'name',
      },
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
        {
            title: '检查登记号',
            dataIndex: 'studynumber',
            key: 'studynumber',
            sorter: (a, b) => a.studynumber> b.studynumber?-1:1,
            sortOrder: sortedInfo.columnKey === 'studynumber' && sortedInfo.order,
            ellipsis: true,
          },
        {
        title: '患者编号',
        dataIndex: 'patientnumber',
        key: 'patientnumber',
        sorter: (a, b) => a.patientnumber> b.patientnumber?-1:1,
        sortOrder: sortedInfo.columnKey === 'patientnumber' && sortedInfo.order,
        ellipsis: true,
        },
      {
        title: '患者姓名',
        dataIndex: 'name',
        key: 'name',
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name > b.name ?-1:1,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        // sorter: (a, b) => a.sex> b.sex?-1:1,
        sortOrder: sortedInfo.columnKey === 'sex' && sortedInfo.order,
        ellipsis: true,
        },
    {
        title: '出生日期',
        dataIndex: 'birthdate',
        key: 'birthdate',
        sorter: (a, b) => a.birthdate> b.birthdate?-1:1,
        sortOrder: sortedInfo.columnKey === 'birthdate' && sortedInfo.order,
        ellipsis: true,
        },
    {
        title: '检查部位',
        dataIndex: 'studyposition',
        key: 'studyposition',
        sorter: (a, b) => a.studyposition > b.studyposition?1:-1,
        sortOrder: sortedInfo.columnKey === 'studyposition' && sortedInfo.order,
        ellipsis: true,
        },

    ];
    return (
      <>
        <Space style={{ marginBottom: 16 }}>
          <Button onClick={this.setAgeSort}>Sort age</Button>
          <Button onClick={()=>{
              let filteredInfo = this.state.filteredInfo
              filteredInfo = {name:["John"]}
              this.setState({filteredInfo})
              console.log(filteredInfo)
          }}>gogogog</Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
        </Space>
        <Table columns={columns} dataSource={data} onChange={this.handleChange} bordered={true}  size="small"
        rowClassName = {(record, index) => {
        let className = index % 2 ? 'dark_row': 'light_row';
        return className}}
        onRow={record => {
            return {
            //   onClick: event => {console.log(event.target)}, // 点击行
              onDoubleClick: event => {},
              onContextMenu: event => {},
              onMouseEnter: event => {}, // 鼠标移入行
              onMouseLeave: event => {},
            };
          }}
        />
      </>
    );
  }
}

export default Test;