import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { StudentsComponent } from './component/students/students.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ErrorComponent } from './component/error/error.component';
import { HeaderComponent } from './component/header/header.component';
import { FormComponent } from './component/form/form.component';

var routes:Routes =[
                    {path:"", component:HomeComponent},
                    {path:"home", component:HomeComponent},
                    {path:"about", component:AboutComponent},
                    {path:"form", component:FormComponent},
                    {path:"**", component:ErrorComponent},
                  ]
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    StudentsComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    HeaderComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
