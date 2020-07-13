//https://www.techiediaries.com/angular/angular-httpclient-9-8-service-api-calls-and-fetching-data/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sets } from '../sets';

@Injectable({
  providedIn: 'root'
})
export class SetsService {
  apiURL: string = 'https://api.magicthegathering.io/v1/sets';

  constructor(private httpClient: HttpClient){}

  public createSets(sets: Sets){}

  public updateSets(sets: Sets){}

  public deleteSets(id: number){}

  public getSetsbyId(id: number){}

  public getSets(url?: string){
    return this.httpClient.get<Sets[]>('${this.apiURL}')
  }

  public firstpage: string = "";
  public prevpage: string = "";
  public nextpage: string = "";
  public lastpage: string = "";

  public getSet(){
    return this.httpClient.get<Sets[]>('${this.apiURL}')
  }

}
