import db from '../database/Database';

class Contato {
  constructor(id, nome, endereco, telefone, email, preferencias) {
    this.id = id;
    this.nome = nome;
    this.endereco = endereco;
    this.telefone = telefone;
    this.email = email;
    this.preferencias = preferencias;
  }

  static createTable() {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS contatos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nome TEXT,
          endereco TEXT,
          telefone TEXT,
          email TEXT,
          preferencias TEXT
        )`,
        [],
        () => {
          console.log('Tabela criada com sucesso');
        },
        error => {
          console.log('Erro ao criar tabela ' + error.message);
        }
      );
    });
  }

  static add(contato) {
    db.transaction(txn => {
      txn.executeSql(
        'INSERT INTO contatos (nome, endereco, telefone, email, preferencias) VALUES (?, ?, ?, ?, ?)',
        [contato.nome, contato.endereco, contato.telefone, contato.email, contato.preferencias],
        () => {
          console.log('Contato adicionado com sucesso');
        },
        error => {
          console.log('Erro ao adicionar contato ' + error.message);
        }
      );
    });
  }
}

export default Contato;
