import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from 'src/app/music-data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  results: any;
	searchQuery: String = "";

  constructor(private route: ActivatedRoute, private musicData: MusicDataService) { }

  ngOnInit(): void {  
    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { order: "popular" 
      this.searchQuery = params['q'];
    }
  );

    this.musicData.searchArtists(this.searchQuery)
    .subscribe((data: any) => {
     this.results = data.artists.items.filter((artist: any) =>{
        return artist.images.length > 0
      })
    });
      
  }
}
