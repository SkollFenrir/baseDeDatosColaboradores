import React, { useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import Input from '../Input/Input';
import './Format.css';

const Format = ({onClickAddCoworker}) => {
    const [name, setName] = useState ();
    const [email, setEmail] = useState ();
    const handlerOnClick = () => {
        onClickAddCoworker ({
            nombre: name,
            correo: email,
        });
    };
  return (
    <div>
        <Form.Group as={Row} className='formG'>
            <Form.Label column sm="2" className='label'> Nombre del Colaborador</Form.Label>
            <Col>
                <Input type={'text'} placeholder={'Ingresa el nombre'}  onChangeInput={(e) => setName(e.target.value)}/>
            </Col> 
        </Form.Group>
        <Form.Group as={Row} className='formG'>
            <Form.Label column sm="2" className='label'> Email del Colaborador</Form.Label>
            <Col>
                <Input type={'email'} placeholder={'Ingresa el email'} onChangeInput={(e) => setEmail(e.target.value)} />
            </Col>
        </Form.Group>
        <Button variant="primary" onClick={handlerOnClick} className='formG'> Agregar Colaborador </Button>
    </div>
  )
}
export default Format