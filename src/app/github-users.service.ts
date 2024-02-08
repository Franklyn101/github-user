import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {

  private postJsonValue: any;

  constructor(private http: HttpClient) { }
  

  getJsonValue() {
    const apiUrl = 'https://api.github.com/users'; 
    return this.http.get(apiUrl);
  }


  getOenJsonValue(id: number | string) {
    const apiUrl = `https://api.github.com/users/${id}`; 
    return this.http.get(apiUrl);
  }
  
  }

  