import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageService } from './frontpage/frontpage.service';

const routes: Routes = [
  { path: 'profile', component: FrontpageComponent },
  { path: '', component: FrontpageComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: FrontpageComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FrontpageComponent,
    LoginComponent,
    RegisterComponent
  ],
  exports: [ RouterModule ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [ RouterModule.forRoot(routes) ]
  ],
  providers: [FrontpageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
