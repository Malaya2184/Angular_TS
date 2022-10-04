export enum EmployeeType{
    fresh=0, regular, retired
}
export class Employee {
    id : number;
    name : string;
    dateOfJoin : Date;
    empType : EmployeeType;

    constructor(id:number, name: string, dateOfJoin : Date, empType: EmployeeType){
        this.id = id;
        this.name= name;
        this.dateOfJoin= dateOfJoin;
        this.empType= empType;
    }
}
