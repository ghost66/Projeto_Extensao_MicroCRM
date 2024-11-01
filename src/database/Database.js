import SQLite from '@react-native-sqlite-storage/react-native-sqlite-storage';
const db = SQLite.openDatabase({ name: 'microcrm.db', location: 'default' });
export default db;
