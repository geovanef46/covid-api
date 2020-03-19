import { Component } from '@angular/core';
import { Http , Response } from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  constructor(private http: Http){}
  searchString : String = '';
  apiSearch : any;
  dataload: boolean = false;
  searchApi(){
    const urlofApi= 'https://thevirustracker.com/free-api?countryTotal=' + this.searchString;
    console.log(`Valor Pesquisado:${this.searchString}`)
    this.http.get(urlofApi)
    .subscribe(
      (res: Response) => 
        {
          const searchResult = res.json();
          this.dataload = true;
          if(res.ok){
            this.apiSearch = {'erro': 'Atualizando dados... Sistema indisponível'}
            return
          }
          console.log("Response server ...");
          this.apiSearch = searchResult;
          console.log(res);
          //console.log(this.imageSearch.owner.avatar_url);
        }
    );
  }
}
