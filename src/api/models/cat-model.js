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

const listAllCats = () => {
  return catItems;
};

const findCatById = (id) => {
  return catItems.find((item) => Number(item.cat_id) === Number(id));
};

const addCat = (cat) => {
  // eslint-disable-next-line camelcase
  const {cat_name, weight, owner, filename, birthday} = cat;
  const newId = catItems[0].cat_id + 1;
  catItems.unshift({
    cat_id: newId,
    // eslint-disable-next-line camelcase
    cat_name,
    weight,
    owner,
    filename,
    birthday,
  });
  return {cat_id: newId};
};

export {listAllCats, findCatById, addCat};
