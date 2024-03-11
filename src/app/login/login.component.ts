import { Component } from '@angular/core';
import { Login } from './login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { routes } from '../app.routes';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterModule, ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginclass : Login = new Login();

  res: any;
  status: any;
 

  constructor(private loginService : LoginService,
    private router : Router,
    //  private toastr : ToastrService
     ){

  }

  login(){
    console.log(this.loginclass);
    this.loginService.logs(this.loginclass).subscribe((data : any) =>{
      console.log(data);
      
      this. res = data;
      this.status = data.status;
      alert('login successfully! "Congratulation..')
// this.toastr.success('Login successfully!.. ""Users')
      if (status == "") {
        this.router.navigate(['/productDetails'])
      }else {
        alert('Enter correct user Name and password')
        console.log("wrong password");
      }
      
    })
  }
}
