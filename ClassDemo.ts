class Associate{
    associateId:any;
    firstName:string;
    lastName:string;
    basicSalary:number;
    hra:number;
    ta:number;
    da:number;
    totalSalary:number;
    constructor(associateId:number,firstName:string,lastName:string,basicSalary:number){
        this.associateId=associateId;
        this.firstName=firstName;
        this.lastName=lastName;
        this.basicSalary=basicSalary;
    }
    calculateTotalSalary():void{
        this.hra=this.basicSalary*10/100;
        this.ta=this.basicSalary*7/100;
        this.da=this.basicSalary*6/100;
        this.totalSalary=this.basicSalary+this.ta+this.da+this.hra;
    }
    toString():string{
        return this.associateId+" "+this.firstName+" "+this.lastName+" "+this.basicSalary+" "+this.totalSalary;
    }
}
    var associatesList=new Array<Associate>(3);
    associatesList[0]=new Associate(101,"Satish","Mahajan",15000);
    associatesList[1]=new Associate(102,"Ashav","Kumar",25000);
    associatesList[2]=new Associate(103,"Keshav","Kumar",35000);
    associatesList.forEach(associate => {
        associate.calculateTotalSalary();
        console.log(associate.toString())
    })