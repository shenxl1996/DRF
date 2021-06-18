import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Row, Col ,Form,message,Progress} from 'antd';
import 'antd/dist/antd.css';
import './App.css'
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
const blank = " ".replace(/ /g, "\u00a0")

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      inputPW:"",
    }
    this.setState.bind(this)
}
render(){
  return(<div id='container' >
          {/* 顶部 */}
    <Row>
      <Col span={8}></Col>
      <Col span={8}>
        <div style={{marginTop:"10px",backgroundImage:`url(${headImg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center 0",width:"100%",height:"70px"}}>
          <h1 style={{color:"#ccd5e1",textAlign:"center",fontSize:"40px"}}>DRF数字影像系统</h1>
        </div>
      </Col>
      <Col span={8}>
        {/* <div style={{textAlign:"right"}}>
          <button className="toprightbutton" onClick={()=>{
            this.systemsetting.handleOpen()
            console.log(this.systemsetting)
          }}><img src={seticon} style={{width:"20px",padding:"0 0 2px 0"}}/>系统设置</button>{blank}{blank}
          <button className="toprightbutton"><img src={outicon} style={{width:"20px",padding:"0 0 2px 0"}}/>退出系统</button>{blank}
        </div> */}
      </Col>

    </Row>
      <Row>
          <Col span={12}>
          <div style={{textAlign:"center"}}>
          <img src={body} style={{width:"300px",padding:"60px 0 0 10px",marginLeft:"70px"}}  draggable={false}/>
        </div>
          </Col>
          <Col span={12}>
              <div style={{textAlign:"center",fontSize:"25px", color:"white",position:"relative",top:"40vh",margin:"0 auto",marginTop:"-160px",opacity:"0.8",border:"3px solid #21438b",width:"500px",height:"300px",backgroundColor:"#20295b",textAlign:"center"}}>
                 <br /> 
                
                  
                  用户选择：
                  <select style={{marginLeft:"20px", backgroundColor:"rgba(0, 0, 0, 1)",width:"220px",height:"40px",color:"white"}}>
                  <option value='' disabled={true} selected style={{display:"none"}}>请选择用户</option>

                    <option value="医师">医师</option>
                    <option value="技师">技师</option>
                    <option value="管理员">管理员</option>
                    {/* <option value="php">php</option> */}

                  </select>
                  <br />
                  <br />
                  密码：{blank}{blank}{blank}{blank}{blank}{blank}  
                  <input type={"password"} style={{marginLeft:"20px", backgroundColor:"rgba(0, 0, 0, 1)",width:"220px",height:"40px",color:"white"}} onChange={(e)=>{this.setState({inputPW:e.target.value})}}></input>
                  <br />
                  {/* <Link to={"/"}> */}
                  <button className={"bodybutton"} style={{width:"350px",fontSize:"25px",marginTop:"50px"} }
                   onClick={()=>{
                     if(this.state.inputPW === "admin")
                     this.props.history.push('/')
                     else{
                       alert("密码错误！请重试")
                     }}}> 进入系统</button>
                  {/* </Link> */}
              </div>
          </Col>
      </Row>
  </div>)
}
}
export default Login;