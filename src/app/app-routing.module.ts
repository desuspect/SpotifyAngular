import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AlbumComponent } from './components/album/album.component';
import { ArtistDiscographyComponent } from './components/artist-discography/artist-discography.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { GuardAuthService } from './guard-auth.service';

const routes: Routes = [
  {path: 'newReleases', component: NewReleasesComponent, canActivate: [GuardAuthService]},
  {path: 'about', component: AboutComponent, canActivate: [GuardAuthService]},
  {path: 'album/:id', component: AlbumComponent, canActivate: [GuardAuthService]},
  {path: 'artistDiscography/:id', component: ArtistDiscographyComponent, canActivate: [GuardAuthService]},
  {path: 'search', component: SearchResultComponent, canActivate: [GuardAuthService]},
  {path: 'favourites', component: FavouritesComponent, canActivate: [GuardAuthService]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
