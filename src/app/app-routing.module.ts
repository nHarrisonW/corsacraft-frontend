import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { FaqPageComponent } from './views/faq-page/faq-page.component';
import { SupportPageComponent } from './views/support-page/support-page.component';
import { AboutUsComponent } from './views/about-us/about-us.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Register', component:RegisterComponent},
  {path:'Login', component:LoginComponent},
  {path:'FrequentlyAskedQuestions', component:FaqPageComponent},
  {path:'Support', component:SupportPageComponent},
  {path:'AboutUs', component:AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
