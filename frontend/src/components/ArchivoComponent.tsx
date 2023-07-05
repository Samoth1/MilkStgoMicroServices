import React, { Component, ChangeEvent } from 'react';
import LecheService from '../services/LecheService';
import TurnoService from '../services/TurnoService';
import PagoProveedorService from '../services/PagoProveedorService';
import NavBar from './NavbarComponent';
import { Grid, Row } from 'rsuite';

interface ArchivoState {
  pasoActual: number;
  archivos: (File | null)[];
}

class ArchivoComponent extends Component<{}, ArchivoState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      pasoActual: 1,
      archivos: [null, null]
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickSiguiente = this.onClickSiguiente.bind(this);
    this.onClickSubir = this.onClickSubir.bind(this);
  }

  onChangeHandler(event: ChangeEvent<HTMLInputElement>, paso: number) {
    if (event.target.files && event.target.files.length > 0) {
      const archivos = [...this.state.archivos];
      archivos[paso - 1] = event.target.files[0];
      this.setState({
        archivos
      });
    }
  }

  onClickSiguiente() {
    const { pasoActual } = this.state;
    if (pasoActual < 2) {
      this.setState({
        pasoActual: pasoActual + 1
      });
    }
  }

  onClickSubir() {
    const { archivos } = this.state;
    
    const data1 = new FormData();
    const data2 = new FormData();

    let cont = 0
    archivos.forEach((archivo) => {
      if (archivo) {
        if (cont === 0){
            data1.append('file', archivo);
            cont = 1;
        }
        else data2.append('file', archivo);
      }
    });

    console.log(data1);
    console.log(data2);

    TurnoService.subirTurno(data1)
      .then(res => {
        LecheService.subirLeche(data2)
          .then(res => {
            PagoProveedorService.generarPagos()
              .then(res => {
                window.alert("Se han generado los pagos");
              })
          })
      })
      
  }

  render() {
    const { pasoActual, archivos } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Grid fluid>
          {pasoActual === 1 && (
            <div>
              <NavBar></NavBar>
              <h2>Subir archivo Turnos</h2>
              <Row style={{ marginBottom: '20px', marginTop: '20px' }}>
                <input type="file" onChange={(event) => this.onChangeHandler(event, 1)} />
              </Row>
              <Row>
                <button type="button" onClick={this.onClickSiguiente}>
                  Siguiente
                </button>
              </Row>
            </div>
          )}

          {pasoActual === 2 && (
            <div>
              <NavBar></NavBar>
              <h2>Subir archivo Leche</h2>
              <Row style={{ marginBottom: '20px', marginTop: '20px' }}>
                <input type="file" onChange={(event) => this.onChangeHandler(event, 2)} />
              </Row>
              <Row>
                <button type="button" onClick={this.onClickSubir}>
                  Subir
                </button>
              </Row>
            </div>
          )}
        </Grid>
      </div>
    );
  }
}

export default ArchivoComponent;
