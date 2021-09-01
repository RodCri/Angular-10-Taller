import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Para trabajar con formularios template FormsModule
// Para trabajar con formulario model ReactiveFormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './Components/calculator/calculator/calculator.component';
import { TaskComponent } from './Components/task/task/task.component';
import { ListTaskComponent } from './Components/task/list-task/list-task.component';
import { ProductComponent } from './Components/tienda/product/product.component';
import { AccountComponent } from './Components/tienda/account/account.component';
import { FormularioComponent } from './Components/shopingList/formulario/formulario.component';
import { ListaProductosComponent } from './Components/shopingList/lista-productos/lista-productos.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticlesComponent } from './Components/articles/articles.component';
import { AboutComponent } from './Components/blog/about/about.component';
import { InfoComponent } from './Components/blog/info/info.component';
import { ContactComponent } from './Components/blog/contact/contact.component';
import { ClientsComponent } from './Components/blog/clients/clients.component';
import { ProyectosComponent } from './Components/blog/clients/proyectos/proyectos.component';
import { CurriculumComponent } from './Components/blog/clients/curriculum/curriculum.component';
import { NotpageComponent } from './Components/blog/notpage/notpage.component';
import { PersonComponent } from './Components/person/person.component';
import { ListaEscritoresComponent } from './Components/lista-escritores/lista-escritores.component';
import { TemplateComponent } from './Components/formularios/template/template.component';
import { ModelComponent } from './Components/formularios/model/model.component';
import { RegisterComponent } from './Components/Employees/register/register.component';
import { ListEmployeesComponent } from './Components/Employees/list-employees/list-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TaskComponent,
    ListTaskComponent,
    ProductComponent,
    AccountComponent,
    FormularioComponent,
    ListaProductosComponent,
    ArticlesComponent,
    AboutComponent,
    InfoComponent,
    ContactComponent,
    ClientsComponent,
    ProyectosComponent,
    CurriculumComponent,
    NotpageComponent,
    PersonComponent,
    ListaEscritoresComponent,
    TemplateComponent,
    ModelComponent,
    RegisterComponent,
    ListEmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
