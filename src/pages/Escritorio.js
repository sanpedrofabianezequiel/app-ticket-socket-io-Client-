import React from 'react'
import {Col,Button,Row,Typography, Divider} from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';

const {Text,Title} = Typography;

export const Escritorio = () => {

    useHideMenu(false);
    const salir = ()=>{

    }
    const siguienteTicket = ()=>{

    }

    return (
        <>  
           <Row>
                <Col span={20}>
                    <Title level={2}>Ezequiel</Title>
                    <Text>Usted esta trabajando en el escritorio: </Text>
                    <Text type="success">5</Text>
                </Col>   

                <Col span={4} align="right">
                    <Button shape="round" type="danger" onClick={salir} >
                        <CloseCircleOutlined/>
                        Salir
                    </Button>
                </Col>
            </Row> 

            <Divider/>

            <Row>
                <Col>
                    <Text>Esta atendiendo el ticket numero: </Text>
                    <Text style={{ fontSize:30}} type="danger" >
                        55
                    </Text>
                </Col>
            </Row>


            <Row>
                <Col offset={18} span={6} align="right">
                    <Button onClick={siguienteTicket} shape="round" type="primary">
                        <RightOutlined/>
                        Siguiente
                    </Button>
                </Col>
            </Row>
        </>
    )
}
