import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  constructor(
    private router : Router,
    private formBuilder: FormBuilder,
    private authService : AuthService
  ) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        cellPhone: ['', [Validators.required]],
        dateOfBirth: ['', [Validators.required]],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  async onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    const token = await this.authService.createToken(this.form.value);
    localStorage.setItem(`token`, token);
    this.router.navigate([`note-list/${token}`])
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
