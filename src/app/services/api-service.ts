import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class ApiService {
  constructor(private http: HttpClient){

  }

  getData(apiUrl: string, data?: any): Observable<any> {
    return this.http.get(apiUrl, {
      params: new HttpParams ({fromObject: data})
    });
  }
}