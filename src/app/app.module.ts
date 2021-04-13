import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { MomentModule } from 'angular2-moment'


import { AppComponent } from './app.component'
import { FirstComponent } from './components/first/first.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { PageComponent } from './pages/page/page.component';
import { routing, appRoutingProviders } from './app.routing';
import { ErrorComponent } from './pages/error/error.component';
import { MovieComponent } from './components/movie/movie.component';
import { RegisterComponent } from './pages/register/register.component';
import { ArticleComponent } from './components/article/article.component';
import { DetailArticleComponent } from './pages/detail-article/detail-article.component';
import { SearchArticleComponent } from './pages/search-article/search-article.component';
import { CreateArticleComponent } from './pages/create-article/create-article.component';
import { EditArticleComponent } from './pages/edit-article/edit-article.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MoviesComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PageComponent,
    ErrorComponent,
    MovieComponent,
    RegisterComponent,
    ArticleComponent,
    DetailArticleComponent,
    SearchArticleComponent,
    CreateArticleComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MomentModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
