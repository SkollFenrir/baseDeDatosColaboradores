import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Input from '../Input/Input';

function NavbarP({onChangeSearch, list}) {
  const handlerSearch = (e) => {
    const search = (e.target.value);
    const searchFilter = list.filter(
      (worker) => 
      worker.nombre.includes(search) ||
      worker.id.toString().includes(search) ||
      worker.correo.includes(search)
    );
    onChangeSearch(searchFilter);
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Buscador de Colaboradores</Navbar.Brand>
          <Form className="d-flex">
            <Input type={'text'} placeholder={'Busca un Colaborador'} onChangeInput={(e) => handlerSearch(e)} />
          </Form>
      </Container>
    </Navbar>
  );
};

export default NavbarP;