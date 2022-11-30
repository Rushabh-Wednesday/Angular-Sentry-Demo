import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Sentry from '@sentry/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  createUserForm() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    // throw new Error("Sentry is working")
  }

  ngOnInit(): void {
    this.createUserForm();
  }

  submit() {
    // fetch('https://jsonplaceholder.typicode.com/todos/abc')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    this.http.get('http://localhost:3000/express').subscribe(
      (data: any) => {
        const arr = [{ func: function () {} }];
        console.log(arr[1].func());
      },
      (err) => {
        const arr = [{ func: function () {} }];
        console.log(arr[1].func());
        // console.log('err', err.error);
        Sentry.captureException(err.error);
      }
    );
  }
}
