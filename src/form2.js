import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../App.css';
import {Descriptions,DatePicker, Form, Input, InputNumber, Button,Col,Row ,Radio,Divider} from 'antd';
const { TextArea } = Input;

class ReportForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            alreadyInput:false,
        }
        this.setState.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log(this.state)
        this.setState({alreadyInput:true,})
        event.preventDefault();
      }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
      }

    

    render(){
        const layout = {
            labelCol: {
              span: 8,
            },
            wrapperCol: {
              span: 16,
            },
          };
          const validateMessages = {
            required: '${label} is required!',
            types: {
              email: '${label} is not validate email!',
              number: '${label} is not a validate number!',
            },
            number: {
              range: '${label} must be between ${min} and ${max}',
            },
          };
          const onFinish = fieldsValue => {
              console.log(fieldsValue)
              this.setState({alreadyInput:true,
            name:fieldsValue.user.name,
            sex:fieldsValue.sex,
            age:fieldsValue.age,
            patient_number:fieldsValue.patient_number,
            room:fieldsValue.room,
            doctor:fieldsValue.doctor,
            research_type:fieldsValue.research_type,
            visiting_number:fieldsValue.visiting_number,
            research_number:fieldsValue.research_number,
            research_time:fieldsValue.research_time,
            research_part:fieldsValue.research_part,
            patient_complaint:fieldsValue.patient_complaint,
            diagnosis:fieldsValue.diagnosis,
            advice:fieldsValue.advice,
            })
              console.log(this.state)
          }
         

        

          const FormInput = (
            <div >
                <form onSubmit={this.handleSubmit}>
                
                    <div style={{backgroundColor:"#E8E8E8",textAlign:"center"}}>
                    
                    <hr />
                    <br/>
                    <p>------------------------------------------------------------------------------------------------</p>
                    {" ".replace(/ /g, "\u00a0")}病历号：<input onChange={this.handleInputChange} name="study_number" style={{width:"100px",height:"25px"}} ></input> 
                    {" ".replace(/ /g, "\u00a0")}科室：<input name="room" onChange={this.handleInputChange} style={{width:"100px",height:"25px"}}></input>
                    {" ".replace(/ /g, "\u00a0")}主治医生:<input name="doctor" onChange={this.handleInputChange} style={{width:"100px",height:"25px"}}></input>
                    <p>------------------------------------------------------------------------------------------------</p>
                    <p>
                    {" ".replace(/ /g, "\u00a0")}姓名：<input onChange={this.handleInputChange} name="name" style={{width:"100px",height:"25px"}} ></input> 
                    {" ".replace(/ /g, "\u00a0")}性别：
                    <select name="sex" onChange={this.handleInputChange} style={{height:"25px"}}>
                        <option>未选择</option>
                        <option value ="男">男</option>
                        <option value ="女">女</option>
                    </select>
                    {" ".replace(/ /g, "\u00a0")}年龄：<input onChange={this.handleInputChange} name="age" style={{width:"40px",height:"25px"}} ></input> 
                    {" ".replace(/ /g, "\u00a0")}婚史：
                    <select name="isMerry" onChange={this.handleInputChange}  style={{height:"25px"}}>
                        <option>未选择</option>
                        <option value ="已婚">已婚</option>
                        <option value ="未婚">未婚</option>
                    </select>   
                    </p>
                    
                    <p>
                    {/* {" ".replace(/ /g, "\u00a0")}职业：<input onChange={this.handleInputChange} name="job" style={{width:"100px",height:"25px"}} ></input>  */}
                    {" ".replace(/ /g, "\u00a0")}籍贯：<input onChange={this.handleInputChange} name="native_place" style={{width:"100px",height:"25px"}} ></input> 
                    {" ".replace(/ /g, "\u00a0")}联系电话：<input onChange={this.handleInputChange} name="telephone" style={{width:"100px",height:"25px"}} ></input> 
                

                    </p>
                    <p>
                    {" ".replace(/ /g, "\u00a0")}详细地址：<input onChange={this.handleInputChange} name="address" style={{width:"390px",height:"25px"}} ></input> 
                    </p>

                    <p>------------------------------------------------------------------------------------------------</p>

                    </div>
                    <div style={{backgroundColor:"white"}}>
                    <Divider orientation="left" style={{fontSize:"10px" }}>主要症状</Divider>
                    <TextArea rows={4} name="symptom" onChange={this.handleInputChange}/>
                    <Divider orientation="left" style={{fontSize:"10px" }}>病史</Divider>
                    <TextArea rows={4} name="ill_history" onChange={this.handleInputChange}/>
                    <Divider orientation="left" style={{fontSize:"10px" }}>过敏史</Divider>
                    <TextArea rows={4} name="irritability_history" onChange={this.handleInputChange}/>
                    <Divider orientation="left" style={{fontSize:"10px" }}>体检结果</Divider>
                    <TextArea rows={4} name="medical_result" onChange={this.handleInputChange}/>
                    <Divider orientation="left" style={{fontSize:"10px" }}>病情诊断</Divider>
                    <TextArea rows={4} name="diagnosis" onChange={this.handleInputChange}/>
                                       <div style={{textAlign:"center"}}>
                    <input className="sidebutton" type="submit" value="提交" />
                   </div>
                    </div>


                </form>
                
                
            </div>
          )
        const FormShow = (<div style={{backgroundColor:"white", textAlign:"center",height:"72vh"}}>
            <Descriptions title="诊断报告" layout="inline">
            <Descriptions.Item label="病历号">{this.state.study_number}</Descriptions.Item>
            <Descriptions.Item label="科室">{this.state.room}</Descriptions.Item>
            <Descriptions.Item label="主治医师">{this.state.doctor}</Descriptions.Item>
            <Divider></Divider>
            <Descriptions.Item label="姓名">{this.state.name}</Descriptions.Item>
            <Descriptions.Item label="性别">{this.state.sex}</Descriptions.Item>
            <Descriptions.Item label="年龄">{this.state.age}</Descriptions.Item>
            <Descriptions.Item label="婚史">{this.state.isMerry}</Descriptions.Item>
            {/* <Descriptions.Item label="职业">{this.state.job}</Descriptions.Item> */}
            <Descriptions.Item label="籍贯">{this.state.native_place}</Descriptions.Item>
            <Descriptions.Item label="联系电话">{this.state.telephone}</Descriptions.Item>
            <Descriptions.Item label="详细地址">{this.state.address}</Descriptions.Item>


            </Descriptions>
            <Divider orientation="left">主要症状</Divider>
            <p>{this.state.symptom}</p>
            <Divider orientation="left">病史</Divider>
            <p>{this.state.ill_history}</p>
            <Divider orientation="left">过敏史</Divider>
            <p>{this.state.irritability_history}</p>
            <Divider orientation="left">体验结果</Divider>
            <p>{this.state.medical_result}</p>
            <Divider orientation="left">病情诊断</Divider>
            <p>{this.state.diagnosis}</p>
            
            <button className="sidebutton" onClick={()=>{this.setState({alreadyInput:false})}}>返回</button>
        </div>)
        var showcard = FormInput;
        if(this.state.alreadyInput){
            showcard = FormShow;
        }
        else{
            showcard = FormInput;
        }
        
        return (
            
            <div>
                {showcard}
                
            </div>
        );
         
    }
}

export default ReportForm 