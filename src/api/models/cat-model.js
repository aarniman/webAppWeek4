import promisePool from "../../utils/database";

const catItems = [
  {
    cat_id: 334,
    name: 'Fluffy',
    weight: 4.5,
    owner: 1525,
    filename: 'f3wdsewr245fsg',
    birthday: '2015-03-23',
  },
  {
    cat_id: 333,
    name: 'Whiskers',
    weight: 5.0,
    owner: 1524,
    filename: 'asd3f4g5h6j7k8l9',
    birthday: '2016-05-23',
  },
  {
    cat_id: 332,
    name: 'Smokey',
    weight: 6.0,
    owner: 1523,
    filename: 'aofj23da1114a1a1',
    birthday: '2017-07-23',
  },
];

const listAllCats = async () => {
  const [rows] = await promisePool.query('SELECT * FROM cats');
  console.log('rows', rows);
  return rows [0];
};

const findCatById = async (id) => {
  const [rows] = await promisePool.execute('SELECT * FROM cats WHERE cat_id = ?', [id]);
  console.log('rows', rows);
  if (rows.length === 0) {
    return false;
  }
  return rows[0];
};

const addCat = async (cat) => {
  const {cat_name, weight, owner, filename, birthday} = cat;
  const sql = 'INSERT INTO cats (cat_name, weight, owner, filename, birthday) VALUES (?, ?, ?, ?, ?)';
  const params = [cat_name, weight, owner, filename, birthday];
    const rows = await promisePool.execute(sql, params);
    console.log('rows', rows);
    if (rows[0].affecredRows === 0){
      return false;
    }
    return {message: 'success'};
};

const modifyCat = async (cat) => {
  const sql = promisePool.format('UPDATE cats SET ? WHERE cat_id = ?', [cat, id]);
    const rows = await promisePool.execute(sql);
    console.log('rows', rows);
    if (rows[0].affectedRows === 0) {
      return false;
    }
    return {message: 'success'};
};

const removeCat = async (id) => {
  const [rows] = await promisePool.execute('DELETE FROM cats WHERE cat_id = ?', [id]);
  console.log('rows', rows);
  if (rows.affectedRows === 0) {
    return false;
  }
  return {message: 'success'};
};

export {listAllCats, findCatById, addCat, modifyCat, removeCat};
