import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CalculatorComponent } from "./Components/calculator/calculator/calculator.component";
import { TaskComponent } from "./Components/task/task/task.component";

const routes: Routes = [
    // Para definir  la raiz del home 
    { path: '', pathMatch: 'full', component: TaskComponent},
    { path: 'calculator', component: CalculatorComponent },
    // Redirigir a un componente
    { path: 'calculadora', redirectTo: 'calculator' },
    // Para cuando no coincide ninguna de las rutas definidas Error 404
    { path: '**', component: TaskComponent }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}