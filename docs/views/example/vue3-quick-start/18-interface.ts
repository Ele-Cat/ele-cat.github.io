// 18-interface.ts
// 定义一个接口，限制每个Person对象的格式
export interface PersonInter {
  id: string;
  name: string;
  age: number;
}
// 定义一个自定义类型Persons
export type Persons = Array<PersonInter>;