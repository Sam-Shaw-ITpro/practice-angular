import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-authlogin',
  templateUrl: './authlogin.component.html',
  styleUrls: ['./authlogin.component.css'] 
  
  
//   `
// <form [formGroup]="form">
//     <fieldset>
//         <legend>Login</legend>
//         <div class="form-field">
//             <label>Email:</label>
//             <input name="email" formControlName="email">
//         </div>
//         <div class="form-field">
//             <label>Password:</label>
//             <input name="password" formControlName="password" 
//                    type="password">
//         </div>
//     </fieldset>
//     <div class="form-buttons">
//         <button class="button button-primary" 
//                 (click)="login()">Login</button>
//     </div>
// </form>`


})
  
export class AuthloginComponent {

  form:FormGroup;

  constructor(private fb:FormBuilder, 
               private authService: AuthService, 
               private router: Router) {

      this.form = this.fb.group({
          // email: ['',Validators.required],
          // password: ['',Validators.required]
          email: [''],
          password: ['']
      });
  }

  login() {
      const val = this.form.value;

      if (val.email && val.password) {
          this.authService.login(val.email, val.password)
            //   .subscribe(
            //       () => {
            //           console.log("User is logged in");
            //           this.router.navigateByUrl('/');
            //       }
            //   );
      }
  }
}