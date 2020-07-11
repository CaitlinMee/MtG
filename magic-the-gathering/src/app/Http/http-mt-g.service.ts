//https://www.pluralsight.com/guides/posting-deleting-putting-data-angular

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpMtGService {
  url: string;

  constructor(private httpClient:HttpClient) {
  this.url = "https://api.magicthegathering.io"
  }

  public getSets(){
    let endPoints=""
      this.httpClient.get(this.url+endPoints).subscribe(data => {
        console.log(data);
      })
  }

  public getSetById() {
    let id: number = 1;
    let endPoints = "/sets/" + id;
    this.httpClient.get(this.url + endPoints).subscribe( data => {
      console.log(data);
    })
  }

  public addSet(setData: Object) {
    let endPoints = "/sets"
    this.httpClient.post(this.url + endPoints, setData).subscribe(data => {
      console.log(data);
    })
  }

  public updateSet(setData: Object) {
    let endPoints = "/sets/1"
    this.httpClient.put(this.url + endPoints, setData).subscribe(data => {
      console.log(data);
    })
  }

  public deleteSet() {
    let endPoints = "/sets/1"
    this.httpClient.delete(this.url + endPoints).subscribe(data => {
      console.log(data);
    })
  }
}
