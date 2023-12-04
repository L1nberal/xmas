import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const fullRangeArray = Array.from({ length: 100 }, (_, index) => index + 1);
// //generate 95-item array
// const result: number[] = [];

// for (let i = 1; i <= 95; i++) {
//   const index = Math.floor(Math.random() * fullRangeArray.length);
//   const number = fullRangeArray[index];

//   fullRangeArray.splice(index, 1);
//   result.push(number);
// }

// const remainingNumbers = [];

// for (let i = 1; i <= 100; i++) {
//   if (!result.includes(i)) {
//     remainingNumbers.push(i);
//   }
// }
// console.log(result);

// console.log(remainingNumbers);

// const remainingNumbers = fullRangeArray.filter(
//   (item) => !result.includes(item)
// );

// console.log(remainingNumbers);
// console.log(result);

// class StringHelper {
//   inputString: string;

//   constructor(inputString: string) {
//     this.inputString = inputString;
//   }

//   concat(secondString: string): string {
//     return `${this.inputString} ${secondString}`;
//   }

//   subString(firstIndex: number, lastIndex?: number): string {
//     const array = this.inputString.split('');

//     if (lastIndex) {
//       return array.slice(firstIndex, lastIndex).join('');
//     } else {
//       return array.slice(firstIndex).join('');
//     }
//   }

//   distinct(): string {
//     return [...new Set(this.inputString)].join('');
//   }

//   contains(secondString: string): boolean {
//     return this.inputString
//       .toLocaleLowerCase()
//       .includes(secondString.toLocaleLowerCase());
//   }
// }

// const name = new StringHelper('Tran Cong Nhat Linh');

// const isExist = name.contains('cong');
// const addAge = name.concat('23 years old');
// const getLastname = name.subString(6);
// const getDistinct = name.distinct();

// console.log(isExist);
// console.log(addAge);
// console.log(getLastname);
// console.log(getDistinct);
