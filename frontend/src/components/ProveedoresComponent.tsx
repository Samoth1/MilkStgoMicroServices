import React, { Component } from 'react';
import ProveedorService from '../services/ProveedorService';
import NavBar from './NavbarComponent';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';

interface Proveedor {
  codigo: string;
  nombre: string;
  categoria: string;
  retencion: string;
}

class ProveedoresComponent extends Component {
  state = {
    proveedores: [] as Proveedor[],
    isHovered: false,
  };

  componentDidMount() {
    ProveedorService.obtenerProveedores()
      .then((response) => {
        this.setState({ proveedores: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { isHovered } = this.state;
    const tableBackground = isHovered ? 'lightblue' : 'white';

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <NavBar />
        <div
          style={{
            width: '1000px',
            marginTop: '20px',
            background: tableBackground,
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <h1>Proveedores</h1>
          <Table data={this.state.proveedores} autoHeight={true} bordered={true} hover={true}>
            <Column width={150} fixed={true}>
              <HeaderCell>Codigo</HeaderCell>
              <Cell dataKey="codigo" />
            </Column>
            <Column width={300}>
              <HeaderCell>Nombre</HeaderCell>
              <Cell dataKey="nombre" />
            </Column>
            <Column width={150}>
              <HeaderCell>Categoria</HeaderCell>
              <Cell dataKey="categoria" />
            </Column>
            <Column width={150}>
              <HeaderCell>Retencion</HeaderCell>
              <Cell dataKey="retencion" />
            </Column>
          </Table>
        </div>
      </div>
    );
  }
}

export default ProveedoresComponent;
