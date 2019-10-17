import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TypescriptComponent } from './components/typescript/typescript.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  { path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
  { path: 'home', component: HomeComponent },
  { path: 'typescript', component: TypescriptComponent },
  { path: '**', component: PageNotFoundComponent }
];  

@NgModule({
  declarations: [
    AppComponent,
    TypescriptComponent,
    PageNotFoundComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
