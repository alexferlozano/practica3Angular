import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  animations:[
  ]
})
export class FormsComponent implements OnInit {
  formulario=new FormGroup({
    name: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required,Validators.max(150)])
  });
  constructor() { }

  ngOnInit(): void {
  }
  onlyNumber(event:any):boolean
  {
    const char =(event.which)?event.which: event.keyCode;
    if(char > 31 && (char < 48 || char > 57))
    {
      console.log("Ingrese numeros por favor")
      return false;
    }
      return true;
  }
}
