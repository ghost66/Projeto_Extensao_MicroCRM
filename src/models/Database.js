import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  { name: 'crm.db', location: 'default' },
  () => {},
  error => { console.log(error); }
);

const createTables = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, address TEXT, phone TEXT, email TEXT, servicePreferences TEXT);'
    );
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Services (id INTEGER PRIMARY KEY AUTOINCREMENT, contactId INTEGER, date TEXT, description TEXT, status TEXT);'
    );
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS ServiceHistory (id INTEGER PRIMARY KEY AUTOINCREMENT, contactId INTEGER, serviceId INTEGER, feedback TEXT);'
    );
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Sales (id INTEGER PRIMARY KEY AUTOINCREMENT, contactId INTEGER, amount REAL, date TEXT);'
    );
  });
};

export { db, createTables };
