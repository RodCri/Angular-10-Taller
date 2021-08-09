import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './Components/calculator/calculator/calculator.component';
import { TaskComponent } from './Components/task/task/task.component';
import { ListTaskComponent } from './Components/task/list-task/list-task.component';
import { ProductComponent } from './Components/tienda/product/product.component';
import { AccountComponent } from './Components/tienda/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TaskComponent,
    ListTaskComponent,
    ProductComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
