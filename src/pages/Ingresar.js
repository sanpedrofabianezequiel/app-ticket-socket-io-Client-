import React from 'react'
import { Form, Input, Button, Checkbox, InputNumber ,Typography, Divider} from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useHideMenu } from '../hooks/useHideMenu';

export const Ingresar = () => {
    useHideMenu(false);
    const history = useHistory();
    const {Text,Title} = Typography;

    const layout = {
        labelCol:{ span:8},
        wrapperCol:{span:14},
    };

    const tailLayout = {
        wrapperCol: {offset:8, span:14}
    }

    const onFinish = (values) => {
        //console.log('Success:', values);
        //console.log(history);
        history.push('/escritorio')
    };
    
     const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
     };
    
    return (
      <>
         <Title level={2} >Ingresar</Title>
         <Text>Ingrese su nombre y numero de escritorio</Text>
         <Divider/>
          <Form  {...layout}  name="basic"   initialValues={{ remember: true, }}  onFinish={onFinish}  onFinishFailed={onFinishFailed} >
            <Form.Item  label="Nombre del agente"  name="agente"  rules={[{ required: true, message: 'Por favor ingrese su nombre!', }, ]}>
                <Input />
            </Form.Item>

            <Form.Item  label="Escritorio" name="escritorio"  rules={[ { required: true, message: 'Ingrese el numero de escritorio', }, ]}>
                <InputNumber min={1} max={99}  />
            </Form.Item>

            <Form.Item {...tailLayout} >
                <Button type="primary" htmlType="submit" shape="round">
                    <SaveOutlined />
                    Ingresar
                </Button>
            </Form.Item>
          </Form>  
      </>
    )
}
