import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
const baseUrl = 'https://jsonplaceholder.typicode.com';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpClient: HttpClient) { }

  create(data:any) {
    return this.httpClient.post(baseUrl, data);
  }
}
