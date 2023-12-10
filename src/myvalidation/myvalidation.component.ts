import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import Swal from 'sweetalert2';

import{FormGroup,FormControl,Validators,ReactiveFormsModule,FormsModule} from '@angular/forms'
import { MatDialogContent } from '@angular/material/dialog';
@Component({
  selector: 'app-myvalidation',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule ,CommonModule,MatDialogContent,MatButtonModule ],
  templateUrl: './myvalidation.component.html',
  styleUrl: './myvalidation.component.css'
})
// const Swal = require('sweetalert2')
export class MyvalidationComponent {
myForm = new FormGroup({
  pan: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]$/)]),
  email: new FormControl("",[Validators.required,Validators.email]),
  phone: new FormControl("",[Validators.required,Validators.pattern(/^\d{10}$/)]),
  aadhaar: new FormControl("",[Validators.required,Validators.pattern(/^(\d{4}\s){2}\d{4}$/)])

})
message:any;
validatePan(control:any){
  
  let newVal;
  newVal +=control;
  // if(newVal.lengh == 10){
  //   alert(10)
  // }
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

  if (control && !panRegex.test(control)) {
    console.log("no")
    this.message = null
    return { invalidPan: true };
  }
  console.log("YES")

  this.message = "valid pan"
  return null;
}
pan:any;
onChangeInput(){
  
  let input:any = this.myForm.controls['aadhaar'].value
  const cleanedInput = input.replace(/\s/g, '');

  // Add a space after every 4 digits
  let formattedInput = cleanedInput.replace(/(\d{4})/g, '$1 ');
//   let value :any = this.myForm.controls['aadhaar'].value
//   // value = value?.replace(/\s/g, '').replace(/(.{4})/g, '$1 ')
//     console.log(value)
     formattedInput = formattedInput.trim()
     console.log(formattedInput.length)
    this.myForm.controls['aadhaar'].setValue(formattedInput)
//   // console.log(this.myForm.value['aadhaar'] = value)
}
isValidField:boolean = false
alertme(data:any){
  this.myForm.controls['email'].setValue(data)
    console.log(this.myForm)
  if(this.myForm.controls['email'].valid){
    this.isValidField = true;
  }
}
submitData(){
  Swal.fire({
    icon: "success",
    title: "Your data has been saved",
    showConfirmButton: true,
  });
}
}
