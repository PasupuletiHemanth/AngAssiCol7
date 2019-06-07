import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  public loginForm: FormGroup;
  msgs: Message[] = [];
  
  constructor(private loginService:LoginService,public router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup( {
      userId: new FormControl( '', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  
  public onloginHandler()
  {
    
    console.log("in login handler");
    console.log(this.loginForm.get('userId'));
    console.log(this.loginForm.get('password').value);
    if(this.loginService.validateLogin(this.loginForm) == true)
    {
      console.log("before routing");
      this.router.navigate(['orders']);
    }
    else
    {
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Login failed', detail:'User Id or Password is Incorrect'});
    }
    
  }

}
