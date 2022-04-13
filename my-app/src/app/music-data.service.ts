import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SpotifyTokenService } from './spotify-token.service';

import { mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { typeofExpr } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class MusicDataService {


  constructor(private spotifyToken: SpotifyTokenService, private http: HttpClient) { }

  getNewReleases(): Observable<SpotifyApi.ListOfNewReleasesResponse> {
    return this.spotifyToken.getBearerToken().pipe(mergeMap(token => {
      return this.http.get<SpotifyApi.ListOfNewReleasesResponse>("https://api.spotify.com/v1/browse/new-releases", { headers: { "Authorization": `Bearer ${token}` } });
    }));
  }

  getArtistById(id: String): Observable<SpotifyApi.ArtistSearchResponse> {
    return this.spotifyToken.getBearerToken().pipe(mergeMap(token => {
      return this.http.get<SpotifyApi.ArtistSearchResponse>(`https://api.spotify.com/v1/artists/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
    }));
  }

  getAlbumsByArtistId(id: String): Observable<SpotifyApi.ArtistsAlbumsResponse> {
    return this.spotifyToken.getBearerToken().pipe(mergeMap(token => {
      return this.http.get<SpotifyApi.ArtistsAlbumsResponse>(`https://api.spotify.com/v1/artists/${id}/albums?include_groups=album,single&limit=50`, { headers: { "Authorization": `Bearer ${token}` } });
    }));
  }

  getAlbumById(id: String): Observable<SpotifyApi.ArtistsAlbumsResponse> {
    return this.spotifyToken.getBearerToken().pipe(mergeMap(token => {
      return this.http.get<SpotifyApi.ArtistsAlbumsResponse>(`https://api.spotify.com/v1/albums/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
    }));
  }

  searchArtists(searchString: String): Observable<SpotifyApi.ArtistsAlbumsResponse> {
    return this.spotifyToken.getBearerToken().pipe(mergeMap(token => {
      return this.http.get<SpotifyApi.ArtistsAlbumsResponse>(`https://api.spotify.com/v1/search?q=${searchString}&type=artist&limit=50`, { headers: { "Authorization": `Bearer ${token}` } });
    }));
  }

  addToFavourites(id:String): Observable<[String]> {
    return this.http.put<[String]>(environment.userAPIBase + "/favourites/:id", {params: id});
  }
  
  removeFromFavourites(id: String): Observable<any> {
    return this.http.delete<any>(`${environment.userAPIBase}/favourites/${id}`).pipe(mergeMap(favouritesArray => {
      if (favouritesArray.favourites.length <= 0 )
      return new Observable(o=>o.next({tracks: []}));
      return this.spotifyToken.getBearerToken().pipe(mergeMap(token => {
        return this.http.get<SpotifyApi.ArtistsAlbumsResponse>(`https://api.spotify.com/v1/tracks?ids=${favouritesArray.favourites.join()}`, { headers: { "Authorization": `Bearer ${token}` } });
      }));
    }));
  }

  getFavourites(): Observable<any> {0
    return this.http.get<any>(`${environment.userAPIBase}/favourites/`).pipe(mergeMap(favouritesArray => {
     if (favouritesArray.data.length <= 0 )
      return new Observable(o=>o.next({tracks: []}));
      return this.spotifyToken.getBearerToken().pipe(mergeMap(token => {
        return this.http.get<SpotifyApi.ArtistsAlbumsResponse>(`https://api.spotify.com/v1/tracks?ids=${favouritesArray.data.join()}`, { headers: { "Authorization": `Bearer ${token}` } });
      }));
    }));
  }


























}







