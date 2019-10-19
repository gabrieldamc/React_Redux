import React, { Component } from 'react';
import Cabecalho from '../../components/menu/Cabecalho';
import Cadastro from './cadastro'

export default class Curso extends Component {
    render() {
        return (
            <div>               
                <Cabecalho titulo="Cursos"
                subtitulo="cadastro de cursos" />
                <Cadastro></Cadastro>
            </div>
        )
    }
}