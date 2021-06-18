import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Row, Col ,Form,message,Progress} from 'antd';
import 'antd/dist/antd.css';
import './App.css'
const blank = " ".replace(/ /g, "\u00a0")

class SystemSetting extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        open:false
    }
    this.setState.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)

}
handleClose() {
    this.setState({open:false})
}

handleOpen() {
    this.setState({open:true})
    console.log("wozhixig")
}
render(){
  return(< Dialog maxWidth={'xl'} style={{}} open={this.state.open} onClose={this.handleClose}>
      
      <div style={{width:"800px",height:"500px",backgroundColor:"#20295b",textAlign:"center"}}>
          <h1 style={{color:"white",marginTop:"20px"}}>系统设置</h1>
          <Row>
              <Col span={12}>
                  <div style={{color:'white',border:"3px solid #21438b",margin:"10px 10px",padding:"10px 10px",height:"320px"}}>
                      基本设置
                      <br/>
                      医院名称：<input style={{width:"150px",height:"18px",marginTop:"15px",color:"black"}}></input>
                      <br/>
                      医院地址：<input style={{width:"150px",height:"18px",marginTop:"15px",color:"black"}}></input>
                      <br/>
                      医院科室：<input style={{width:"150px",height:"18px",marginTop:"15px",color:"black"}}></input>
                      <br/>
                      联系电话：<input style={{width:"150px",height:"18px",marginTop:"15px",color:"black"}}></input>
                      <br/>
                      设备名称：<input style={{width:"150px",height:"18px",marginTop:"15px",color:"black"}}></input>
                      <br/>
                      <br/>
                      <br/>
                  </div>
              </Col>
              <Col span={12}>
              <div style={{color:'white',border:"3px solid #21438b",margin:"10px 10px",padding:"10px 10px",height:"320px"}}>
                      尺寸标定
                      <br/>
                      实际物体尺寸(毫米)：<input style={{width:"100px",height:"18px",marginTop:"15px",color:"black"}} placeholder={"10"}></input>
                      <br/>
                      测量尺寸(像素个数)：<input style={{width:"100px",height:"18px",marginTop:"15px",color:"black"}} placeholder={"100"}></input>
                      <br/>
                      像素间距(毫米/像素)：<input style={{width:"100px",height:"18px",marginTop:"15px",color:"black"}}></input>
                      <br/>
              </div>
              </Col>
          </Row>
          <br/>
          
          <button className="bodybutton" onClick={this.handleClose}>关闭</button>{blank}{blank}{blank}{blank}
          <button className="bodybutton" onClick={this.handleClose}>保存</button>
      </div>
  </Dialog>)
}
}
export default SystemSetting;