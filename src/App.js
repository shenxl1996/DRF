import React from 'react';
import 'antd/dist/antd.css';
import './App.css'
import { Row, Col ,Form, Table} from 'antd';
import headImg from './head.png'
import dba01 from './image/db_a_01.png'
import dba02 from './image/db_a_02.png'
import dba03 from './image/db_a_03.png'
import dbb01 from './image/db_b_01.png'
import dbb02 from './image/db_b_02.png'
import dbb03 from './image/db_b_03.png'
import body from './image/DI_AY_326b.png'
import sc01 from './image/sc_01.png'
import sc02 from './image/sc_02.png'
import sc03 from './image/sc_03.png'
import sc04 from './image/sc_04.png'
import fakeformdata from './image/formdata.png'
import fakeformdata2 from './image/formdata2.png'
import seticon from './image/icon/tt_01a.png'
import outicon from './image/icon/tt_q04.png'
import {Link} from "react-router-dom";
import SystemSetting from './systemSetting'

const blank = " ".replace(/ /g, "\u00a0")

const partdata = [
  {
    key:0,
    部位体位:"侧卧",
    部位:"脑",
    体型:"微胖",
    备注:"无",
  },
  {
    key:1,
    部位体位:"正卧",
    部位:"脑",
    体型:"微胖",
    备注:"无",
  },
]
const partdata2 = [

]
const partdata3 = [
  {
    key:0,
    部位体位:"侧卧",
    部位:"大臂",
    体型:"微胖",
    备注:"无",
  },
  {
    key:1,
    部位体位:"正卧",
    部位:"大臂",
    体型:"微胖",
    备注:"无",
  },
]
const partdata4 = [
  {
    key:0,
    部位体位:"侧卧",
    部位:"小臂",
    体型:"微胖",
    备注:"无",
  },
  {
    key:1,
    部位体位:"正卧",
    部位:"小臂",
    体型:"微胖",
    备注:"无",
  },
]
const partdata5 = [
  {
    key:0,
    部位体位:"侧卧",
    部位:"盆骨",
    体型:"微胖",
    备注:"无",
  },
  {
    key:1,
    部位体位:"正卧",
    部位:"盆骨",
    体型:"微胖",
    备注:"无",
  },
]
const partdata6 = [
  {
    key:0,
    部位体位:"侧卧",
    部位:"大腿",
    体型:"微胖",
    备注:"无",
  },
  {
    key:1,
    部位体位:"正卧",
    部位:"大腿",
    体型:"微胖",
    备注:"无",
  },
]
const partdata7 = [
  {
    key:0,
    部位体位:"侧卧",
    部位:"小腿",
    体型:"微胖",
    备注:"无",
  },
  {
    key:1,
    部位体位:"正卧", 
    部位:"小腿",
    体型:"微胖",
    备注:"无",
  },
]


for(let i = 0; i < 10; i++){
  partdata2.push({
    key:i,
    部位体位:"侧卧"+i,
    部位:"胸",
    体型:"微胖",
    备注:"无",
  })
}

