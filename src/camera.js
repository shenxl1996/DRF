import React from 'react';
import './App.css'
import * as cornerstone from "cornerstone-core";
import * as cornerstoneMath from "cornerstone-math";
import * as cornerstoneTools from "cornerstone-tools";
import Hammer from "hammerjs";
import * as cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
import * as cornerstoneWebImageLoader from "cornerstone-web-image-loader";
import * as cornerstoneNIFTIImageLoader from "cornerstone-nifti-image-loader"
import * as dicomParser from "dicom-parser";
import Popover from '@material-ui/core/Popover';
import { Row, Col ,Form,message,Progress} from 'antd';
import Dialog from '@material-ui/core/Dialog';
import {Link} from "react-router-dom";
import headImg from './head.png'
import cameraon from './camera.png'
import SystemSetting from './systemSetting'
import axios from 'axios'
import dba01 from './image/db_a_01.png'
import dba02 from './image/db_a_02.png'
import dba03 from './image/db_a_03.png'
import dbb01 from './image/db_b_01.png'
import dbb02 from './image/db_b_02.png'
import dbb03 from './image/db_b_03.png'
import dbc01 from './image/db_c_01.png'
import dbc02 from './image/db_c_02.png'
import dbc03 from './image/db_c_03.png'
import body from './image/DI_AY_326b.png'
import sc01 from './image/sc_01.png'
import sc02 from './image/sc_02.png'
import sc03 from './image/sc_03.png'
import sc04 from './image/sc_04.png'
import fakeformdata from './image/formdata.png'
import fakeformdata2 from './image/formdata2.png'
import fakeformdata3 from './image/formdata3.png'
import fakeformdata4 from './image/formdata4.png'
import seticon from './image/icon/tt_01a.png'
import iconright1 from './image/icon/tt_q01.png'
import iconright2 from './image/icon/tt_q03.png'
import iconplus from './image/icon/an0002.png'
import iconminus from './image/icon/an0001.png'
import an0014 from './image/icon/an0014.png'
import an0015 from './image/icon/an0015.png'
import an0009 from './image/icon/an0009.png'
import an0010 from './image/icon/an0010.png'
import an0011 from './image/icon/an0011.png'
import outicon from './image/icon/tt_q04.png'
import ReportForm from './form'
import fakesidebar from './sidebar.png'
import mainimg from './main.png'
import rightbar from './rightbar.png'
cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
cornerstoneTools.external.Hammer = Hammer;
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWebImageLoader.external.cornerstone = cornerstone;
cornerstoneNIFTIImageLoader.external.cornerstone = cornerstone;
cornerstoneTools.init({ showSVGCursors: true });
const sleep = (ms,arg) => new Promise((resolve) => setTimeout(resolve, ms,arg));
const blank = " ".replace(/ /g, "\u00a0")
const urls = []
const jpgUrls = []
var configuration = {
  markers: ['L','R'],
  current: 'L',
  ascending: true,
  loop: true,
  stack:undefined,
  percent:0,
  open:false,
  crop:false,
  key:1,
  position:[],

}
//进度条间隔时间 毫秒/10%
const interval = 200
for(let i = 0; i <9; i++){
  urls.push('wadouri:http://127.0.0.1:8000/getdicom/?index='+i+"&&key=0")
}
for(let i = 1; i <10; i++){
  jpgUrls.push('http://127.0.0.1:8000/read'+i+'jpg/')
}
const darkimgurl = 'http://127.0.0.1:8000/readdarkjpg/'

class CameraPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value1:0,
      value2:0,
      value3:0,
      value4:0,
      value5:0,
      value6:0,
      value7:0,
      value8:0,
      value9:0,
      value10:0,
      imgIndex:0,
      openreport:false,
      part:"发生器",
      url:darkimgurl,
      jpgUrl:[],
      key:1,
    }
    this.onSetOpenReport = this.onSetOpenReport.bind(this)
    this.onImageRendered = this.onImageRendered.bind(this);
    this.clearMask = this.clearMask.bind(this)
  
}

onImageRendered() {
  // const element = this.element
  // const viewport = cornerstone.getViewport(element);
  // this.setState(viewport)
}

