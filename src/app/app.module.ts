import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { SupportPageComponent } from './views/support-page/support-page.component';
import { FaqPageComponent } from './views/faq-page/faq-page.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { PostPageComponent } from './views/post-page/post-page.component';
import { ProfilePageComponent } from './views/profile-page/profile-page.component';
import { HomeCardComponent } from './components/home-card/home-card.component';
import { ConstructionAlertComponent } from './components/construction-alert/construction-alert.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PoweredByComponent } from './components/powered-by/powered-by.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    SupportPageComponent,
    FaqPageComponent,
    LoginComponent,
    RegisterComponent,
    PostPageComponent,
    ProfilePageComponent,
    HomeCardComponent,
    ConstructionAlertComponent,
    PoweredByComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
