import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rfs',
  templateUrl: './rfs.component.html',
  styleUrls: ['./rfs.component.css'],
})
export class RfsComponent implements OnInit {
  // Form control
  employeeName = new FormControl('', [Validators.required]);

  updateEmployeeName() {
    this.employeeName.setValue('Joseph');
  }

  // Form group control
  employeeForm = new FormGroup({
    employeeName: new FormControl('', [Validators.required]),
    employeeEmail: new FormControl('', [Validators.required, Validators.email]),
    employeePhone: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    console.log(this.employeeForm.value);
    this.employeeForm.reset();
  }

  constructor() {}

  ngOnInit(): void {}
}
