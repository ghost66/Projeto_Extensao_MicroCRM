import db from './models/Database';
const cria_tabela_servico_historia = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ServiceHistory (id INTEGER PRIMARY KEY AUTOINCREMENT, contactId INTEGER, serviceId INTEGER, feedback TEXT);'
      );
    });
  };
  export default cria_tabela_servico_historia;
