import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PageComponent } from './pages/page/page.component';
import { ErrorComponent } from './pages/error/error.component';
import { RegisterComponent } from './pages/register/register.component';
import { DetailArticleComponent } from './pages/detail-article/detail-article.component';
import { SearchArticleComponent } from './pages/search-article/search-article.component';
import { CreateArticleComponent } from './pages/create-article/create-article.component';
import { EditArticleComponent } from './pages/edit-article/edit-article.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'page', component: PageComponent },
  { path: 'crear/articulo', component: CreateArticleComponent },
  { path: 'editar/articulo/:id', component: EditArticleComponent },
  { path: 'buscar/:article', component: SearchArticleComponent },
  { path: 'page/:name/:lastname', component: PageComponent },
  { path: 'detalleArticle/:id', component: DetailArticleComponent },
  { path: 'r', component: RegisterComponent },
  { path: '**', component: ErrorComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
