import _ from 'lodash';

console.log(_);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(_.first(numbers));
console.log(_.last(numbers));
console.log(_.head(numbers));
console.log(_.nth(numbers, 6));

const chunked = _.chunk(numbers, 2);
console.log(chunked);

const diff = _.difference(numbers, [1, 4, 5]);
console.log(diff);

const dropped = _.drop(numbers, 2);
console.log(dropped);

const taken = _.take(numbers, 5);
console.log(taken);

let filled = _.fill(['a', 'b', 'c'], 1);
console.log(filled);

filled = _.fill(Array(3), 1);
console.log(filled);

const num = [1, 2, [2, [4]], [5]];
console.log(_.flatten(num));
console.log(_.flattenDeep(num));
console.log(_.flattenDepth(num, 2));

const c = [1, 2, 4];
const d = [2, 4, 5];
console.log(_.union(c, d));
console.log(_.intersection(c, d));

const employees = [
  {
    id: 1,
    first_name: 'Ogdan',
    last_name: 'Lorenzini',
    email: 'olorenzini0@squarespace.com',
    gender: 'Male',
    salary: 8,
  },
  {
    id: 2,
    first_name: 'Cary',
    last_name: 'Buessen',
    email: 'cbuessen1@google.com.au',
    gender: 'Female',
    salary: 43,
  },
  {
    id: 3,
    first_name: 'Roderigo',
    last_name: 'Brunelli',
    email: 'rbrunelli2@timesonline.co.uk',
    gender: 'Male',
    salary: 30,
  },
  {
    id: 4,
    first_name: 'Violante',
    last_name: 'Reynault',
    email: 'vreynault3@microsoft.com',
    gender: 'Female',
    salary: 19,
  },
  {
    id: 5,
    first_name: 'Inger',
    last_name: 'Drayson',
    email: 'idrayson4@newyorker.com',
    gender: 'Female',
    salary: 59,
  },
  {
    id: 6,
    first_name: 'Mattheus',
    last_name: 'Harley',
    email: 'mharley5@disqus.com',
    gender: 'Male',
    salary: 20,
  },
  {
    id: 7,
    first_name: 'Ermin',
    last_name: 'Birney',
    email: 'ebirney6@time.com',
    gender: 'Polygender',
    salary: 25,
  },
  {
    id: 8,
    first_name: 'Graeme',
    last_name: 'Reede',
    email: 'greede7@squidoo.com',
    gender: 'Male',
    salary: 24,
  },
  {
    id: 9,
    first_name: 'Lynsey',
    last_name: 'Mulhill',
    email: 'lmulhill8@biglobe.ne.jp',
    gender: 'Female',
    salary: 44,
  },
  {
    id: 10,
    first_name: 'Meyer',
    last_name: 'Comberbeach',
    email: 'mcomberbeach9@theguardian.com',
    gender: 'Male',
    salary: 18,
  },
];

console.log(_.countBy(employees, 'gender'));
console.log(_.groupBy(employees, 'gender'));

const maxSalary = _.orderBy(employees, 'salary', 'desc');
console.log(maxSalary);

const top3 = _.take(maxSalary, 3);
console.log(top3);

const top3Names = _.map(top3, 'first_name');
console.log(top3Names);

const totalSalary = _.reduce(employees, (prev, curr) => prev + curr.salary, 0);
console.log(totalSalary);

const grpByGender = _.groupBy(employees, 'gender');
console.log(grpByGender);

const totalSalaryByGender = _.map(grpByGender, (grp) =>
  _.reduce(grp, (prev, curr) => prev + curr.salary, 0)
);
console.log(totalSalaryByGender);
