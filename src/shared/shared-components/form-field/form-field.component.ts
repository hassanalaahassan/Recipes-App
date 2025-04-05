import { Component, Input,  } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {
  @Input({required:true}) label: string = '';
  @Input({required:true}) type: string = 'text';
  @Input({required:true}) controlName: any ;
  @Input({required:true}) placeholder: string = 'text';
  @Input() touched: boolean | undefined = undefined;
  @Input() required: boolean | undefined = undefined;
  @Input() minLen: boolean | undefined = undefined;
  @Input() email: boolean | undefined = undefined;



}
