import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./Components/blog/about/about.component";
import { ClientsComponent } from "./Components/blog/clients/clients.component";
import { CurriculumComponent } from "./Components/blog/clients/curriculum/curriculum.component";
import { ProyectosComponent } from "./Components/blog/clients/proyectos/proyectos.component";
import { ContactComponent } from "./Components/blog/contact/contact.component";
import { InfoComponent } from "./Components/blog/info/info.component";
import { NotpageComponent } from "./Components/blog/notpage/notpage.component";

const routes: Routes = [
    // Para definir  la raiz del home 
    // Redirigir a un componente
    { path: '', pathMatch: 'full', redirectTo: 'info'},
    // Rutas fijas
    { path: 'info', component: InfoComponent},
    { path: 'about', component: AboutComponent},
    // Rutas hijas dinamicas
    {path: 'cli', component:ClientsComponent},
    { 
        path: 'cli/:clientId', component: ClientsComponent, children:[
            { path: 'proyectos', component: ProyectosComponent},
            { path: 'curriculum', component: CurriculumComponent}
        ] 
    },
    { path: 'contact', component: ContactComponent },
    // Para cuando no coincide ninguna de las rutas definidas Error 404
    { path: '**', component: NotpageComponent }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}