import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    alteraCodigo,
    alteraDescricao,
    alteraCargaHoraria,
    alteraPreco,
    alteraCategoria
} from '../../../actions/curso-actions'

const mapsDispatchToProps = dispatch => bindActionCreators({
    alteraCodigo,
    alteraDescricao,
    alteraCargaHoraria,
    alteraPreco,
    alteraCategoria
}, dispatch)

const mapStateToProps = state => ({
    codigo: state.curso.codigo,
    descricao: state.curso.descricao,
    cargaHoraria: state.curso.cargaHoraria,
    preco: state.curso.preco,
    categoria: state.curso.categoria,
    textoBotao: state.curso.textoBotao
})

class Formulario extends React.Component {

    render() {
        const {
            alteraCodigo,
            alteraDescricao,
            alteraCargaHoraria,
            alteraPreco,
            alteraCategoria } = this.props
        return (
            <div className="border-right pl-3 pr-3">
                <h3 className="border-bottom">Formulário</h3>
                <form>
                    <div className="form-group row">
                        <label htmlFor="codigo"
                            className="col-sm-3 col-form-label">
                            Código:
                        </label>
                        <div className="col-sm-9">
                            <input type="number"
                                className="form-control" id="codigo" value={this.props.codigo}
                                onChange={alteraCodigo} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="descrição"
                            className="col-sm-3 col-form-label">
                            Descrição:
                        </label>
                        <div className="col-sm-9">
                            <input type="text"
                                className="form-control" id="descricao" value={this.props.descricao}
                                onChange={alteraDescricao} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="cargaHoraria"
                            className="col-sm-3 col-form-label">
                            Carga Horária:</label>
                        <div className="col-sm-9">
                            <input type="number"
                                className="form-control" id="cargaHoraria" value={this.props.cargaHoraria}
                                onChange={alteraCargaHoraria} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="preco"
                            className="col-sm-3 col-form-label">
                            Preço:</label>
                        <div className="col-sm-9">
                            <input type="number"
                                className="form-control" id="preco" value={this.props.preco}
                                onChange={alteraPreco} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="categoria"
                            className="col-sm-3 col-form-label">Categoria:</label>
                        <div className="col-sm-9">
                            <select className="form-control" id="categoria" value={this.props.categoria}
                                onChange={alteraCategoria}>
                                <option>INFORMATICA</option>
                                <option>ENGENHARIA</option>
                                <option>ADMINISTRACAO</option>
                                <option>REDES</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <button onClick={this.props.adicionarCurso}
                            className="btn btn-primary ml-3 mb-3">
                            {this.props.textoBotao}
                        </button>
                        <button onClick={this.props.limpar} className="btn btn-primary ml-3 mb-3">
                            limpar
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapsDispatchToProps)(Formulario)