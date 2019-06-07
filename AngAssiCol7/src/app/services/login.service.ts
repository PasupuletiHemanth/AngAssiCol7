import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../model/ILogin';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginInfoArry:ILogin[]=[
    {"name": "Hemanth", "age": 29, "married": true, "password":"a101", "userId":"a101"},
    {"name": "Kavitha", "age": 25, "married": true, "password":"a102", "userId":"a102"}
]
  

  constructor(private http: HttpClient) { }

  public validateLogin(loginForm: FormGroup): boolean {
    let strUserId: string = loginForm.get('userId').value;
    let strPassword: string = loginForm.get('password').value;
  
    console.log("in validate login");
    console.log(this.loginInfoArry[0].name);

   for(let loginObject of this.loginInfoArry)
   {
    console.log(loginObject.name);
    if(strUserId ==loginObject.userId && strPassword== loginObject.password)
    {
      console.log("login success");
      return true;
    }
    else{
      return false
    }
   }
}
}