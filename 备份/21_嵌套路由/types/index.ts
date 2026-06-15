export interface PersonInter {
    name: string;
    age: number;
    id: string;
}

// 自定义类型/泛型
export type Persons = Array<PersonInter>

// 其他写法

export type personType = PersonInter[]