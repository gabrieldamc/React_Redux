import React from 'react'
import CursoForm from '../Form'
import CursoList from '../List'
import axios from 'axios';

const URL = "http://localhost:3200/api/curso";

export default class Cadastro extends React.Component {

    state = {
        data: []
    }

    componentWillMount() {
        this.listar()
    }

    listar() {
        axios.get(URL).then(response => this.setState({...this.state, data : response.data}))
    }  

    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <CursoForm />
                </div>
                <div className="col-md-6">
                    <CursoList dados={this.state.data} />
                </div>
            </div>
        )
    }
}