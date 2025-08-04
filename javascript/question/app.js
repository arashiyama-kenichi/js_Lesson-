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
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);



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
calc.add = function(x,y){
    console.log(x +y);
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

function foo() {
    let t = 1;
  }
  console.log(t);

//関数内だけがスコープが有効な為、エラーが出る
// 関数内でconsole.log(X);が定義されてれば、関数の外で定義した変数は関数の課からでも
// 参照可能