onSetOpenReport() {
  console.log("执行成功")
  this.setState({openreport: !this.state.openreport})
}
componentDidMount(){
  const element = this.element;
  // console.log(element)

  cornerstone.enable(element);
    // wwwc
    const WwwcTool = cornerstoneTools.WwwcTool;
    cornerstoneTools.addTool(WwwcTool)
    cornerstoneTools.setToolActive('Wwwc', { mouseButtonMask: 1 })

    const LTextMarkerTool = cornerstoneTools.LTextMarkerTool;
    cornerstoneTools.addTool(LTextMarkerTool)
    // cornerstoneTools.setToolActive('LTextMarker', { mouseButtonMask: 1 })
    
    const RTextMarkerTool = cornerstoneTools.RTextMarkerTool;
    cornerstoneTools.addTool(RTextMarkerTool)
    // cornerstoneTools.setToolActive('RTextMarker', { mouseButtonMask: 1 })

    // wwwcRegion
    const WwwcRegionTool = cornerstoneTools.WwwcRegionTool;
    cornerstoneTools.addTool(WwwcRegionTool)
// cornerstoneTools.setToolActive('WwwcRegion', { mouseButtonMask: 1 })


    //符号标记
    const TextMarkerTool = cornerstoneTools.TextMarkerTool;
    cornerstoneTools.addTool(TextMarkerTool)
    // cornerstoneTools.setToolActive('TextMarker', { mouseButtonMask: 1 })

    //光标显示信息
    const DragProbeTool = cornerstoneTools.DragProbeTool;
    cornerstoneTools.addTool(DragProbeTool)
    // cornerstoneTools.setToolActive('DragProbe', { mouseButtonMask: 1 })

    //局部放大镜
    const MagnifyTool = cornerstoneTools.MagnifyTool;
    cornerstoneTools.addTool(MagnifyTool)
    // cornerstoneTools.setToolActive('Magnify', { mouseButtonMask: 1 })

    //漫游
    const PanTool = cornerstoneTools.PanTool;
    cornerstoneTools.addTool(PanTool)
    // cornerstoneTools.setToolActive('Pan', { mouseButtonMask: 1 })

    //旋转
    const RotateTool = cornerstoneTools.RotateTool;
    cornerstoneTools.addTool(RotateTool)
    // cornerstoneTools.setToolActive('Rotate', { mouseButtonMask: 1 })

    //拖拽放大
    const ZoomTool = cornerstoneTools.ZoomTool;
    cornerstoneTools.addTool(cornerstoneTools.ZoomTool, {
      // Optional configuration
      configuration: {
        invert: false,
        preventZoomOutsideImage: false,
        minScale: .1,
        maxScale: 20.0,
      }
    });
    // cornerstoneTools.setToolActive('Zoom', { mouseButtonMask: 1 })

    //角度测量
    const AngleTool = cornerstoneTools.AngleTool;
    cornerstoneTools.addTool(AngleTool)
    // cornerstoneTools.setToolActive('Angle', { mouseButtonMask: 1 })

    //箭头标注
    const ArrowAnnotateTool = cornerstoneTools.ArrowAnnotateTool;
    cornerstoneTools.addTool(ArrowAnnotateTool)
    // cornerstoneTools.setToolActive('ArrowAnnotate', { mouseButtonMask: 1 })

    //十字测量
    const BidirectionalTool = cornerstoneTools.BidirectionalTool;
    cornerstoneTools.addTool(BidirectionalTool)
    // cornerstoneTools.setToolActive('Bidirectional', { mouseButtonMask: 1 })

    //不连续角度测量
    const CobbAngleTool = cornerstoneTools.CobbAngleTool;
    cornerstoneTools.addTool(CobbAngleTool)
    // cornerstoneTools.setToolActive('CobbAngle', { mouseButtonMask: 1 })

    //椭圆面积
    const EllipticalRoiTool = cornerstoneTools.EllipticalRoiTool;
    cornerstoneTools.addTool(EllipticalRoiTool)
    // cornerstoneTools.setToolActive('EllipticalRoi', { mouseButtonMask: 1 })

    //任意形状面积
    const FreehandRoiTool = cornerstoneTools.FreehandRoiTool;
    cornerstoneTools.addTool(FreehandRoiTool)
    // cornerstoneTools.setToolActive('FreehandRoi', { mouseButtonMask: 1 })

    //擦除工具
    const EraserTool = cornerstoneTools.EraserTool;
    cornerstoneTools.addTool(EraserTool)
    // cornerstoneTools.setToolActive('Eraser', { mouseButtonMask: 1 })


    //距离测量
    const LengthTool = cornerstoneTools.LengthTool;
    cornerstoneTools.addTool(LengthTool)
    // cornerstoneTools.setToolActive('Length', { mouseButtonMask: 1 })

    //坐标标记
    const ProbeTool = cornerstoneTools.ProbeTool;
    cornerstoneTools.addTool(ProbeTool)
    // cornerstoneTools.setToolActive('Probe', { mouseButtonMask: 1 })

    //矩形面积
    const RectangleRoiTool = cornerstoneTools.RectangleRoiTool;
    cornerstoneTools.addTool(RectangleRoiTool)
    // cornerstoneTools.setToolActive('RectangleRoi', { mouseButtonMask: 1 })
    
    //矩形面积2
    const MyRectangleRoiTool = cornerstoneTools.MyRectangleRoiTool;
    cornerstoneTools.addTool(MyRectangleRoiTool)
    // cornerstoneTools.setToolActive('RectangleRoi', { mouseButtonMask: 1 })
    //圆形标注
    const CircleScissorsTool = cornerstoneTools.CircleScissorsTool;
    cornerstoneTools.addTool(CircleScissorsTool)
    // cornerstoneTools.setToolActive('CircleScissors', { mouseButtonMask: 1 })

    //任意形状标注
    const FreehandScissorsTool = cornerstoneTools.FreehandScissorsTool;
    cornerstoneTools.addTool(FreehandScissorsTool)
    // cornerstoneTools.setToolActive('FreehandScissors', { mouseButtonMask: 1 })

    //矩形标注
    const RectangleScissorsTool = cornerstoneTools.RectangleScissorsTool;
    cornerstoneTools.addTool(RectangleScissorsTool)
    // cornerstoneTools.setToolActive('RectangleScissors', { mouseButtonMask: 1 })

    //增加overlay
    const ScaleOverlayTool = cornerstoneTools.ScaleOverlayTool;
    cornerstoneTools.addTool(ScaleOverlayTool)
    cornerstoneTools.setToolActive('ScaleOverlay', {})

  if(this.state.url.length > 5) 
  cornerstone.loadAndCacheImage(this.state.url).then(image => {cornerstone.displayImage(element, image);
    element.addEventListener('cornerstonetoolsmeasurementcompleted',(e)=>{ 
      const toolroidata = e.detail.measurementData.handles
      if(e.detail.toolName == "MyRectangleRoi"){
      let x1 = toolroidata.start.x
      let y1 = toolroidata.start.y
      let x2 = toolroidata.end.x
      let y2 = toolroidata.end.y
      if(x1 > x2){
        let temp = x2;
        x2 = x1;
        x1 = temp;
      }
      if(y1 > y2){
        let temp = y2;
        y2 = y1;
        y1 = temp;
      }
      
      const cropindex = this.state.imgIndex
      console.log(this.state.url)
      x1 = Math.floor(x1)
      y1 = Math.floor(y1)
      x2 = Math.ceil(x2)
      y2 = Math.ceil(y2)
      x2 = Math.min(x2,1024)
      y2 = Math.min(y2,1024)
      if([x1,y1,x2,y2] === this.state.position) return;
      console.log(x1,y1,x2,y2,this.state.imgIndex)
      this.setState({position:[x1,y1,x2,y2]})
      let response
      (async ()=>{
        var formdata = new FormData()
        formdata.append("position",[x1,y1,x2,y2])
        formdata.append("index",cropindex-1)
        await axios.post('http://localhost:8000/cropdata/', formdata)
        .then(()=>{
          this.setState({crop:true,key:this.state.key+1,
            url:this.state.url.split("&&")[0]+'&&key='+this.state.key
          })
        })
      })()
    }
      })
   
  });

}
componentDidUpdate(){
  const element = this.element;
  // cornerstone.enable(element);

  const currentImageId = cornerstone.getEnabledElement(this.element).image.imageId;
  if(this.state.url != currentImageId)
    cornerstone.loadAndCacheImage(this.state.url).then(image => {cornerstone.displayImage(element, image);
      console.log("状态更新")
      const stack = this.state.stack;
      cornerstoneTools.addToolState(element, "stack", stack);
      
    })
}
onDisableAll() {
  cornerstoneTools.setToolPassive('Wwwc', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('WwwcRegion', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('DragProbe', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('Magnify', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('TextMarker', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('LTextMarker', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('RTextMarker', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('Rotate', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('Zoom', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('Angle', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('ArrowAnnotate', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('Bidirectional', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('CobbAngle', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('EllipticalRoi', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('FreehandRoi', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('Length', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('Probe', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('RectangleRoi', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('MyRectangleRoi', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('CircleScissors', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('FreehandScissors', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('RectangleScissors', { mouseButtonMask: 1 });
  cornerstoneTools.setToolPassive('Eraser', { mouseButtonMask: 1 });
}
clearMask() {
  {
                
    if(this.state.stack === undefined) return;
    let element = this.element
    const sc = 1024
    const sr = 1024
    const imageIdIndex = 0;
    const { configuration, getters, setters } = cornerstoneTools.getModule(
      "segmentation"
    );
    configuration.fillAlpha = 0.05;
    configuration.fillAlphaInactive = 0.05;
    // console.log( getters.labelmap2D(element))
    const {
      labelmap3D // The `Labelmapc3D` for this stack.
    } = getters.labelmap2D(element);
    const l2dforImageIdIndex = getters.labelmap2DByImageIdIndex(
      labelmap3D,
      imageIdIndex,
      sr,
      sc
    );
        for (let r = 0; r < sr; r++) {
          for (let c = 0; c < sc; c++) {
            const k = r * sr + c;
            l2dforImageIdIndex.pixelData[k] = 0;
          }}
    setters.updateSegmentsOnLabelmap2D(l2dforImageIdIndex);
    cornerstone.updateImage(element);
  }
}
render(){
  const key = 'updatable';
  const success = () => {
    message.loading({ content: '采集影像中', key ,
    style: {
      marginTop: '10vh',marginLeft:"-20vw"
    },
  });

    setTimeout(()=>{message.success({ content: '采集成功!',key, duration: 0.5 ,
    style: {
      marginTop: '10vh',marginLeft:"-20vw"
    },});
    let jpgUrl = this.state.jpgUrl;
    if(this.state.imgIndex<=urls.length-1) jpgUrl.push(jpgUrls[this.state.imgIndex])
    this.clearMask()

    this.setState({url:urls[this.state.imgIndex],stack:{
      imageIds: [urls[this.state.imgIndex]],
      currentImageIdIndex: 0
    },imgIndex:this.state.imgIndex==urls.length-1?this.state.imgIndex:this.state.imgIndex+1,key:this.state.key+1,
    jpgUrl})
    this.onDisableAll();
    cornerstoneTools.setToolActive('Wwwc', { mouseButtonMask: 1 });
    
  }, 500);
  };
  var saveFile = function (data, filename) {
    var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
    save_link.href = data;
    save_link.download = filename;

    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    save_link.dispatchEvent(event);
  }
  var screenshot = () => {

    const canvas = document.getElementsByClassName("cornerstone-canvas")[0];
    let dataURL = canvas.toDataURL("image/jpeg");
  
    saveFile(dataURL, 'test.jpg');
  }

  return(<div  id='container'>

          {/* 顶部 */}
    <Row>
      <Col span={8}></Col>
      <Col span={8}>
    <SystemSetting open={true} 
              ref={input => {
                this.systemsetting = input;
              }}/>

        <div style={{marginTop:"20px",backgroundImage:`url(${headImg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center 0",width:"100%",height:"40px"}}>
          <h1 style={{color:"#ccd5e1",textAlign:"center",fontSize:"20px"}}>DRF数字影像系统</h1>
        </div>
      </Col>
      <Col span={8}>
        <div style={{textAlign:"right"}}>
          <button className="toprightbutton" onClick={()=>{
            this.systemsetting.handleOpen()
            console.log(this.systemsetting)
          }}><img src={seticon} style={{width:"20px",padding:"0 0 2px 0"}} />系统设置</button>{blank}{blank}
          <Link to={"/login"}>
          <button className="toprightbutton"><img src={outicon} style={{width:"20px",padding:"0 0 2px 0"}}/>退出系统</button>{blank}
          </Link>
        </div>
      </Col>
    </Row>
     {/* 左侧 */}
     <Row>
      <Col span={2}>
      <div style={{height:"90vh",width:"100%",backgroundColor:"#081f37",textAlign:"center",overflow:"scroll",border:"1px solid white"}}>
        <br/>
      {/* <img src="http://127.0.0.1:8000/read1jpg/" style={{width:"90%"}}></img> */}
      {this.state.jpgUrl.map((url,index)=>{
        return (<img key={index} src={url} style={{width:"90%",border:"1px solid white",marginBottom:"10px"}} onDoubleClick={()=>{this.clearMask();
          this.setState({imgIndex:index,url:urls[this.state.imgIndex]})}}></img>)
      })}
      </div>
      </Col>

      {/* 图像采集区域 */}
      <Col  span={16}>
        <div style={{width:"99%",height:"100%",backgroundColor:"black",border:"1px solid white"}}
          // key = {this.state.key}
          ref={input => {
            this.element = input;
          }}
        >
              <canvas  
              className="cornerstone-canvas"/>
        </div>

      </Col>
      
      {/* 控制面板 */}
      <Col span={4}>
        {/* <img src={rightbar} style={{width:"200px"}}></img> */}
        <div style={{position:"absolute",marginTop:"-10px"}}>
          <button className="bodybutton" style={{width:"50px",fontSize:"6px",padding:"5px 0px",margin:"0px 1px",backgroundColor:"#2d65cf",borderBottomRightRadius:"0px",borderBottomLeftRadius:"0px"}} onClick={()=>{this.setState({part:"发生器"})}}>发生器</button>
          <button className="bodybutton" style={{width:"50px",fontSize:"6px",padding:"5px 0px",margin:"0px 1px",backgroundColor:"#2d65cf",borderBottomRightRadius:"0px",borderBottomLeftRadius:"0px"}} onClick={()=>{this.setState({part:"图像采集"})}}>图像采集</button>
          <button className="bodybutton" style={{width:"50px",fontSize:"6px",padding:"5px 0px",margin:"0px 1px",backgroundColor:"#2d65cf",borderBottomRightRadius:"0px",borderBottomLeftRadius:"0px"}} onClick={()=>{this.setState({part:"图像处理"})}}>图像处理</button>
          <button className="bodybutton" style={{width:"50px",fontSize:"6px",padding:"5px 0px",margin:"0px 1px",backgroundColor:"#2d65cf",borderBottomRightRadius:"0px",borderBottomLeftRadius:"0px"}} onClick={()=>{this.setState({part:"胶片打印"})}}>胶片打印</button>
          </div>
        {this.state.part==="发生器"&&(
                  <div style={{backgroundColor:"#02070D",width:"210px",height:"90vh",textAlign:"center",overflow:"hidden",overflowX:"hidden"}}>
                  <br/>
                  <br/>
                <img src={cameraon} style={{width:"40px"}}></img>
        
          
                  <input style={{width:"100px"}} placeholder="请输入"/>
                  <p className="formhead" style={{width:"50px",marginLeft:"0px",padding:"5px 0",backgroundColor:"#3071d2"}}>确定</p>
                  <br/>
        
                  <p style={{width:"200px",color:"white",backgroundColor:"#335f9e",padding:"5px 10px",marginTop:"10px"}}>透视</p>
                  <div style={{color:"white"}}>
                  {blank}KV:{blank}{blank}
                    <button onClick={()=>{this.setState({value1:this.state.value1-1})
                    axios.get("http://127.0.0.1:8000/performSDK/?info=KVset"+`${this.state.value1-1}`)
                  }} className="bodybutton" style={{backgroundColor:"#1265d8",padding:"0px 0px",borderBottomRightRadius:"0px",borderTopRightRadius:"0px"}}><img src={iconminus} style={{width:"30px"}}></img></button>
                    {/* <div style={{color:"#4baf61",width:"10px"}}>0</div> */}
                    <p style={{width:"70px",display:"inline-block",color:"#50bc74",fontSize:"20px",borderTop:"1px solid #2e4c87",borderBottom:"1px solid #2e4c87",textAlign:"right",verticalAlign:"top",marginBottom:"5px"}}>{this.state.value1}{blank}</p>
                    <button  onClick={()=>{this.setState({value1:this.state.value1+1})
                    axios.get("http://127.0.0.1:8000/performSDK/?info=KVset"+`${this.state.value1+1}`)
                  }} className="bodybutton" style={{backgroundColor:"#1265d8",padding:"0px 0px",borderBottomLeftRadius:"0px",borderTopLeftRadius:"0px"}}><img src={iconplus} style={{width:"30px"}}></img></button>
                  </div>
                  <div style={{color:"white"}}>
                  {blank}mA:{blank}{blank}
                    <button  onClick={()=>{this.setState({value2:this.state.value2-1})
                    axios.get("http://127.0.0.1:8000/performSDK/?info=mAset"+`${this.state.value2-1}`)
                  }}  className="bodybutton" style={{backgroundColor:"#1265d8",padding:"0px 0px",borderBottomRightRadius:"0px",borderTopRightRadius:"0px"}}><img src={iconminus} style={{width:"30px"}}></img></button>
                    {/* <div style={{color:"#4baf61",width:"10px"}}>0</div> */}
                    <p style={{width:"70px",display:"inline-block",color:"#50bc74",fontSize:"20px",borderTop:"1px solid #2e4c87",borderBottom:"1px solid #2e4c87",textAlign:"right",verticalAlign:"top",marginBottom:"5px"}}>{this.state.value2}{blank}</p>
                    <button  onClick={()=>{this.setState({value2:this.state.value2+1})
                    axios.get("http://127.0.0.1:8000/performSDK/?info=mAset"+`${this.state.value2+1}`)
                  }} className="bodybutton" style={{backgroundColor:"#1265d8",padding:"0px 0px",borderBottomLeftRadius:"0px",borderTopLeftRadius:"0px"}}><img src={iconplus} style={{width:"30px"}}></img></button>
                  </div>
                  <div style={{color:"white"}}>
                    MIN:{blank}{blank}
                    <button  onClick={()=>{this.setState({value3:this.state.value3-1})
                    axios.get("http://127.0.0.1:8000/performSDK/?info=MINset"+`${this.state.value3-1}`)
                  }} className="bodybutton" style={{backgroundColor:"#1265d8",padding:"0px 0px",borderBottomRightRadius:"0px",borderTopRightRadius:"0px"}}><img src={iconminus} style={{width:"30px"}}></img></button>
                    {/* <div style={{color:"#4baf61",width:"10px"}}>0</div> */}
                    <p style={{width:"70px",display:"inline-block",color:"#50bc74",fontSize:"20px",borderTop:"1px solid #2e4c87",borderBottom:"1px solid #2e4c87",textAlign:"right",verticalAlign:"top",marginBottom:"5px"}}>{this.state.value3}{blank}</p>
                    <button  onClick={()=>{this.setState({value3:this.state.value3+1})
                    axios.get("http://127.0.0.1:8000/performSDK/?info=MINset"+`${this.state.value3+1}`)

                  }} className="bodybutton" style={{backgroundColor:"#1265d8",padding:"0px 0px",borderBottomLeftRadius:"0px",borderTopLeftRadius:"0px"}}><img src={iconplus} style={{width:"30px"}}></img></button>
                  </div>
                  <div style={{color:"white"}}>
                    ABS:{blank}{blank}
                    <button onClick={()=>{this.setState({value4:this.state.value4-1})
                    axios.get("http://127.0.0.1:8000/performSDK/?info=ABSset"+`${this.state.value4-1}`)
                  }}  className="bodybutton" style={{backgroundColor:"#1265d8",padding:"0px 0px",borderBottomRightRadius:"0px",borderTopRightRadius:"0px"}}><img src={iconminus} style={{width:"30px"}}></img></button>
                    {/* <div style={{color:"#4baf61",width:"10px"}}>0</div> */}
                    <p style={{width:"70px",display:"inline-block",color:"#50bc74",fontSize:"20px",borderTop:"1px solid #2e4c87",borderBottom:"1px solid #2e4c87",textAlign:"right",verticalAlign:"top",marginBottom:"5px"}}>{this.state.value4}{blank}</p>
                    <button  onClick={()=>{this.setState({value4:this.state.value4+1})
                    axios.get("http://127.0.0.1:8000/performSDK/?info=ABSset"+`${this.state.value4+1}`)
                  
                  }} className="bodybutton" style={{backgroundColor:"#1265d8",padding:"0px 0px",borderBottomLeftRadius:"0px",borderTopLeftRadius:"0px"}}><img src={iconplus} style={{width:"30px"}}></img></button>
                  </div>
                  <div style={{color:"white"}}>
                  {blank}FR:{blank}{blank}
                    <button onClick={()=>{this.setState({value5:this.state.value5-1})
                    axios.get("http://127.0.0.1:8000/performSDK/?info=FRset"+`${this.state.value5-1}`)
                  
                  }}  className="bodybutton" style={{backgroundColor:"#1265d8",padding:"0px 0px",borderBottomRightRadius:"0px",borderTopRightRadius:"0px"}}><img src={iconminus} style={{width:"30px"}}></img></button>
                    {/* <div style={{color:"#4baf61",width:"10px"}}>0</div> */}
                    <p style={{width:"70px",display:"inline-block",color:"#50bc74",fontSize:"20px",borderTop:"1px solid #2e4c87",borderBottom:"1px solid #2e4c87",borderRight:"1px solid #2e4c87",textAlign:"right",verticalAlign:"top",marginRight:"22px",marginBottom:"5px"}}>{this.state.value5}{blank}</p>
                    {/* <button className="bodybutton" style={{backgroundColor:"#1265d8",padding:"0px 0px",borderBottomLeftRadius:"0px",borderTopLeftRadius:"0px"}}><img src={iconplus} style={{width:"30px"}}></img></button> */}
                  </div>
                  <button className="bodybutton" style={{backgroundColor:"#1265d8",padding:"3px 30px"}}><img src={an0014} style={{width:"25px"}}></img></button>{blank}{blank}
                  <button className="bodybutton" style={{backgroundColor:"#1265d8",padding:"3px 30px"}}><img src={an0015} style={{width:"25px"}}></img></button>
                  <p style={{width:"200px",color:"white",backgroundColor:"#335f9e",padding:"5px 10px",marginTop:"10px",marginBottom:"5px"}}>摄影</p>
                  <button className="bodybutton" style={{backgroundColor:"#1265d8",padding:"3px 3px"}}><img src={sc01} style={{width:"20px"}}></img></button>{blank}{blank}{blank}{blank}
                  <button className="bodybutton" style={{backgroundColor:"#1265d8",padding:"3px 3px"}}><img src={sc02} style={{width:"20px"}}></img></button>{blank}{blank}{blank}{blank}
                  <button className="bodybutton" style={{backgroundColor:"#1265d8",padding:"3px 3px"}}><img src={sc03} style={{width:"20px"}}></img></button>{blank}{blank}{blank}{blank}
                  <button className="bodybutton" style={{backgroundColor:"#1265d8",padding:"3px 3px"}}><img src={sc04} style={{width:"20px"}}></img></button>
                  <br />
                  <button className="bodybutton" style={{backgroundColor:"#1265d8",padding:"3px 6px",marginTop:"6px",marginBottom:"6px"}}>mA/ms</button>{blank}{blank}{blank}{blank}
                  <button className="bodybutton" style={{backgroundColor:"#1265d8",padding:"3px 6px",marginTop:"6px"}}>mAs</button>{blank}{blank}{blank}{blank}
                  <button className="bodybutton" style={{backgroundColor:"#1265d8",padding:"3px 6px",marginTop:"6px"}}>AEC</button>
        
                  <div style={{color:"white"}}>
                  {blank}KV:{blank}{blank}
                    <button onClick={()=>{this.setState({value6:this.state.value6-1})
                    axios.get("http://127.0.0.1:8000/performSDK/?info=KVset"+`${this.state.value6-1}`)
                  
                  }}  className="bodybutton" style={{backgroundColor:"#1265d8",padding:"0px 0px",borderBottomRightRadius:"0px",borderTopRightRadius:"0px"}}><img src={iconminus} style={{width:"30px"}}></img></button>
                    {/* <div style={{color:"#4baf61",width:"10px"}}>0</div> */}
                    <p style={{width:"70px",display:"inline-block",color:"#50bc74",fontSize:"20px",borderTop:"1px solid #2e4c87",borderBottom:"1px solid #2e4c87",textAlign:"right",verticalAlign:"top",marginBottom:"5px"}}>{this.state.value6}{blank}</p>
                    <button onClick={()=>{this.setState({value6:this.state.value6+1})
                    axios.get("http://127.0.0.1:8000/performSDK/?info=KVset"+`${this.state.value6+1}`)
                  }}  className="bodybutton" style={{backgroundColor:"#1265d8",padding:"0px 0px",borderBottomLeftRadius:"0px",borderTopLeftRadius:"0px"}}><img src={iconplus} style={{width:"30px"}}></img></button>
                  </div>
                  <div style={{color:"white"}}>
                  mAs:{blank}{blank}
                    <button  onClick={()=>{this.setState({value7:this.state.value7-1})
                    axios.get("http://127.0.0.1:8000/performSDK/?info=mAsset"+`${this.state.value7-1}`)
                  
                  }} className="bodybutton" style={{backgroundColor:"#1265d8",padding:"0px 0px",borderBottomRightRadius:"0px",borderTopRightRadius:"0px"}}><img src={iconminus} style={{width:"30px"}}></img></button>
                    {/* <div style={{color:"#4baf61",width:"10px"}}>0</div> */}
                    <p style={{width:"70px",display:"inline-block",color:"#50bc74",fontSize:"20px",borderTop:"1px solid #2e4c87",borderBottom:"1px solid #2e4c87",textAlign:"right",verticalAlign:"top",marginBottom:"5px"}}>{this.state.value7}{blank}</p>
                    <button  onClick={()=>{this.setState({value7:this.state.value7+1})
                    axios.get("http://127.0.0.1:8000/performSDK/?info=mAsset"+`${this.state.value7+1}`)
                  }} className="bodybutton" style={{backgroundColor:"#1265d8",padding:"0px 0px",borderBottomLeftRadius:"0px",borderTopLeftRadius:"0px",marginRight:"10px"}}><img src={iconplus} style={{width:"30px"}}></img></button>
                  </div>
                  <div style={{color:"white"}}>
                    MA:{blank}{blank}
                    <button  onClick={()=>{this.setState({value8:this.state.value8-1})
                    axios.get("http://127.0.0.1:8000/performSDK/?info=mAset"+`${this.state.value8-1}`)
                  }} className="bodybutton" style={{backgroundColor:"#1265d8",padding:"0px 0px",borderBottomRightRadius:"0px",borderTopRightRadius:"0px"}}><img src={iconminus} style={{width:"30px"}}></img></button>
                    {/* <div style={{color:"#4baf61",width:"10px"}}>0</div> */}
                    <p style={{width:"70px",display:"inline-block",color:"#50bc74",fontSize:"20px",borderTop:"1px solid #2e4c87",borderBottom:"1px solid #2e4c87",textAlign:"right",verticalAlign:"top",marginBottom:"5px"}}>{this.state.value8}{blank}</p>
                    <button  onClick={()=>{this.setState({value8:this.state.value8+1})
                    axios.get("http://127.0.0.1:8000/performSDK/?info=mAset"+`${this.state.value8+1}`)
                  }} className="bodybutton" style={{backgroundColor:"#1265d8",padding:"0px 0px",borderBottomLeftRadius:"0px",borderTopLeftRadius:"0px"}}><img src={iconplus} style={{width:"30px"}}></img></button>
                  </div>
                  <div style={{color:"white"}}>
                    ms:{blank}{blank}
                    <button  onClick={()=>{this.setState({value9:this.state.value9-1})
                    axios.get("http://127.0.0.1:8000/performSDK/?info=msset"+`${this.state.value9-1}`)
                  }} className="bodybutton" style={{backgroundColor:"#1265d8",padding:"0px 0px",borderBottomRightRadius:"0px",borderTopRightRadius:"0px"}}><img src={iconminus} style={{width:"30px"}}></img></button>
                    {/* <div style={{color:"#4baf61",width:"10px"}}>0</div> */}
                    <p style={{width:"70px",display:"inline-block",color:"#50bc74",fontSize:"20px",borderTop:"1px solid #2e4c87",borderBottom:"1px solid #2e4c87",textAlign:"right",verticalAlign:"top",marginBottom:"5px"}}>{this.state.value9}{blank}</p>
                    <button  onClick={()=>{this.setState({value9:this.state.value9+1})
                    axios.get("http://127.0.0.1:8000/performSDK/?info=msset"+`${this.state.value9+1}`)
                  }} className="bodybutton" style={{backgroundColor:"#1265d8",padding:"0px 0px",borderBottomLeftRadius:"0px",borderTopLeftRadius:"0px"}}><img src={iconplus} style={{width:"30px"}}></img></button>
                  </div>
                  <div style={{color:"white"}}>
                  DEN:{blank}{blank}
                  <button  onClick={()=>{this.setState({value10:this.state.value10-1})
                    axios.get("http://127.0.0.1:8000/performSDK/?info=DENset"+`${this.state.value10-1}`)
                  }} className="bodybutton" style={{backgroundColor:"#1265d8",padding:"0px 0px",borderBottomRightRadius:"0px",borderTopRightRadius:"0px"}}><img src={iconminus} style={{width:"30px"}}></img></button>
                    {/* <div style={{color:"#4baf61",width:"10px"}}>0</div> */}
                    <p style={{width:"70px",display:"inline-block",color:"#50bc74",fontSize:"20px",borderTop:"1px solid #2e4c87",borderBottom:"1px solid #2e4c87",textAlign:"right",verticalAlign:"top",marginBottom:"5px"}}>{this.state.value10}{blank}</p>
                    <button  onClick={()=>{this.setState({value10:this.state.value10+1})
                    axios.get("http://127.0.0.1:8000/performSDK/?info=DENset"+`${this.state.value10+1}`)
                  }} className="bodybutton" style={{backgroundColor:"#1265d8",padding:"0px 0px",borderBottomLeftRadius:"0px",borderTopLeftRadius:"0px",marginRight:"10px"}}><img src={iconplus} style={{width:"30px"}}></img></button>
                  </div>
                  <button className="bodybutton" style={{backgroundColor:"#1265d8",padding:"3px 3px"}}><img src={an0009} style={{width:"20px"}}></img></button>{blank}{blank}{blank}{blank}
                  <button className="bodybutton" style={{backgroundColor:"#1265d8",padding:"3px 3px"}}><img src={an0010} style={{width:"20px"}}></img></button>{blank}{blank}{blank}{blank}
                  <button className="bodybutton" style={{backgroundColor:"#1265d8",padding:"3px 3px"}}><img src={an0011} style={{width:"20px"}}></img></button>
                </div>
        )}

        {this.state.part==="图像采集"&&(
            <div style={{backgroundColor:"#02070D",width:"210px",height:"90vh",textAlign:"center",overflow:"hidden",overflowX:"hidden"}}>
            <br />
            <br />
            <button className="bodybutton" onClick={success}>摄影</button>
            <p style={{width:"200px",color:"white",backgroundColor:"#335f9e",padding:"5px 10px",marginTop:"10px",marginBottom:"5px"}}>实时采集</p>
            <button className="bodybutton" style={{width:"80px"}} onClick={()=>{
                  let element = this.element
                  const viewport = cornerstone.getViewport(element);
                  viewport.hflip = !viewport.hflip
                  cornerstone.setViewport(element, viewport)
            }}>水平镜像</button>{blank}{blank}{blank}
            <button className="bodybutton" style={{width:"80px"}} onClick={()=>{
                  let element = this.element
                  const viewport = cornerstone.getViewport(element);
                  viewport.vflip = !viewport.vflip
                  cornerstone.setViewport(element, viewport)
            }}>上下翻转</button>
            <br />
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}} onClick={()=>{
                  let element = this.element
                  const viewport = cornerstone.getViewport(element);
                  viewport.rotation = (viewport.rotation+90)%360
                  cornerstone.setViewport(element, viewport)
            }}>顺时针</button>{blank}{blank}{blank}
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}} onClick={()=>{
                  let element = this.element
                  const viewport = cornerstone.getViewport(element);
                  viewport.rotation = (viewport.rotation+360-90)%360
                  cornerstone.setViewport(element, viewport)
            }}>逆时针</button>
            <br />
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}} onClick={()=>{
                  let element = this.element
                  const viewport = cornerstone.getViewport(element);
                  viewport.invert = true;
                  cornerstone.setViewport(element, viewport)
            }}>反白</button>{blank}{blank}{blank}
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}} onClick={()=>{
                  let element = this.element
                  const viewport = cornerstone.getViewport(element);
                  viewport.invert = false;
                  cornerstone.setViewport(element, viewport)
            }}> 还原</button>
            <br />
            <button className="bodybutton" style={{width:"80px",marginTop:"10px",marginLeft:"10px"}} onClick={()=>{
                            this.onDisableAll();
                            cornerstoneTools.setToolActive('WwwcRegion', { mouseButtonMask: 1 });
            }}>区域WW/WC</button>{blank}{blank}{blank}<br/>

            <button className="bodybutton" style={{width:"80px",marginTop:"10px",marginLeft:"10px"}} onClick={()=>screenshot()}>快照保存</button>{blank}{blank}{blank}
                      <br />
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}}  onClick={()=>{
              this.onDisableAll();
              cornerstoneTools.setToolActive('MyRectangleRoi', { mouseButtonMask: 1 });

            }}>裁切</button>
            
            <br />
            <button className="bodybutton" style={{width:"80px",marginTop:"10px",marginLeft:"10px"}} onClick={()=>{
              if(this.state.stack === undefined) return;
              (async () => {
                this.setState({percent:0})
                let params = {index:this.state.imgIndex-1}
                this.setState({open:true})
                this.setState({percent:10})
                await axios.get("http://127.0.0.1:8000/readmask1/",{params}).then(res=>{
                  let maskArr = res.data.data
                  let element = this.element
                  const sc = 1024
                  const sr = 1024
                  const imageIdIndex = 0;
                  const { configuration, getters, setters } = cornerstoneTools.getModule(
                    "segmentation"
                  );
                  configuration.fillAlpha = 0.5;
                  configuration.fillAlphaInactive = 0.5;
                  // console.log( getters.labelmap2D(element))
                  const {
                    labelmap3D // The `Labelmapc3D` for this stack.
                  } = getters.labelmap2D(element);
                  const l2dforImageIdIndex = getters.labelmap2DByImageIdIndex(
                    labelmap3D,
                    imageIdIndex,
                    sr,
                    sc
                  );
                  for(let kk = 0; kk < sr * sc; kk++){
                    l2dforImageIdIndex.pixelData[kk] = maskArr[kk]}
                  setters.updateSegmentsOnLabelmap2D(l2dforImageIdIndex);
                }).then(()=>{this.setState({percent:10})})
                .then(async ()=>{await sleep(interval);
                }).then(()=>{this.setState({percent:20})})
                .then(async ()=>{await sleep(interval);
                }).then(async ()=>{await sleep(interval);
                }).then(()=>{this.setState({percent:30})})
                .then(async ()=>{await sleep(interval);
                }).then(()=>{this.setState({percent:40})})
                .then(async ()=>{await sleep(interval);
                }).then(async ()=>{await sleep(interval);
                }).then(()=>{this.setState({percent:50})})
                .then(async ()=>{await sleep(interval);
                }).then(()=>{this.setState({percent:60})})
                .then(async ()=>{await sleep(interval);
                }).then(async ()=>{await sleep(interval);
                }).then(()=>{this.setState({percent:70})})
                .then(async ()=>{await sleep(interval);
                }).then(()=>{this.setState({percent:80})})
                .then(async ()=>{await sleep(interval);
                }).then(()=>{this.setState({percent:90})})
                .then(async ()=>{await sleep(interval);
                }).then(()=>{this.setState({percent:100})})
                .then(async ()=>{await sleep(interval);
                }).then(()=>{this.setState({percent:100,open:false})
                const element = this.element
                cornerstone.updateImage(element);
                alert("该患者患有气胸")
              })
              })()

            }}>智能分割</button>{blank}{blank}{blank}
            <Dialog open={this.state.open} > 
              <div style={{width:"300px", height:"100px",textAlign:"center",margin:"20px 20px"}}>
              <h1>智能分析中...</h1><br/>
                <Progress style={{width:"300px"}} percent={this.state.percent} status={this.state.percent===100?"success":"active"}></Progress>
              </div>
            </Dialog>
              <button className="bodybutton" style={{width:"80px",marginTop:"10px",marginLeft:"10px"}} onClick={()=>this.clearMask()}>关闭遮罩</button>
            </div>
            
        )}
        {this.state.part === "图像处理" &&(
            <div style={{backgroundColor:"#02070D",width:"210px",height:"90vh",textAlign:"center",overflow:"hidden",overflowX:"hidden"}}>
            <br />
           
            <p style={{width:"200px",color:"white",backgroundColor:"#335f9e",padding:"5px 10px",marginTop:"10px",marginBottom:"5px"}}>图像处理</p>
            <button className="bodybutton" style={{width:"80px"}} onClick={()=>{
                  let element = this.element
                  const viewport = cornerstone.getViewport(element);
                  viewport.hflip = !viewport.hflip
                  cornerstone.setViewport(element, viewport)
            }}>水平镜像</button>{blank}{blank}{blank}
            <button className="bodybutton" style={{width:"80px"}} onClick={()=>{
                  let element = this.element
                  const viewport = cornerstone.getViewport(element);
                  viewport.vflip = !viewport.vflip
                  cornerstone.setViewport(element, viewport)
            }}>上下翻转</button>
            <br />
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}} onClick={()=>{
                  let element = this.element
                  const viewport = cornerstone.getViewport(element);
                  viewport.rotation = (viewport.rotation+90)%360
                  cornerstone.setViewport(element, viewport)
            }}>顺时针</button>{blank}{blank}{blank}
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}} onClick={()=>{
                  let element = this.element
                  const viewport = cornerstone.getViewport(element);
                  viewport.rotation = (viewport.rotation+360-90)%360
                  cornerstone.setViewport(element, viewport)
            }}>逆时针</button>
            <br />
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}} onClick={()=>{
                  let element = this.element
                  const viewport = cornerstone.getViewport(element);
                  viewport.invert = true;
                  cornerstone.setViewport(element, viewport)
            }}>反白</button>{blank}{blank}{blank}
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}} onClick={()=>{
                  let element = this.element
                  const viewport = cornerstone.getViewport(element);
                  viewport.invert = false;
                  cornerstone.setViewport(element, viewport)
            }}> 还原</button>
            <br />
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}} onClick={()=>{
              this.onDisableAll();
              cornerstoneTools.setToolActive('Rotate', { mouseButtonMask: 1 });

            }}>旋转</button>{blank}{blank}{blank}
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}} onClick={()=>{
              this.onDisableAll();
              cornerstoneTools.setToolActive('Pan', { mouseButtonMask: 1 });

            }}>漫游</button>
            <br />
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}}  onClick={()=>{
              this.onDisableAll();
              cornerstoneTools.setToolActive('Zoom', { mouseButtonMask: 1 });

            }}>放大</button>{blank}{blank}{blank}
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}}  onClick={()=>{
              this.onDisableAll();
              cornerstoneTools.setToolActive('Wwwc', { mouseButtonMask: 1 });

            }}>窗宽窗位</button>
            <br/>
            <p style={{width:"200px",color:"white",backgroundColor:"#335f9e",padding:"5px 10px",marginTop:"10px",marginBottom:"5px"}}>标记测量</p>
            <br />
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}} onClick={()=>{
              this.onDisableAll();
              cornerstoneTools.setToolActive('TextMarker', { mouseButtonMask: 1 });
            }}>文字标记</button>{blank}{blank}{blank}
            <br />
              <button className="bodybutton" style={{width:"80px",marginTop:"10px"}} onClick={()=>{
              this.onDisableAll();
              cornerstoneTools.setToolActive('LTextMarker', { mouseButtonMask: 1 });
            }}>L标记</button>{blank}{blank}{blank}            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}} onClick={()=>{
              this.onDisableAll();
              cornerstoneTools.setToolActive('RTextMarker', { mouseButtonMask: 1 });
            }}>R标记</button>
            {/* <button className="bodybutton" style={{width:"80px",marginTop:"10px"}} onClick={()=>{
              this.onDisableAll();
              console.log(cornerstoneTools.removeTool)
              const TextMarkerTool = cornerstoneTools.TextMarkerTool;
              configuration = {
                markers: ['R'],
                current: 'R',
                ascending: true,
                loop: true,
              }
              cornerstoneTools.removeTool(TextMarkerTool)
              
              cornerstoneTools.addTool(TextMarkerTool, { configuration })
              cornerstoneTools.setToolActive('TextMarker', { mouseButtonMask: 1 });

            }}>R标记</button> */}
            <br />
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}}  onClick={()=>{
              this.onDisableAll();
              cornerstoneTools.setToolActive('ArrowAnnotate', { mouseButtonMask: 1 });

            }}>箭头标记</button>{blank}{blank}{blank}
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}}  onClick={()=>{
              this.onDisableAll();
              cornerstoneTools.setToolActive('Bidirectional', { mouseButtonMask: 1 });

            }}>交叉测量</button>
            <br/>
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}} onClick={()=>{
              this.onDisableAll();
              cornerstoneTools.setToolActive('CobbAngle', { mouseButtonMask: 1 });

            }}>Cobb角</button>{blank}{blank}{blank}
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}} onClick={()=>{
              this.onDisableAll();
              cornerstoneTools.setToolActive('EllipticalRoi', { mouseButtonMask: 1 });

            }}>圆形测量</button>
            <br />
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}}  onClick={()=>{
              this.onDisableAll();
              cornerstoneTools.setToolActive('FreehandRoi', { mouseButtonMask: 1 });

            }}>任意形状</button>{blank}{blank}{blank}
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}}  onClick={()=>{
              this.onDisableAll();
              cornerstoneTools.setToolActive('Length', { mouseButtonMask: 1 });

            }}>长度测量</button>
            <br/>
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}}  onClick={()=>{
              this.onDisableAll();
              cornerstoneTools.setToolActive('Probe', { mouseButtonMask: 1 });

            }}>像素取值</button>{blank}{blank}{blank}
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}}  onClick={()=>{
              this.onDisableAll();
              cornerstoneTools.setToolActive('RectangleRoi', { mouseButtonMask: 1 });

            }}>矩形测量</button>

            <br/>
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}}  onClick={()=>{
              this.onDisableAll();
              cornerstoneTools.setToolActive('Angle', { mouseButtonMask: 1 });

            }}>角度测量</button>{blank}{blank}{blank}
            <button className="bodybutton" style={{width:"80px",marginTop:"10px"}}  onClick={()=>{
              this.onDisableAll();
              cornerstoneTools.setToolActive('Eraser', { mouseButtonMask: 1 });

            }}>擦除工具</button>
            <br/>

            <button className="bodybutton" style={{width:"80px",marginTop:"10px",marginLeft:"10px"}} onClick={()=>screenshot()}>快照保存</button>{blank}{blank}{blank}
            
            <br />
            </div>
        )}
        {this.state.part === '胶片打印' && (
            <div style={{backgroundColor:"#02070D",width:"210px",height:"90vh",textAlign:"center",overflow:"hidden",overflowX:"hidden"}}>
            <br />

            <p style={{width:"200px",color:"white",backgroundColor:"#335f9e",padding:"5px 10px",marginTop:"10px",marginBottom:"5px"}}>胶片打印</p>
 
            <button className="bodybutton" style={{width:"80px",marginTop:"10px",marginLeft:"10px"}} onClick={()=>screenshot()}>打印</button>{blank}{blank}{blank}
            
            <br />
            </div>
        )}

      </Col>
      {/* 右侧病案管理 */}
      <Col  span={2}>
      <div style={{margin:"20px 0 0 0"}}>
        {/* <Link to={"/worklist"}> */}
        <button  onClick={()=>{this.setState({openreport:true})}} className="bodybutton" style={{backgroundColor:"#295daa"}}><img src={iconright1} style={{width:"30px"}}></img>
        <br/>
        <p>诊断报告</p>
        </button>
        {/* </Link> */}
        <Dialog open={this.state.openreport} maxWidth={"md"} fullWidth={true} style={{margin:"0 auto"}}>
          <div style={{height:"85vh"}}>
          <ReportForm  onSetOpenReport = {this.onSetOpenReport}/>
          </div>
        </Dialog>
        <br/>
        <br/>
        <Link to={"/"}>
        <button className="bodybutton" style={{backgroundColor:"#295daa"}}><img src={iconright2} style={{width:"30px"}}></img>
        <br/>
        <p>患者检查</p>
        </button>
        </Link>

        {/* <br/>
        <br/>
        <button className="bodybutton" style={{backgroundColor:"#295daa"}}><img src={seticon} style={{width:"30px"}}></img>
        <br/>
        <p>系统设置</p>
        </button>
        <br/>
        <br/>
        <button className="bodybutton" style={{backgroundColor:"#295daa"}}><img src={outicon} style={{width:"30px"}}></img>
        <br/>
        <p>退出系统</p>
        </button> */}
        </div>
     </Col>
    </Row>
  </div>)
}
}
export default CameraPage;