import { Component, OnInit } from '@angular/core';
import { User } from '../sign-up.component.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  model: User = new User("", "", "", "");


  onSubmit(): void {
    console.log(this.model);
  } 
consolelog(lettre: any) {
  console.log(lettre)
}
  constructor() { }

  ngOnInit(): void {
  }

}
