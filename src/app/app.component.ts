import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LeagueApp';
  constructor (private api:GetApiService) {

  }
  ngOnInit() {
    this.api.apiCall().subscribe((data)=>{
      console.warn("get API Data", data);
    })
  }
}
