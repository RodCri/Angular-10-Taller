export class Person{
    
    name: string;
    lastname: string;
    state: boolean;
    age: number;
    
    constructor(pName: string, pLastName: string, pState: boolean, pAge: number){
        this.name = pName;
        this.lastname = pLastName;
        this.state = pState;
        this.age = pAge;
    }
}