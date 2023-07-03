import React, { Component, ChangeEvent } from 'react';
import ProveedorService from '../services/ProveedorService';
import { Form, ButtonToolbar, Button, SelectPicker } from 'rsuite';
import NavBar from './NavbarComponent';

interface NuevoProveedorState {
  codigo: string;
  nombre: string;
  categoria: string;
  retencion: string;
}

class NuevoProveedorComponent extends Component<{}, NuevoProveedorState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      codigo: '',
      nombre: '',
      categoria: '',
      retencion: ''
    };
  }

  changeCodigoHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ codigo: event.target.value });
  };

  changeNombreHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ nombre: event.target.value });
  };

  changeCategoriaHandler = (value: any) => {
    this.setState({ categoria: value });
  };

  changeRetencionHandler = (value: any) => {
    this.setState({ retencion: value });
  };

  saveProveedor = (e: React.FormEvent) => {
    e.preventDefault();
    ProveedorService.guardarProveedor(
      this.state.codigo,
      this.state.nombre,
      this.state.categoria,
      this.state.retencion
    ).then((res) => {
      window.alert('Se creó el proveedor correctamente');
      window.location.href = '/proveedor';
    });
  };

  render() {
    
    const dataCategoria = ['A', 'B', 'C', 'D'].map((categoria) => ({
      label: categoria,
      value: categoria
    }));
    
    const dataRetencion = ['Si', 'No'].map((retencion) => ({
      label: retencion,
      value: retencion
    }));

    return (
    
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <NavBar></NavBar>
        <h1>Nuevo Proveedor</h1>
        <div style={{ width: '1000px' }}></div>
        <Form>
          <Form.Group onChange={this.changeCodigoHandler}>
            <Form.ControlLabel>Codigo</Form.ControlLabel>
            <Form.Control name="codigo" minLength={5} maxLength={5} />
          </Form.Group>

          <Form.Group onChange={this.changeNombreHandler}>
            <Form.ControlLabel>Nombre</Form.ControlLabel>
            <Form.Control name="nombre" />
          </Form.Group>

          <Form.Group>
            <p>Categoria</p>
            <SelectPicker
              data={dataCategoria}
              searchable={false}
              style={{ width: 300 }}
              onChange={this.changeCategoriaHandler}
            />
          </Form.Group>

          <Form.Group>
            <p>Retencion</p>
            <SelectPicker
              data={dataRetencion}
              searchable={false}
              style={{ width: 300 }}
              onChange={this.changeRetencionHandler}
            />
          </Form.Group>

          <Form.Group>
            <ButtonToolbar>
              <Button
                appearance="primary"
                style={{ width: 300 }}
                onClick={this.saveProveedor}
              >
                Crear Proveedor
              </Button>
            </ButtonToolbar>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default NuevoProveedorComponent;
