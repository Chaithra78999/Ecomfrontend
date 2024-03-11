import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { RegisterServiceService } from './register-service.service';
import { RegisterClass } from './register-class';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule, ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {



  reg: RegisterClass = new RegisterClass();

  constructor(private formBuilder: FormBuilder,
    private regservice: RegisterServiceService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  save() {
    console.log(this.reg);
    this.regservice.file(this.reg).subscribe((data : any) => {
      console.log(data);
      
    })

  }


}
