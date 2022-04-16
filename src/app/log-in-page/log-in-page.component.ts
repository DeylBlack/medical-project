import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {

  public isLogin: boolean = true;
  public loginForm: FormGroup = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });

  public registrationForm: FormGroup = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  public login():void{
    console.log(this.loginForm.value)
  }
}
