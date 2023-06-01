export class Student {
  Id: string;
  FirstName: string;
  LastName: string;
  Gender: string;
  
  constructor(pId: string, pFirstName: string,
    pLastName: string, pGender: string){
    this.Id = pId;
    this.FirstName = pFirstName;
    this.LastName = pLastName;
    this.Gender = pGender;
  }

}