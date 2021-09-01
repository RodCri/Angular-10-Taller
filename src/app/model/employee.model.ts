export class Employee{
    
    name: string;
    lastName: string;
    age: number;
    department: string;
    password: string;
    photo: string;

    constructor(pName: string, pLastName: string, pAge: number, pDepartment: string, pPassword: string, pPhoto: string){
        this.name = pName;
        this.lastName = pLastName;
        this.age = pAge;
        this.department  = pDepartment;
        this.password = pPassword;
        this.photo = pPhoto;
    }
}