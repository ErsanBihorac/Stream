import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('passwordField') passwordField!: ElementRef;

  createAccount() {
    let name = this.nameField.nativeElement.value
    let email = this.emailField.nativeElement.value
    let password = this.passwordField.nativeElement.value
    console.log(name, email, password);
  }
}
