import React, { useContext, useState } from 'react'
import {Col,Button,Row,Typography, Divider} from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarios';
import {Redirect,useHistory} from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';

const {Text,Title} = Typography;

export const Escritorio = () => {

    useHideMenu(false);
    const history = useHistory();
    const [usuario] = useState(getUsuarioStorage())
    const {socket} = useContext(SocketContext);
    const [ticket, setTicket] = useState(null);


    const salir = ()=>{
        localStorage.removeItem('agente');
        localStorage.removeItem('escritorio');
        history.replace('/ingresar'); //No permite que el usuario vuelva a la pantalla anterior
    }
    const siguienteTicket = ()=>{
        socket.emit('siguiente-ticket-trabajar',usuario,(callBack)=>{
            //console.log(callBack);
            setTicket(callBack);
        })
    }


    
    if(!usuario.escritorio && !usuario.agente){ //Necesitamos utulizar el Return
        return <Redirect to='/ingresar' />
    }
    return (
        <>  
           <Row>
                <Col span={20}>
                    <Title level={2}>{usuario.agente}</Title>
                    <Text>Usted esta trabajando en el escritorio: </Text>
                    <Text type="success">{usuario.escritorio}</Text>
                </Col>   

                <Col span={4} align="right">
                    <Button shape="round" type="danger" onClick={salir} >
                        <CloseCircleOutlined/>
                        Salir
                    </Button>
                </Col>
            </Row> 

            <Divider/>

            {
                ticket && (
                    <Row>
                        <Col>
                            <Text>Esta atendiendo el ticket numero: </Text>
                            <Text style={{ fontSize:30}} type="danger" >
                                {ticket.number}
                            </Text>
                        </Col>
                    </Row>
                )
            }

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
