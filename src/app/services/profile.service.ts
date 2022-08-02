import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url: string = 'https://api.github.com/users/';

  constructor(private http : HttpClient) { }
  getUser (username:string) {
    
    return this.http.get(this.url+username);
  }
  getRepos (username:string){
    return this.http.get(this.url+username+"/repos");
  }
  getProfile (username:string) {
    return this.http.get("https://api.github.com/users/NyawiraWachira");
  }
  getProfileRepos (username:string) {
    return this.http.get("https://api.github.com/users/NyawiraWachira"+"/repos");
  }
}
