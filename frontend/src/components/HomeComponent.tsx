import React, { Component } from 'react';
import { Grid, Row, Col } from 'rsuite';

export default class HomeComponent extends Component {
  redireccionar(direccion: string) {
    window.location.href = direccion;
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={8}>
            <h1>Ver Proveedores</h1>
            <button onClick={() => this.redireccionar('/mostrarproveedores')}>
              Ver Proveedores
            </button>
          </Col>
          <Col xs={8}>
            <h1>Crear Proveedor</h1>
            <button onClick={() => this.redireccionar('/nuevoproveedor')}>
              Crear Proveedor
            </button>
          </Col>
          <Col xs={8}>
            <h1>Subir Archivos</h1>
            <button onClick={() => this.redireccionar('/subirarchivos')}>
                Subir Archivos
            </button>
          </Col>
          <Col xs={8}>
            <h1>Plantilla Pagos</h1>
            <button onClick={() => this.redireccionar('/mostrarpago')}>
                Mostrar Pagos
            </button>
          </Col>
        </Row>
        <br /><br /><br /><br /><br /><br />
      </Grid>
    );
  }
}