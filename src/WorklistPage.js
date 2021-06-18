import React from 'react';
import './App.css'
import { Row, Col ,Form,Button,DatePicker} from 'antd';
import headImg from './head.png'
import moment from 'moment';
import {Link} from "react-router-dom";
import dba01 from './image/db_a_01.png'
import dba02 from './image/db_a_02.png'
import dba03 from './image/db_a_03.png'
import dbb01 from './image/db_b_01.png'
import dbb02 from './image/db_b_02.png'
import dbb03 from './image/db_b_03.png'
import dbc01 from './image/db_c_01.png'
import dbc02 from './image/db_c_02.png'
import dbc03 from './image/db_c_03.png'
import dbc04 from './image/db_c_04.png'
import body from './image/DI_AY_326b.png'
import sc01 from './image/sc_01.png'
import sc02 from './image/sc_02.png'
import sc03 from './image/sc_03.png'
import sc04 from './image/sc_04.png'
import fakeformdata from './image/formdata.png'
import fakeformdata2 from './image/formdata2.png'
import fakeformdata3 from './image/formdata3.png'
import fakeformdata4 from './image/formdata4.png'
import fakeformdata5 from './image/formdata5.png'
import seticon from './image/icon/tt_01a.png'
import iconright1 from './image/icon/tt_q01.png'
import iconright2 from './image/icon/tt_q03.png'
import outicon from './image/icon/tt_q04.png'
import TableComponent from './TableComponent'
import SystemSetting from './systemSetting'
const blank = " ".replace(/ /g, "\u00a0")
const { RangePicker } = DatePicker;

class WorklistPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name:null,
      studynumber:null,
      registerdate:null,
      reset:false
    }
    this.setState.bind(this)
    this.myRef = React.createRef();
}
render(){
  return(<div  id='container'>
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
     {/* 左侧 */}
     <Row>
      <Col span={6}>
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
        <img src={dbc04} style={{width:"260px",padding:"10px 0 0 10px"}} />
        <h1 style={{color:"#499eca",fontSize:"20px",padding:"0 0 20px 15px"}}>Worklist查询/本地预约查询</h1>
      <Form style={{height:"430px"}} onFinish={(values)=>{
        console.log(values)
        this.setState({name:values.username,patientnumber:values.userid,reset:false})
      }} 
      // style={{marginTop:"20px",backgroundImage:`url(${dba02})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center 0",width:"260px",height:"400px"}}
      >
          <p className="formhead">患者编号</p>

        <Form.Item name="userid" noStyle={true}>
          <input style={{width:"150px"}} placeholder="请输入"/>
        </Form.Item>
        <br/>
        <p className="formhead">患者姓名</p>

        <Form.Item name="username" noStyle={true}>
          <input style={{width:"150px"}} placeholder="请输入"/>
        </Form.Item>
        <br/>
        <RangePicker style={{marginLeft:"20px",width:"230px"}} format={"YYYY/MM/DD"} onChange={(dates, dateStrings)=>{
          this.setState({registerdate:dateStrings})
        }}/>
        <br/>
        <br/>
        <div style={{textAlign:"center",width:"260px"}}>
        <Button onClick={()=>{
          let today =  moment().locale('zh-cn').format('YYYY/MM/DD');
          let start = moment().subtract(1,'month').format('YYYY/MM/DD');
          console.log(start)
          this.setState({registerdate:[start,today]})}} htmlType="button" type="reset" className="middlebutton" style={{width:"230px",backgroundColor:"#5087de"}}>近一个月</Button><br/><br/>

            <Button htmlType="submit" className="middlebutton" 
            //   onClick={()=>{
            //     document.querySelector('#input').click()
            // }}
            style={{width:"100px",backgroundColor:"#5087de"}}>查询</Button>{blank}{blank}{blank}{blank}{blank}{blank}{blank}
            <Button onClick={()=>{this.setState({reset:true})}} htmlType="button" type="reset" className="middlebutton" style={{width:"100px",backgroundColor:"#5087de"}}>取消</Button>
            
        </div>
        <br/>
        <input type="submit" id="input" value="Submit" style={{display:"none"}}></input>  
      </Form>
      <img src={dba03} style={{width:"260px",padding:"0 0 0 10px"}} />
      </Col>
      <Col  span={14}>
      <img src={dbc01} style={{width:"680px",padding:"0 0 0 0px"}} />
      <h1 style={{color:"#499eca",fontSize:"20px",position:"absolute",padding:"0 0 0 25px",marginTop:"-40px"}}>患者列表</h1>
      <div style={{width:"680px",height:"550px",textAlign:"center"}}>
        {/* <img src={fakeformdata5} style={{width:"650px",padding:"10px 0 0 0px"}} ></img> */}
        <TableComponent ref={this.myRef} style={{width:"650px",padding:"10px 0 0 0px"}} filteredInfo={this.state.reset==true?null:{name:this.state.name==undefined?null:[this.state.name],patientnumber:this.state.patientnumber==undefined?null:[this.state.patientnumber],registerdate:this.state.registerdate==undefined?null:[this.state.registerdate]}}/>
        <br />
        <br />
        <div style={{textAlign:"center",display:'none'}}>
              <button className="bottombutton" style={{borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px"}}>修改信息</button>{blank}{blank}
              <button className="bottombutton">删除信息</button>{blank}{blank}
              <button className="bottombutton">浏览图像</button>{blank}{blank}
              <button className="bottombutton">合并浏览</button>{blank}{blank}
              <button className="bottombutton" style={{borderTopRightRadius:"20px",borderBottomRightRadius:"20px"}}>上传信息</button>
        </div>
      </div>
 
      <img src={dbc03} style={{width:"680px",padding:"0 0 0 10px"}} />
      </Col>
      <Col  span={4}>
      {/* <div style={{margin:"60px 0 0 100px"}}>
        <button className="bodybutton" style={{backgroundColor:"#295daa"}}><img src={iconright1} style={{width:"30px"}}></img>
        <br/>
        <p>病案管理</p>
        </button>
        <br/>
        <br/>
        <button className="bodybutton" style={{backgroundColor:"#295daa"}}><img src={iconright2} style={{width:"30px"}}></img>
        <br/>
        <p>患者检查</p>
        </button>
        </div> */}
     </Col>
    </Row>
  </div>)
}
}
export default WorklistPage;