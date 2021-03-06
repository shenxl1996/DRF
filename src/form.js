import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './App.css'

import {Descriptions,DatePicker, Form, Input, InputNumber, Button,Col,Row ,Radio,Divider} from 'antd';
const { TextArea } = Input;
const blank = " ".replace(/ /g, "\u00a0")

class ReportForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            alreadyInput:false,
        }
        this.onSetOpenDialog = this.props.onSetOpenReport  || function () {
        };
        this.setState.bind(this);
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
            <div style={{width:"800px",margin:"10px auto",paddingTop:"80px"}}>
                <p style={{fontSize:'32px',fontFamily:"cursive",fontWeight:"bold"}}>
                ???????????????????????????????????????????????????
                </p>
            <Form   style={{width:"800px",textAlign:"center",paddingLeft:"100px"}} onFinish = {onFinish} {...layout} layout="vertical" name="nest-messages"  validateMessages={validateMessages}>
                  <Row>
                      <Col >
                    <Form.Item
                            name={['user', 'name']}
                            label="??????"
                            rules={[
                            {},
                            ]}>
                                <Input style={{width:"150px"}} />
                    </Form.Item>
                    </Col>
                    {blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}{blank}

                    {blank}
                    <Col>
                    <Form.Item name="sex" label="??????">
                                <Radio.Group style={{width:"200px"}}>
                                <Radio value="a">???</Radio>
                                <Radio value="b">???</Radio>
                                </Radio.Group>
                    </Form.Item>
                    </Col>
                    </Row>
                
                <Row>
                
                    <Col>
                    <Form.Item
                        name= "age"
                        label="??????"
                        rules={[
                        {},
                        ]}>
                            <Input />
                    </Form.Item>
                    </Col>
                    <Col>
                    <Form.Item
                        name= "patient_number"
                        label="????????????"
                        rules={[
                        {},
                        ]}>
                            <Input />
                    </Form.Item>
                    </Col>
                    {/* <Col>
                    <Form.Item
                        name= "room"
                        label="????????????"
                        rules={[
                        {},
                        ]}>
                            <Input />
                    </Form.Item>
                    </Col>
                    <Col>
                    <Form.Item
                        name= "doctor"
                        label="????????????"
                        rules={[
                        {},
                        ]}>
                            <Input />
                    </Form.Item>
                    </Col> */}
                    <Col>
                    <Form.Item
                        name= "research_type"
                        label="????????????"
                        rules={[
                        {},
                        ]}>
                            <Input />
                    </Form.Item>
                    </Col>
                    {/* <Col>
                    <Form.Item
                        name= "visiting_number"
                        label="????????????"
                        rules={[
                        {},
                        ]}>
                            <Input />
                    </Form.Item>
                    </Col> */}
                    </Row>
                    <Row>
                    <Form.Item
                        name= "research_number"
                        label="????????????"
                        rules={[
                        {},
                        ]}>
                            <Input />
                    </Form.Item>

                    <Form.Item

                        type='array'
                        name= "research_time"
                        label="????????????"
                        >
                           <DatePicker getPopupContainer={node => node.parentNode} showTime format="YYYY-MM-DD HH:mm:ss" />
                    </Form.Item>

                    <Form.Item
                        name= "research_part"
                        label="????????????"
                        rules={[
                        {},
                        ]}>
                            <Input />
                    </Form.Item>
                </Row>
                
                <Divider orientation="left">???????????????</Divider>
                <Form.Item
                        name= "patient_complaint"
                       
                        rules={[
                        {},
                        ]}>
                        <TextArea rows={4} />
                 </Form.Item>
                 <Divider orientation="left">???????????????</Divider>
                <Form.Item
                        name= "diagnosis"
                       
                        rules={[
                        {},
                        ]}>
                        <TextArea rows={4} />
                 </Form.Item>
                 {/* <Divider orientation="left">??????</Divider>
                <Form.Item
                        name= "advice"
                       
                        rules={[
                        {},
                        ]}>
                        <TextArea rows={4} />
                 </Form.Item> */}
            
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                    ??????
                    </Button>
                </Form.Item>
        </Form>
        </div>
          )
        const FormShow = (<div style={{width:"800px",margin:"10px auto",paddingTop:"80px"}}>
                            <p style={{fontSize:'32px',fontFamily:"cursive",fontWeight:"bold"}}>
                ???????????????????????????????????????????????????
                </p>
            <Descriptions title="????????????" layout="inline" style={{paddingLeft:"100px"}}>
            <Descriptions.Item label="??????">{this.state.name}</Descriptions.Item>
            <Descriptions.Item label="??????">{this.state.sex}</Descriptions.Item>
            <Descriptions.Item label="????????????">{this.state.patient_number}</Descriptions.Item>
            {/* <Descriptions.Item label="????????????">{this.state.room}</Descriptions.Item>
            <Descriptions.Item label="????????????">{this.state.doctor}</Descriptions.Item> */}
            <Descriptions.Item label="????????????">{this.state.research_type}</Descriptions.Item>
            <Descriptions.Item label="????????????">{this.state.visiting_number}</Descriptions.Item>
            <Descriptions.Item label="????????????">{this.state.research_number}</Descriptions.Item>
            {/* <Descriptions.Item label="????????????">{this.state.research_time}</Descriptions.Item> */}
            <Descriptions.Item label="????????????">{this.state.research_part}</Descriptions.Item>
            </Descriptions>
            <Divider style={{paddingLeft:"100px"}} orientation="left">???????????????</Divider>
            <p>{this.state.patient_complaint}</p>
            <Divider style={{paddingLeft:"100px"}} orientation="left">???????????????</Divider>
            <p>{this.state.diagnosis}</p>
            {/* <Divider orientation="left">??????</Divider>
            <p>{this.state.advice}</p> */}
           
            
        </div>)
        var showcard = FormInput;
        if(this.state.alreadyInput){
            showcard = FormShow;
        }
        else{
            showcard = FormInput;
        }
        
        return (
            
            <div style={{textAlign:"center",justifyContent:"center"}}>
                {showcard}
                <Button  style={{marginLeft:"270px"}} onClick={()=>{this.onSetOpenDialog()}}>??????
                </Button>
            </div>
        );
         
    }
}

export default ReportForm 