import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from 'src/app/music-data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favourites: Array<any> = [];
  
  constructor(private route: ActivatedRoute, private musicData: MusicDataService) { }

  ngOnInit(): void {
    this.musicData.getFavourites()
    .subscribe(data =>{
      this.favourites = data.tracks;
    })
  }

  removeFromFavourites(id: String) {
    this.musicData.removeFromFavourites(id)
    .subscribe(data => {
      this.favourites = data.tracks; 
    })
  }

}
