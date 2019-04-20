import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { CollectionsComponent } from './collections/collections.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { LinksComponent } from './links/links.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainPageComponent } from './main-page/main-page.component';

const appRoutes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: 'sign-up', component: SignUpComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    BenefitsComponent,
    CollectionsComponent,
    NewArrivalsComponent,
    SubscribeComponent,
    LinksComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
