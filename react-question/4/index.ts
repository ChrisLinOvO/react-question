// Interface 用於定義一個物件的結構，包括屬性的名稱、型別和方法，有助於在程式碼中明確地定義和強制實現某種結構，提高程式碼的可讀性和可維護性。
// 定義一個介面表示人員
interface Person {
  name: string;
  age: number;
  sayHello(): void;
}

// 實現 Person 介面
class Employee implements Person {
  constructor(public name: string, public age: number) { }

  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const john: Person = new Employee("John", 25);
john.sayHello(); // 輸出: Hello, my name is John.


// Enum 用於定義一組數值，通常用於表示一組相關的常數或選項。
// 定義一個顏色的列舉
enum Color {
  Red,
  Green,
  Blue,
}

// 使用列舉
let myColor: Color = Color.Red;

if (myColor === Color.Red) {
  console.log("The color is red.");
} else {
  console.log("The color is not red.");
}