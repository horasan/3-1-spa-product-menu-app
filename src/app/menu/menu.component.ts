import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menuItem-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuItemFromApi: Observable<MenuItem[]>;
  private errorMessage: String = '';
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSearchForSuggestion(searchValue: string) {
    console.log(searchValue);
    
    if (searchValue.length < 3) {
      this.menuItemFromApi = null;
      return;
    }

  this.errorMessage = '';
  this.http.get(environment.elasticSearchApiEndPoint + environment.elasticSearchDescriptionApiEndPoint + '/' +  searchValue)
    .subscribe((res: any) => {
      this.menuItemFromApi = res;     
    }, errorRes => {
      if (errorRes.status == 404) {
        this.errorMessage = 'Record not found ';
        this.menuItemFromApi = null;
      }
    });
  }

}
