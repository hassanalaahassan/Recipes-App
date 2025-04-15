import { Component } from '@angular/core';
import { ToastComponent } from "../../../shared/shared-components/toast/toast.component";
import { AuthService } from '../../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from "../../../shared/shared-components/form-field/form-field.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ToastComponent, CommonModule, FormFieldComponent,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showToast: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  constructor(
    private auth:AuthService,
    private router:Router
  ) { }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const formData = this.loginForm.value;
    const existUser = this.auth.login(formData);
    if(existUser){
      this.loginForm.reset();
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
      this.router.navigate(['/All-Recipes']);
    }
    else {
      return
    }

  }
}
