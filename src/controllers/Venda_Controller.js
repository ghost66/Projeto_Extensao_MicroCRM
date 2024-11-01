import db from '../models/Database';

export const addSale = (contactId, amount, date) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO Sales (contactId, amount, date) VALUES (?, ?, ?)',
      [contactId, amount, date],
      (_tx, results) => { console.log('Venda adicionada com sucesso!'); },
      error => { console.log('Erro ao adicionar venda: ', error); }
    );
  });
};
