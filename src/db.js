import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase('verb.db');

export class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS verbs (id INTEGER PRIMARY KEY NOT NULL, word1 TEXT NOT NULL, word2 TEXT NOT NULL, word3 TEXT NOT NULL, transcription1 TEXT NOT NULL, transcription2 TEXT NOT NULL, transcription3 TEXT NOT NULL, translate TEXT NOT NULL, definition TEXT NOT NULL,)',
          [],
        );
      });
    });
  }

  static getPosts() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM verbs',
          [],
          (_, result) => resolve(result.rows._array),
          (_, error) => reject(error),
        );
      });
    });
  }
}
