import db from "./SQLiteDatabse";

/**
 * INICIALIZAÇÃO DA TABELA
 * - Executa sempre, mas só cria a tabela caso não exista (primeira execução)
 */
db.transaction((tx) => {
  
  //tx.executeSql("DROP TABLE atividades;"); //Deleta a tabela
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS atividades (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria TEXT, descricao TEXT, data TEXT, notificar TEXT, atrasado TEXT, concluida TEXT, dataConcluida TEXT);" //Cria a tabela se ela não existir
  );
});

//Criar o objeto, o resultado é uma promise
const create = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "INSERT INTO atividades (titulo, categoria, descricao, data, notificar, atrasado, concluida, dataConcluida) values (?, ?, ?, ?, ?, ?, ?, ?);",
        [obj.titulo, obj.categoria, obj.descricao, obj.data, obj.notificar, obj.atrasado, obj.concluida, obj.dataConcluida],
        //-----------------------
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) resolve(insertId);
          else reject("Error inserting obj: " + JSON.stringify(obj)); // insert falhou
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

//Remove o objeto com base na busca pelo ID, o resultado é uma promise
const remove = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "DELETE FROM atividades WHERE id=?;",
        [id],
        //-----------------------
        (_, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};
//Retorna todos os objetos da Tabela, o resultado é uma promise
const all = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "SELECT * FROM atividades;",
        [],
        //-----------------------
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

//Faz o update de um objeto com base na busca pelo ID, o segundo parâmetro faz referência aos dados a serem atualizados. O resultado é uma promise
const update = (id, obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "UPDATE atividades SET titulo=?, categoria=?, descricao=?, data=?, notificar=?, atrasado=?, concluida=?, dataConcluida=? WHERE id=?;",
        [obj.titulo, obj.categoria, obj.descricao, obj.data, obj.notificar, obj.atrasado, obj.concluida, obj.dataConcluida, id],
        //-----------------------
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) resolve(rowsAffected);
          else reject("Error updating obj: id=" + id); // nenhum registro alterado
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

//Faz a busca um item com base no ID, o resultado é uma Promise
const find = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "SELECT * FROM atividades WHERE id=?;",
        [id],
        //-----------------------
        (_, { rows }) => {
          if (rows.length > 0) resolve(rows._array[0]);
          else reject("Obj not found: id=" + id); // nenhum registro encontrado
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

//Busca no banco as atividades marcadas como conluida ou não, use 1 para concluida e 0 para não concluida
const findByConcluded = (concluida) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "SELECT * FROM atividades WHERE concluida LIKE ?;",
        [concluida],
        //-----------------------
        (_, { rows }) => {resolve(rows._array);},
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

export default {
  create,
  update,
  all,
  remove,
  find,
  findByConcluded
};


