// const a  = 1
// const ws = new WebSocket("wss://echo.websocket.org");
// ws.
type A = [1, 2, 3];
const a: A = [1, 2, 3];
console.log(a);
const enum OK {
  test1,
  test2,
  test,
}
function ok(value: OK) {
  return "okokok";
}
// 不应该使用直接enum传值，OK只有三个项但是100是合法值，无法检测错误，使用时最好使用字符串enum
ok(100);
let a1: unknown;
a1 = 10;
a1 = "2423";
console.log(a1);
if (typeof a1 === "number") {
  const c = a1 + 1;
}

function hello(date: string, user = "hahaha") {
  console.log(date, user);
}
hello("adsf");
function next(...number: number[]) {
  console.log(number, "next");
}
next(1, 5);
function that(this: number) {
  return this;
}
that.call(1);
type func = { (a: number, b: number): void };
function func1(a, b = 111): func {
  console.log(a, b);
  return;
}
func1(1);
const log: func = (a, b = 1111) => {
  console.log(a);
};
type Check = {
  (tag: "check1"): number;
  (tag: "check2"): string;
  (tag: string): number;
};
const check: Check = (tag) => {
  if (tag === "check2") {
    return tag;
  } else {
    return Math.random();
  }
};
check("check1");
