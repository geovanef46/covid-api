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
  apiSearch = [];
  searchApi(){
    const urlofApi= 'https://thevirustracker.com/free-api?countryTotal=' + this.searchString;
    console.log(`Valor Pesquisado:${this.searchString}`)
    this.http.get(urlofApi)
    .subscribe(
      (res: Response) => 
        {
          const searchResult = res.json();  
          console.log(searchResult);
          this.apiSearch = searchResult;
          console.log(this.apiSearch);
          //console.log(this.imageSearch.owner.avatar_url);
        }
    );
  }
}
