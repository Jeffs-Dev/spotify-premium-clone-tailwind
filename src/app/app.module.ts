import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InitialBannerComponent } from './components/initial-banner/initial-banner.component';
import { WhyGoPremiumComponent } from './components/why-go-premium/why-go-premium.component';
import { PickYourPremiumComponent } from './components/pick-your-premium/pick-your-premium.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InitialBannerComponent,
    WhyGoPremiumComponent,
    PickYourPremiumComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
