import { Component, OnInit } from '@angular/core';
import { Order } from '../my-form.component.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  model: Order = new Order("", 0, new Date(), "");

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
