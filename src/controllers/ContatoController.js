import Contato from '../models/Contato';

class ContatoController {
  static adicionarContato(nome, endereco, telefone, email, preferencias) {
    const contato = new Contato(null, nome, endereco, telefone, email, preferencias);
    Contato.add(contato);
  }

  static criarTabelaContatos() {
    Contato.createTable();
  }
}

export default ContatoController;
