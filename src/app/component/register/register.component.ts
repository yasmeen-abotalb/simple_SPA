import { Component ,EventEmitter,Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
myRegister = new FormGroup({
  name: new FormControl(null,[Validators.required , Validators.minLength(3)]),
  age: new FormControl(null,[Validators.min(20),Validators.max(50),Validators.required]),
  mail: new FormControl("", [Validators.required ,Validators.email])
});

  @Output() formEvent = new EventEmitter();
  get ageValid(){
   return this.myRegister.controls["age"].valid;
  }
  get NameValid(){
    return this.myRegister.controls["name"].valid;
   }
   get mailValid(){
    return this.myRegister.controls["mail"].valid;
   }
   nameError ="";
   ageError="";
   mailError ="";

  passData(){
    console.log(this.myRegister);
    console.log(this.myRegister.value);
    console.log(this.myRegister.status);
    console.log(this.myRegister.controls["mail"].valid);
      if(this.myRegister.status ==="VALID"){
        this.formEvent.emit(this.myRegister.value);
      }else{
        this.nameError = "name less than 3";
        this.ageError = "20 <age <50";
        this.mailError =" pattern must be email@example.com"
      }

  }
}
