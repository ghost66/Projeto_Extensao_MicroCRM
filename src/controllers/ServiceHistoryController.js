import db from '../models/Database';

export const getServiceHistory = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM ServiceHistory',
        [],
        (_tx, results) => {
          let data = [];
          for (let i = 0; i < results.rows.length; i++) {
            data.push(results.rows.item(i));
          }
          resolve(data);
        },
        error => {
          reject(error);
        }
      );
    });
  });
};
