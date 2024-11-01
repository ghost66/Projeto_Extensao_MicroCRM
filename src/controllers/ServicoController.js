import Servico from '../models/Servico';

class ServicosController {
  static adicionarServico(descricao, data, clienteId) {
    const servico = new Servico(null, descricao, data, clienteId);
    Servico.add(servico);
  }

  static criarTabelaServicos() {
    Servico.createTable();
  }
}

export default ServicosController;

