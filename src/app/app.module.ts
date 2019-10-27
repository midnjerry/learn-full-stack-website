import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TypescriptComponent } from './pages/typescript/typescript.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterComponent } from './pages/router/router.component';
import { CodeblockComponent } from './components/codeblock/codeblock.component';
import { ComponentComponent } from './pages/component/component.component';
import { QuoteblockComponent } from './components/quoteblock/quoteblock.component';
import { ArticleComponent } from './components/article/article.component';

const appRoutes: Routes = [
  { path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
  { path: 'home', component: HomeComponent },
  { path: 'typescript', component: TypescriptComponent },
  { path: 'router', component: RouterComponent},
  { path: 'component', component: ComponentComponent},
  { path: '**', component: PageNotFoundComponent }
];  

@NgModule({
  declarations: [
    AppComponent,
    TypescriptComponent,
    PageNotFoundComponent,
    NavbarComponent,
    HomeComponent,
    RouterComponent,
    CodeblockComponent,
    ComponentComponent,
    QuoteblockComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
