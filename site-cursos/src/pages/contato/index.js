import React, { Component } from 'react';
import Cabecalho from '../../components/menu/Cabecalho';
import ContatoForm from'../contato/form'

export default class Contato extends Component {
    render() {
        return (
            <div>
               
                <Cabecalho titulo="Contato"
                subtitulo="entre em contato conosco" />
                <ContatoForm/>
            </div>
        )
    }
}