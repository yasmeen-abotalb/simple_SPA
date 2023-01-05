import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  students:{name:string,age:Number,mail:any}[] = [];
  getChildData(data:any){
    this.students.push(data);
  }
}

