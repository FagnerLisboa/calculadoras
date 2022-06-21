import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImcComponent } from './imc/imc.component';
import { CombustivelComponent } from './combustivel/combustivel.component';
import { GestacaoComponent } from './gestacao/gestacao.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

@NgModule({
  declarations: [
    AppComponent,
    ImcComponent,
    CombustivelComponent,
    GestacaoComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CurrencyMaskModule,
    
  ],
  providers: [
    { provide : CURRENCY_MASK_CONFIG , useValue : CustomCurrencyMaskConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
