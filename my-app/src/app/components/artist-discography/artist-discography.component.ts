import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from 'src/app/music-data.service';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css']
})
export class ArtistDiscographyComponent implements OnInit {

  artist: any;
  albums: any;

  constructor( private route: ActivatedRoute, private musicData: MusicDataService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.musicData.getArtistById(id)
    .subscribe(data => {
      this.artist = data;
    });

    this.musicData.getAlbumsByArtistId(id)
    .subscribe(albumData => {
    this.albums = albumData.items.filter((curValue, index, self) =>
      self.findIndex(t =>
        t.name.toUpperCase() === curValue.name.toUpperCase()) === index);
    });

    


    // this.albums = albumData.items.filter((curValue, index, self) =>
    //   self.findIndex(t =>
    //     t.name.toUpperCase() === curValue.name.toUpperCase()) === index);
    // this.artist = artistData;
    
  }

}