const columns = [
  {
    title: '部位体位',
    dataIndex: '部位体位',
  },
  {
    title: '部位',
    dataIndex: '部位',
  },
  {
    title: '体型',
    dataIndex: '体型',
  },
  {
    title: '备注',
    dataIndex: '备注',
  },

];


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      partList:partdata,
      partSelected:[],
      partChosen:[],
      table1key:1,
      table2key:1,
      chosenList:[],
      chosenListSelected:[]
    }
    this.setState.bind(this)
}
onSetDataSource = partData => {
  this.setState({
    partList:partData,
    partSelected:[],
    partChosen:[],
    table1key:1,
    table2key:1,
    chosenList:[],
    chosenListSelected:[]})
}
onSelectChange = selectedRowKeys => {
  console.log('selectedRowKeys changed: ', selectedRowKeys);
  this.setState({ partSelected:selectedRowKeys });
};
onSelectChange2 = selectedRowKeys => {
  console.log('selectedRowKeys changed: ', selectedRowKeys);
  this.setState({ chosenListSelected:selectedRowKeys });
};
render(){
  const {partSelected,chosenListSelected} = this.state;
  const rowSelection = {
    selectedRowKeys:partSelected,
    onChange: this.onSelectChange,
  };
  const rowSelection2 = {
    selectedRowKeys:chosenListSelected,
    onChange: this.onSelectChange2,
  };
  return(<div id='container' >
        <SystemSetting open={true} 
              ref={input => {
                this.systemsetting = input;
              }}/>
    {/* 顶部 */}
    <Row>
      <Col span={8}></Col>
      <Col span={8}>
        <div style={{marginTop:"20px",backgroundImage:`url(${headImg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center 0",width:"100%",height:"40px"}}>
          <h1 style={{color:"#ccd5e1",textAlign:"center",fontSize:"20px"}}>DRF数字影像系统</h1>
        </div>
      </Col>
      <Col span={8}>
        <div style={{textAlign:"right"}}>
          <button className="toprightbutton" onClick={()=>{
            this.systemsetting.handleOpen()
            console.log(this.systemsetting)
          }}><img src={seticon} style={{width:"20px",padding:"0 0 2px 0"}}/>系统设置</button>{blank}{blank}
          <Link to={"/login"}>
          <button className="toprightbutton"><img src={outicon} style={{width:"20px",padding:"0 0 2px 0"}}/>退出系统</button>{blank}
          </Link>
        </div>
      </Col>

    </Row>
    <Row>  
          <Col span={8}>
            <div className="topButton">
            {blank}{blank}
            <Link to= {`/`}>
              <button className="middlebutton">新建病例</button>{blank}{blank}
            </Link>
              <Link to= {`/worklist/`}>
              <button className="middlebutton">待检病例</button>{blank}{blank}
              </Link>
              <Link to= {`/history/`}>
              <button className="middlebutton">历史病例</button>{blank}{blank}
              </Link>
            </div>
          </Col>
          <Col span={8}>
            <div className="centerButton">
              <button className="bigbutton">RF</button>{blank}{blank}
              <button className="bigbutton">DX</button>{blank}{blank}
            </div>
          </Col>
 
    </Row>
    {/* 左侧 */}
    <Row>
      <Col span={6}>
        <img src={dba01} style={{width:"260px",padding:"10px 0 0 10px"}} />
        <h1 style={{color:"#499eca",fontSize:"20px",position:"absolute",padding:"0 0 0 25px",marginTop:"-40px"}}>患者信息</h1>
      <Form onFinish={(values)=>{console.log(values)}} 
      // style={{marginTop:"20px",backgroundImage:`url(${dba02})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center 0",width:"260px",height:"400px"}}
      >

        <Form.Item name="username" noStyle={true}>
          <p className="formhead" style={{width:"85px"}} >患者编号*</p>
          <input style={{width:"150px"}} placeholder="请输入"/>
        </Form.Item>
        <br/>
        <Form.Item name="username" noStyle={true}>
          <p className="formhead">检查ID*</p>
          <input style={{width:"150px"}} placeholder="请输入"/>
        </Form.Item>
        <br/>
        <Form.Item name="username" noStyle={true}>
          <p className="formhead">姓名*</p>
          <input style={{width:"150px"}} placeholder="请输入"/>
        </Form.Item>
        <br/>
        <Form.Item name="username" noStyle={true}>
          <p className="formhead">性别*</p>
          <input style={{width:"150px"}} placeholder="请输入"/>
        </Form.Item>
        <br/>
        <Form.Item name="username" noStyle={true}>
          <p className="formhead">年龄</p>
          <input style={{width:"150px"}} placeholder="请输入"/>
        </Form.Item>
        <br/>

        <Form.Item name="username" noStyle={true}>
          <p className="formhead">出生日期</p>
          <input style={{width:"150px"}} placeholder="请输入"/>
        </Form.Item>
        <br/>
        <Form.Item name="username" noStyle={true}>
          <p className="formhead">检查设备</p>
          <input style={{width:"150px"}} placeholder="请输入"/>
        </Form.Item>
        <br/>
        <Form.Item name="username" noStyle={true}>
          <p className="formhead">申请科室</p>
          <input style={{width:"150px"}} placeholder="请输入"/>
        </Form.Item>
        <br/>
        <Form.Item name="username" noStyle={true}>
          <p className="formhead">申请医师</p>
          <input style={{width:"150px"}} placeholder="请输入"/>
        </Form.Item>
        <br/>
        <Form.Item name="username" noStyle={true}>
          <p className="formhead">住院号</p>
          <input style={{width:"150px"}} placeholder="请输入"/>
        </Form.Item>
        <br/>
        <Form.Item name="username" noStyle={true}>
          <p className="formhead">床号</p>
          <input style={{width:"150px"}} placeholder="请输入"/>
        </Form.Item>

        <input type="submit" value="Submit" style={{display:"none"}}></input>  
      </Form>
      <img src={dba03} style={{width:"260px",padding:"0 0 0 10px"}}  />
      </Col>
      <Col span={2}>
        <br/>
        <br/>
        <br/>
        <br/>
        <div style={{position:"absolute",marginLeft:"60px"}}>
        <button className="bodybutton"><img src={sc01} style={{width:"30px"}}></img></button>
        <br/>
        <br/>
        <button className="bodybutton"><img src={sc02} style={{width:"30px"}}></img></button>
        <br/>
        <br/>
        <button className="bodybutton"><img src={sc03} style={{width:"30px"}}></img></button>
        <br/>
        <br/>
        <button className="bodybutton"><img src={sc04} style={{width:"30px"}}></img></button>

        </div>
      </Col>
      <Col span={8}>
        <div style={{textAlign:"center",margin:"0 auto", justifyContent:"center"}}>
          <div style={{width:"230px",margin:"0 auto",position:"relative"}}>
          <button onClick={()=>{this.onSetDataSource(partdata) }} style={{width:"30px",height:"30px",borderRadius:"20px",border:"1px solid yellow",backgroundColor:"rgba(0,0,0,0.3)",position:"absolute",left:"104px", top:"30px"}}></button>
          <button onClick={()=>{this.onSetDataSource(partdata2) }} style={{width:"70px",height:"70px",borderRadius:"20px",border:"1px solid yellow",backgroundColor:"rgba(0,0,0,0.3)",position:"absolute",left:"84px", top:"90px"}}></button>
          <button onClick={()=>{this.onSetDataSource(partdata3) }} style={{width:"25px",height:"40px",borderRadius:"20px",border:"1px solid yellow",backgroundColor:"rgba(0,0,0,0.3)",position:"absolute",left:"60px", top:"100px"}}></button>
          <button onClick={()=>{this.onSetDataSource(partdata4) }} style={{width:"25px",height:"40px",borderRadius:"20px",border:"1px solid yellow",backgroundColor:"rgba(0,0,0,0.3)",position:"absolute",left:"45px", top:"170px"}}></button>
          <button onClick={()=>{this.onSetDataSource(partdata5) }} style={{width:"70px",height:"40px",borderRadius:"20px",border:"1px solid yellow",backgroundColor:"rgba(0,0,0,0.3)",position:"absolute",left:"84px", top:"190px"}}></button>
          <button onClick={()=>{this.onSetDataSource(partdata6) }} style={{width:"35px",height:"60px",borderRadius:"20px",border:"1px solid yellow",backgroundColor:"rgba(0,0,0,0.3)",position:"absolute",left:"80px", top:"240px"}}></button>
          <button onClick={()=>{this.onSetDataSource(partdata7) }} style={{width:"30px",height:"60px",borderRadius:"20px",border:"1px solid yellow",backgroundColor:"rgba(0,0,0,0.3)",position:"absolute",left:"85px", top:"340px"}}></button>
          
          <img src={body} style={{width:"230px",padding:"0 0 0 10px"}} onDoubleClick={()=>{this.setState({
                  partList:partdata,
                  partSelected:[],
                  partChosen:[],
                  table1key:1,
                  table2key:1,
                  chosenList:[],
                  chosenListSelected:[]
          })}} draggable={false} /></div>
        </div>

      </Col>
      <Col span={8}>
        {/* 选择检查部位 */}
      <div style={{position:"absolute",marginLeft:"-30px",marginTop:"-45px"}}>
        <img src={dbb01} style={{width:"380px",padding:"10px 0 0 0px"}} />
        <h1 style={{color:"#499eca",fontSize:"20px",position:"absolute",padding:"0 0 0 25px",marginTop:"-40px"}}>检查部位</h1>
        {/* <img src={fakeformdata} style={{width:"380px",padding:"10px 0 0 0px"}} ></img> */}
        <Table key={this.state.table1key} columns={columns} dataSource={this.state.partList} bordered={true}  size="small"
                rowClassName = {(record, index) => {
                  let className = index % 2 ? 'dark_row': 'light_row';
                  return className}} rowSelection={rowSelection}
               scroll={{ y: 240 }} style={{width:"360px",marginLeft:"10px"}}/>

        <img src={dbb03} style={{width:"380px",padding:"10px 0 0 0px"}} />
        <br/>
        <br/>

        <div style={{textAlign:"center",width:"380px"}}>
          <button className="middlebutton" style={{width:"80px"}} onClick={()=>{
            let partList= this.state.partList;
            let chosenList = this.state.chosenList; 
            this.state.partSelected.map( key =>{
              // 
              let index = partList.findIndex(obj => obj.key === key)
              chosenList.push(partList[index])
              partList.splice(index,1)
            })
            chosenList.sort((a,b)=> a.key-b.key)
            // console.log(chosenList)
            this.setState({partList,table1key:this.state.table1key+1,partSelected:[],chosenList})
          }}>选择部位</button>{blank}{blank}{blank}{blank}{blank}{blank}
          <button className="middlebutton" style={{width:"80px"}}
          onClick={()=>{
            let partList= this.state.partList;
            let chosenList = this.state.chosenList; 
            this.state.chosenListSelected.map( key =>{
              // 
              let index = chosenList.findIndex(obj => obj.key === key)
              partList.push(chosenList[index])
              chosenList.splice(index,1)
            })
            // console.log(chosenList)
            partList.sort((a,b)=> a.key-b.key)
            this.setState({partList,table1key:this.state.table1key+1,chosenListSelected:[],chosenList})
          }}
          >移出</button>
        </div>
 
        <img src={dbb01} style={{width:"380px",padding:"10px 0 0 0px"}} />
        <h1 style={{color:"#499eca",fontSize:"20px",position:"absolute",padding:"0 0 0 25px",marginTop:"-40px"}}>已选择部位</h1>
        {/* <img src={fakeformdata2} style={{width:"380px",padding:"10px 0 0 0px"}} ></img> */}
        <Table key={this.state.table1key+1} columns={columns} dataSource={this.state.chosenList} bordered={true}  size="small"
                rowClassName = {(record, index) => {
                  let className = index % 2 ? 'dark_row': 'light_row';
                  return className}} rowSelection={rowSelection2}
               scroll={{ y: 150 }} style={{width:"360px",marginLeft:"10px"}}/>
        <img src={dbb03} style={{width:"380px",padding:"10px 0 0 0px"}} />
      </div>


      </Col>

    </Row>
    <Row>
      <Col span={24}>
        <div style={{textAlign:"center"}}>
          <br />
          <br />
          <br />
          <br />
              <button className="bottombutton" style={{borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px"}}>预约</button>{blank}{blank}
              <button className="bottombutton" onClick={()=>{this.setState({
                  partList:partdata,
                  partSelected:[],
                  partChosen:[],
                  table1key:1,
                  table2key:1,
                  chosenList:[],
                  chosenListSelected:[]
          })}} >取消</button>{blank}{blank}
              <Link to="/camera/">
              <button className="bottombutton">急诊</button></Link>{blank}{blank}
              <Link to="/camera/">
              <button className="bottombutton" style={{borderTopRightRadius:"20px",borderBottomRightRadius:"20px"}}>检查</button>
              </Link>
        </div>
      </Col>
    </Row>
  </div>)
}
}
export default App;