import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  students:string[]=["Noufel","Marwa","Mohamed","Maryem","Siwar","Belhassen"]
  constructor() { }

  getStudent():string[]
  {
    return this.students;
  }
}
