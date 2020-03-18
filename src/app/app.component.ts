import { Component } from '@angular/core';
import { Http , Response } from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private http: Http){}
  searchString : String = '';
  imageSearch = [];
  searchImages(){
    const urlofApi= 'https://thevirustracker.com/free-api?countryTotal=' + this.searchString;
    this.http.get(urlofApi)
    .subscribe(
      (res: Response) => 
        {
          const searchResult = res.json();  
          console.log(searchResult);
          this.imageSearch = searchResult.items;
          //console.log(this.imageSearch.owner.avatar_url);
        }
    );
  }
}
