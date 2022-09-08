import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherAPI';

  constructor(private apiService:ApiService){

  }

  ngOnInit(){
    this.getApiResponse();
  }

  getApiResponse() : void {
    this.apiService.getWeather()
    .subscribe((data) => { console.log(data)  });

  }
}
