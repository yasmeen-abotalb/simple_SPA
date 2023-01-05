import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  myReg = new FormGroup({
    name: new FormControl(null,[Validators.required , Validators.minLength(3)]),
    age: new FormControl(null,[Validators.min(20),Validators.max(50),Validators.required]),
    mail: new FormControl("", [Validators.required ,Validators.email])
  });

  get ageValid(){
    return this.myReg.controls["age"].valid;
   }
   get NameValid(){
     return this.myReg.controls["name"].valid;
    }
    get mailValid(){
     return this.myReg.controls["mail"].valid;
    }
    nameError ="";
    ageError="";
    mailError ="";
    student:any;
    students:{name:string,age:number;mail:any}[] =[];

    passData(){
      if(this.myReg.status === 'VALID'){
        this.student = this.myReg.value;
        this.students.push(this.student);
      }
      else{
        this.nameError = "name less than 3";
        this.ageError = "20 <age <50";
        this.mailError =" pattern must be email@example.com"
      }

    }


}
