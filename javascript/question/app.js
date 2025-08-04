//Q1 変数

let nickname ='あらし';
let age = 31;

console.log('私のニックネームは' + nickname + 'です。年齢は'+ age + 'です');

//Q2 配列

const languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

// Q3 オブジェクト

let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
};
console.log(user.age);

//Q4 配列✖︎オブジェクト
let playerList = [
    {
        name: 'John',
        age: 26,
        favorites: ['Card Game', 'Basket Ball', 'Programming'],
    },
    {
        name: 'Bob',
        age: 33,
        favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
        name: 'Michael',
        age: 22,
        favorites: ['Football', 'Smash Bros.'],
    },
];

    console.log(playerList[1].favorites[1]);

//Q5 四則演算
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / playerList.length);



//Q6 関数
function sayHello(){
    let text = 'Hello';
    console.log(text);
}
sayHello();

sayWorld = function(){
    console.log("World");
};
sayWorld();


// Q7　メソッド

user.barthday = `2000-09-27`;
console.log(user)


//Q8 引数
let calc = {};

// add メソッド
calc.add = function(x, y) {
    console.log(x + y);
};
calc.add(3,4);

// subtract メソッド
calc.subtract = function(x, y) {
    console.log(x - y);
};
calc.subtract(15, 5);

// multiply メソッド
calc.multiply = function(x, y) {
    console.log(x * y);
};
calc.multiply(7, 7);

// divide メソッド
calc.divide = function(x, y) {
    console.log(x / y);
};
calc.divide(25, 5);



//Q9  返り値

const x = 5;
const y = 3;

const remainder = x % y;

console.log(`${5}を${3}で割った余りは${remainder}です。`);


//Q10


// function foo() {
//     let x = 1;
// }
//   console.log(x);

//関数内だけがスコープが有効なため、エラーが出る
//関数内でconsole.log(X);が記述されてれば、スコープの有効範囲内のため、返ってくる。
//また、関数外で変数(x)が定義されている場合、関数の外で定義した変数は関数の中からでも参照できるので、
//値が返ってくる。


// 応用編問題
// Q1 標準組み込みオブジェクト
const randomNumberInt = Math.floor(Math.random() * 9);
console.log(randomNumberInt);

// // Q2 コールバック関数
function message() {
    console.log("Hello World!");
}

setTimeout(message, 3000);

// // Q3 if
let num = 0;
if (num > 0) {
    console.log('num is greater than 0');
} else if (num < 0) {
    console.log('num is less than 0');
} else if (num == 0) {
    console.log('num is 0');
}


// Q4 for
for (let i = 0; i < 100; i++) {
    console.log(i);
}

// Q5 for × if

let mixed = [4, '2', 5, '8', '9', 0, 1];

for (const item of mixed) {
if (typeof item === 'number'){
    if (item % 2 === 0) {
        console.log(`even`);
    } else {
        console.log(`odd`);
    }
    } else {
    console.log(`not number`);
    }
}
