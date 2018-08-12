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
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule }   from '@angular/forms';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';
const routes: Routes = [
  { path: 'profile', component: FrontpageComponent },
  { path: '', component: FrontpageComponent },
  { path: 'admin', component: AdminComponent, canActivate: [ AuthGuardComponent ] },
  { path: 'registration', component: RegisterComponent, data: { title: 'Sign Up' }
  },
{ path: '',
  redirectTo: '/profile',
  pathMatch: 'full'
 },
  { path: 'login', component: LoginComponent,data:{title:'Login'} },
  { path: '**', component: FrontpageComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FrontpageComponent,
    LoginComponent,
    RegisterComponent,
    AuthGuardComponent
  ],
  exports: [ RouterModule ],
  imports: [
    BrowserModule,
    FormsModule,  
    HttpClientModule,
    AppRoutingModule,
    [ RouterModule.forRoot(routes)
       ]
  ],
  providers: [FrontpageService,AuthGuardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
