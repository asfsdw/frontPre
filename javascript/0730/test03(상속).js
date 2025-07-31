'use strict';

class Member {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get name() {return this._name;}
    set name(name) {this._name = name;}
    get age() {return this._age;}
    set age(age) {
      if(age < 1) age = 1;
      this._age = age;
    }

  memberPrint() {
    let job = '학생'
    console.log('1.성명: ',this.name,' 2.나이: ',this.age,' 3.직업: ',job);
  }
  memberPrint(jop) {
    this.job = jop;
    console.log('1.성명: ',this.name,' 2.나이: ',this.age,' 3.직업: ',job);
  }

  // 원 면적 구하는 메소드
  getArea(r) {
    return (r * r * 3.14);
  }
}