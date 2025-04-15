import { Component } from '@angular/core';
import { ToastComponent } from "../../../shared/shared-components/toast/toast.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from "../../../shared/shared-components/form-field/form-field.component";
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ToastComponent, CommonModule, ReactiveFormsModule, FormFieldComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  showToast: boolean = false;
  userForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    role: new FormControl('user', Validators.required),
  })

  constructor(
    private auth:AuthService,
    private router:Router
  ) {}

  onSubmit(): void {
    if (this.userForm.invalid) {
      return;
    }
    let checkAdmin:boolean = false

    if (this.userForm.value.email!= null && this.userForm.value.email!=undefined) {
        checkAdmin = this.auth.isAdmin(this.userForm.value.email);
    }
    checkAdmin ? this.userForm.value.role = "admin" : this.userForm.value.role = "user"
    const formData = this.userForm.value;
    this.auth.register(formData);
    this.userForm.reset();
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
    this.router.navigate(['/auth/login']);
  }
}
