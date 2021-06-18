import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Button, Space } from 'antd';
import "./App.css"
let data = []
const data1 = [
  {
    key: '1',
    studynumber:"108553",
    patientnumber:"29120350054",
    name: '王国安',
    sex:"男",
    birthdate:"1951/02/24",
    registerdate:"2021/03/04",
    studyposition:"头部",
  },
  {
    key: '2',
    studynumber:"108554",
    patientnumber:"29040350487",
    name: '戴英才',
    sex:"男",
    birthdate:"1960/04/09",
    registerdate:"2021/03/05",
    studyposition:"右膝部",
  },
  {
    key: '3',
    studynumber:"108555",
    patientnumber:"11240355337",
    name: '杨云翔',
    sex:"女",
    birthdate:"1981/10/05",
    registerdate:"2021/03/06",
    studyposition:"肺部",
  },
  {
    key: '4',
    studynumber:"108556",
    patientnumber:"11240325328",
    name: '曲晓英',
    sex:"女",
    birthdate:"1963/01/06",
    registerdate:"2021/03/07",
    studyposition:"肺部",
  },
  {
    key: '5',
    studynumber:"108557",
    patientnumber:"11240652329",
    name: '王志国',
    sex:"男",
    birthdate:"1973/05/22",
    registerdate:"2021/04/07",
    studyposition:"左手",
  },
  {
    key: '6',
    studynumber:"108558",
    patientnumber:"11240652239",
    name: '陈林',
    sex:"男",
    birthdate:"1966/05/04",
    registerdate:"2021/03/01",
    studyposition:"右腕",
  },
  {
    key: '7',
    studynumber:"108559",
    patientnumber:"11240622335",
    name: '姚静文',
    sex:"女",
    birthdate:"1977/04/22",
    registerdate:"2021/05/01",
    studyposition:"肺部",
  },
  {
    key: '8',
    studynumber:"108560",
    patientnumber:"11240651132",
    name: '张密',
    sex:"女",
    birthdate:"1960/10/10",
    registerdate:"2021/03/12",
    studyposition:"头部",
  },
  {
    key: '9',
    studynumber:"108561",
    patientnumber:"11240654373",
    name: '王崧钰',
    sex:"男",
    birthdate:"1988/04/20",
    registerdate:"2021/05/04",
    studyposition:"左脚踝",
  },
  {
    key: '10',
    studynumber:"108562",
    patientnumber:"11240659233",
    name: '黄华',
    sex:"男",
    birthdate:"1955/11/03",
    registerdate:"2021/03/20",
    studyposition:"右脚腕",
  },
  {
    key: '11',
    studynumber:"108563",
    patientnumber:"12590260483",
    name: '陈海泉',
    sex:"女",
    birthdate:"1963/01/02",
    registerdate:"2021/03/25",
    studyposition:"颧骨",
  },
  {
    key: '12',
    studynumber:"108564",
    patientnumber:"29120350053",
    name: '严寒',
    sex:"男",
    birthdate:"1972/05/30",
    registerdate:"2021/03/10",
    studyposition:"鼻窦",
  },
  {
    key: '13',
    studynumber:"108565",
    patientnumber:"29120350072",
    name: '沈丽华',
    sex:"女",
    birthdate:"1944/05/20",
    registerdate:"2021/03/22",
    studyposition:"腹部",
  },
  {
    key: '14',
    studynumber:"108566",
    patientnumber:"29120350223",
    name: '魏强国',
    sex:"男",
    birthdate:"1963/04/06",
    registerdate:"2021/03/27",
    studyposition:"骨盆",
  },
  {
    key: '15',
    studynumber:"108567",
    patientnumber:"29120350234",
    name: '蓝天',
    sex:"女",
    birthdate:"1980/08/23",
    registerdate:"2021/03/28",
    studyposition:"左股骨",
  },
  {
    key: '16',
    studynumber:"108568",
    patientnumber:"29120354433",
    name: '何少林',
    sex:"男",
    birthdate:"1964/09/06",
    registerdate:"2021/03/29",
    studyposition:"肺部",
  },
];

class TableComponent2 extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    loading:true,
    data:[]
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: this.props.filteredInfo,
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

  componentDidMount() {
    function light(time){
        return new Promise(resolve=>{
            setTimeout(()=>{
                    resolve()
                },time)
        })
    }
    light(1000).then(()=>{this.setState({loading:false,data:data1})})
  }
  componentWillReceiveProps(){
      this.setState({filteredInfo:this.props.filteredInfo})
  }
  render() {
    let { sortedInfo} = this.state;
    let {filteredInfo} = this.props
    console.log(filteredInfo)
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
            filteredValue: filteredInfo.patientnumber|| null,
            onFilter: (value, record) => record.patientnumber.includes(value),
            sorter: (a, b) => a.patientnumber > b.patientnumber ?-1:1,
            sortOrder: sortedInfo.columnKey === 'patientnumber' && sortedInfo.order,
            ellipsis: true,
          },
      {
        title: '患者姓名',
        dataIndex: 'name',
        key: 'name',
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) =>  record["name"]
        ? record["name"].toString().toLowerCase().includes(value.toLowerCase())
        : '',
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
        title: '登记日期',
        dataIndex: 'registerdate',
        key: 'registerdate',
        filteredValue: filteredInfo.registerdate || null,
        sorter: (a, b) => Date.parse(a.registerdate)< Date.parse(b.registerdate)?-1:1,
        onFilter:(value,record) => {
          if(record["registerdate"]){
            value = value.split(',')
            let start = Date.parse(value[0])
            let end = Date.parse(value[1])
            let res = ''
            // console.log(record["registerdate"],value[0],value[1])
            let recorddate = Date.parse(record["registerdate"])
            if(recorddate>= start && recorddate<= end) {
              res = true
            }
            return res
          }
          else
          return ''
        },
        sortOrder: sortedInfo.columnKey === 'registerdate' && sortedInfo.order,
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
        <Table columns={columns} dataSource={this.state.data} onChange={this.handleChange} bordered={true}  size="small"
        loading={this.state.loading}
        rowClassName = {(record, index) => {
        let className = index % 2 ? 'dark_row': 'light_row';
        return className}}
        onRow={record => {
            return {
              // onClick: event => {console.log(event.target)}, // 点击行
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

export default TableComponent2;