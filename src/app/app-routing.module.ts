import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShowDetailComponent } from './pages/show-detail/show-detail.component';
import { ShowsListComponent } from './pages/shows-list/shows-list.component';
import { GenresComponent } from './pages/genres/genres.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list/:type', component: ShowsListComponent },
  { path: 'detail/:id/:type', component: ShowDetailComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'genres/:genreId', component: GenresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
