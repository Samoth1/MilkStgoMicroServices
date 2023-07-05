import React, { Component } from 'react';
import PagoProveedorService from '../services/PagoProveedorService';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';

interface Pago {
    quincena: string;
    nombreProveedor: string;
    totalKlsLeche: string;
    numDiasEnvioLeche: string;
    promedioDiarioKlsLeche: string;
    porcentajeVariacionLeche: string;
    pagoPorLeche: string;
    descuentoVariacionLeche: string;
    porcentajeGrasa: string;
    porcentajeVariacionGrasa: string;
    pagoPorGrasa: string;
    descuentoVariacionGrasa: string;
    porcentajeSolidosTotales: string;
    porcentajeVariacionST: string;
    pagoPorSolidosTotales: string;
    descuentoVariacionST: string;
    bonificacionPorFrecuencia: string;
    pagoTotal: string;
    montoRetencion: string;
    montoFinal: string;
}
  
class PagosComponent extends Component{
    state = {
        pagos: [] as Pago[],
    }

    componentDidMount() {
        PagoProveedorService.obtenerPago("01025", "2-2-2023")
            .then((response) => {
            this.setState({ pagos: response.data });
            console.log("data_pagos",this.state.pagos);
        })
        .catch((error) => {
        console.log(error);
        });
    }

    render() {
        return (
        <div>
            <h1>Plantilla de Pagos</h1>
            <Table data={this.state.pagos} autoHeight={true} bordered={true}>
            <Column>
                <HeaderCell>Quincena</HeaderCell>
                <Cell dataKey="quincena" />
            </Column>
            <Column>
                <HeaderCell>Nombre de proveedor</HeaderCell>
                <Cell dataKey="nombreProveedor" />
            </Column>
            <Column>
                <HeaderCell>Total de kilos de leche</HeaderCell>
                <Cell dataKey="totalKlsLeche" />
            </Column>
            <Column>
                <HeaderCell>Número de días de envío de leche</HeaderCell>
                <Cell dataKey="numDiasEnvioLeche" />
            </Column>
            <Column>
                <HeaderCell>Promedio diario de kilos de leche</HeaderCell>
                <Cell dataKey="promedioDiarioKlsLeche" />
            </Column>
            <Column>
                <HeaderCell>Porcentaje de variación de leche</HeaderCell>
                <Cell dataKey="porcentajeVariacionLeche" />
            </Column>
            <Column>
                <HeaderCell>Pago por leche</HeaderCell>
                <Cell dataKey="pagoPorLeche" />
            </Column>
            <Column>
                <HeaderCell>Descuento por variación de leche</HeaderCell>
                <Cell dataKey="descuentoVariacionLeche" />
            </Column>
            <Column>
                <HeaderCell>Porcentaje de grasa</HeaderCell>
                <Cell dataKey="porcentajeGrasa" />
            </Column>
            <Column>
                <HeaderCell>Porcentaje de variación de grasa</HeaderCell>
                <Cell dataKey="porcentajeVariacionGrasa" />
            </Column>
            <Column>
                <HeaderCell>Pago por grasa</HeaderCell>
                <Cell dataKey="pagoPorGrasa" />
            </Column>
            <Column>
                <HeaderCell>Descuento por variación de grasa</HeaderCell>
                <Cell dataKey="descuentoVariacionGrasa" />
            </Column>
            <Column>
                <HeaderCell>Porcentaje de sólidos totales</HeaderCell>
                <Cell dataKey="porcentajeSolidosTotales" />
            </Column>
            <Column>
                <HeaderCell>Porcentaje de variación de sólidos totales</HeaderCell>
                <Cell dataKey="porcentajeVariacionST" />
            </Column>
            <Column>
                <HeaderCell>Pago por sólidos totales</HeaderCell>
                <Cell dataKey="pagoPorSolidosTotales" />
            </Column>
            <Column>
                <HeaderCell>Descuento por variación de sólidos totales</HeaderCell>
                <Cell dataKey="descuentoVariacionST" />
            </Column>
            <Column>
                <HeaderCell>Bonificación por frecuencia</HeaderCell>
                <Cell dataKey="bonificacionPorFrecuencia" />
            </Column>
            <Column>
                <HeaderCell>Pago total</HeaderCell>
                <Cell dataKey="pagoTotal" />
            </Column>
            <Column>
                <HeaderCell>Monto de retención</HeaderCell>
                <Cell dataKey="montoRetencion" />
            </Column>
            <Column>
                <HeaderCell>Monto final</HeaderCell>
                <Cell dataKey="montoFinal" />
            </Column>
            </Table>
        </div>
    );
  }
}

export default PagosComponent;
