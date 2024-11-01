import db from '../database/Database';

class Servico {
  constructor(id, descricao, data, clienteId) {
    this.id = id;
    this.descricao = descricao;
    this.data = data;
    this.clienteId = clienteId;
  }

  static createTable() {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS servicos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          descricao TEXT,
          data TEXT,
          clienteId INTEGER,
          FOREIGN KEY (clienteId) REFERENCES contatos (id)
        )`,
        [],
        () => {
          console.log('Tabela de serviços criada com sucesso');
        },
        error => {
          console.log('Erro ao criar tabela de serviços ' + error.message);
        }
      );
    });
  }

  static add(servico) {
    db.transaction(txn => {
      txn.executeSql(
        'INSERT INTO servicos (descricao, data, clienteId) VALUES (?, ?, ?)',
        [servico.descricao, servico.data, servico.clienteId],
        () => {
          console.log('Serviço adicionado com sucesso');
        },
        error => {
          console.log('Erro ao adicionar serviço ' + error.message);
        }
      );
    });
  }
}

export default Servico;
