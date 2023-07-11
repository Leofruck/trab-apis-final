const { Client } = require('pg')
const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'cliente_biblioteca',
};


async function listar() {
    const novoCliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM produtos')
    const listaProdutos = res.rows;
    await cliente.end();
    return listaProdutos;
}



async function buscarPorId(id) {
    const novoCliente = new Client(conexao);
    await novoCliente.connect();
    const res = await novoCliente.query('SELECT * FROM cliente WHERE id=$1', [id]);
    const produto = res.rows[0];
    await novoCliente.end();
    return produto;
}


async function inserir(cliente) {
    const sql = 'INSERT INTO cliente (nome, matricula, telefone) VALUES ($1, $2, $3) RETURNING *';
    const values = [cliente.nome, cliente.matricula, cliente.telefone];

    const clienteDB = new Client(conexao);
    await clienteDB.connect();
    const res = await clienteDB.query(sql, values);
    const clienteInserido = res.rows[0];
    await clienteDB.end();
    return clienteInserido;
}

async function atualizar(id, produto) {
    const sql = 'UPDATE produtos set nome=$1, preco=$2 WHERE id=$3 RETURNING *'
    const values = [produto.nome, produto.preco, id];

    const novoCliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query(sql,values);
    const produtoAtualizado = res.rows[0];
    await cliente.end();
    return produtoAtualizado;    
}

async function deletar(id) {
    const sql = 'DELETE FROM cliente WHERE id=$1 RETURNING *';
    const values = [id];

    const novoCliente = new Client(conexao);
    await novoCliente.connect();
    const res = await novoCliente.query(sql, values);
    const produtoDeletado = res.rows[0];
    await novoCliente.end();
    return produtoDeletado;
}




module.exports = { 
    listar,
    buscarPorId, 
    inserir,
    atualizar,
    deletar
}