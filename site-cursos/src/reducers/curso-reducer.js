const INITIAL_STATE = {
    codigo: '123',
    descricao: '',
    cargahoraria: '',
    preco: '',
    categoria: '',
    textoBotao: 'Adicionar',
    lista : [{_id:'-1', codigo: 123, descricao:'curso teste'}]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {        
        case 'LIMPAR_FORM': return INITIAL_STATE
        case 'ATUALIZA_CODIGO': return {...state, codigo : action.codigo}
        case 'ATUALIZA_DESCRICAO': return {...state, descricao : action.codigo}
        case 'ATUALIZA_CARGA': return {...state, cargahoraria : action.codigo}
        case 'ATUALIZA_PRECO': return {...state, preco : action.codigo}
        case 'ATUALIZA_CATEGORIA': return {...state, categoria : action.codigo}
        case 'GET_LISTA': return {...state, lista : action.codigo}
        default : return state
    }
}