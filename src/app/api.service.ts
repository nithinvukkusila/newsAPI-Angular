import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private httpclient: HttpClient ) 
  {}
 

  API_KEY = 'ac6aeb1816924e50b3ddf2c0741b03a6';
  public getNews()
  {
    return this.httpclient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`)
  }

}



