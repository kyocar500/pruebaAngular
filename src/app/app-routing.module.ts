import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './homeComponent/home.component';
import { PageNotFoundComponent } from './pageNotFoundComponent/page-not-found.component';
import { UsuariosComponent } from './usuariosComponent/usuarios.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'usuarios' , component : UsuariosComponent},
    { path: '**', component: PageNotFoundComponent },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RutasModule {}