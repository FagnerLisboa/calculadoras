import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombustivelComponent } from './combustivel/combustivel.component';
import { FooterComponent } from './footer/footer.component';
import { GestacaoComponent } from './gestacao/gestacao.component';
import { HomeComponent } from './home/home.component';
import { ImcComponent } from './imc/imc.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'imc', component: ImcComponent },
  { path: 'gestacao', component: GestacaoComponent },
  { path: 'combustivel', component: CombustivelComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
