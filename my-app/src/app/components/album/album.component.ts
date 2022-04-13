import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from 'src/app/music-data.service';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album: any;

  constructor(private snackBar: MatSnackBar, private route: ActivatedRoute, private musicData: MusicDataService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.musicData.getAlbumById(id)
      .subscribe(data => {
        this.album = data;
      });
  } 

  addToFavourites(trackID: String){
    this.musicData.addToFavourites(trackID)
    .subscribe(
      {
        next: () => { 
          this.snackBar.open("Adding to Favourites...", "Done", { duration: 1500 });
        },
        error: (err) => {
          this.snackBar.open("Unable to add song to favourites...", "Failed", { duration: 1500 });
        }
      }
    );
   
    
  } 


}
