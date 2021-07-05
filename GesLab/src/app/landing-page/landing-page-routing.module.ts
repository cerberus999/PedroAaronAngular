import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "home"
  },
  {
    path: '',
    component: LandingPageComponent,
    children:
    [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contactanos',
        component: ContactUsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
