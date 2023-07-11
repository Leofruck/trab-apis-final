const cadastroCliente = require('../cadastro_cliente');
const repositoryCliente = require('../repository/cliente_repository')

function listarCliente(req, res) {
  const listaCliente = cadastroCliente.listar();
  res.json(listaCliente);
}

async function buscarClientePorId(req, res) {
  const id = req.params.id;

  try {
    const cliente = repositoryCliente.buscarPorId(id);
    res.json(cliente);
  } catch (err) {
    res.status(err.numero).json(err);
  }
}

async function inserirCliente(req, res) {
  const cliente = req.body;

  try {
    const clienteInserido = repositoryCliente.inserir(cliente);
    res.status(201).json(clienteInserido);
  } catch (err) {
    res.status(err.numero).json(err);
  }
}

function atualizaCliente(req, res) {
  const id = req.params.id;
  const clienteAtualizado = req.body;

  try {
    const cliente = cadastroCliente.atualizar(id, clienteAtualizado);
    res.json(cliente);
  } catch (err) {
    res.status(err.numero).json(err);
  }
}

async function deletarCliente(req, res) {
  const id = req.params.id;

  try {
    repositoryCliente.deletar(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(err.numero).json(err);
  }
}

function associarClienteAoLivro(req, res) {
  const idLivro = req.params.id;
  const cliente = req.body;

  try {
    const livroComClienteAssociado = cadastroCliente.associarClienteAoLivro(idLivro, cliente);
    res.status(201).json(livroComClienteAssociado);
  } catch (err) {
    res.status(err.numero).json(err);
  }
}

function desassociarClienteDoLivro(req, res) {
  const idLivro = req.params.id;

  try {
    cadastroCliente.desassociarClienteDoLivro(idLivro);
    res.sendStatus(204);
  } catch (err) {
    res.status(err.numero).json(err);
  }
}

module.exports = {
  listarCliente,
  buscarClientePorId,
  inserirCliente,
  atualizaCliente,
  deletarCliente,
  associarClienteAoLivro,
  desassociarClienteDoLivro
};