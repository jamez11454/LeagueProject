import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient
  ) { }

  apiCall() {
    return this.http.get('https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-1726fcb4-ad4c-486d-a650-92cc2ca71df2')
  }
}
