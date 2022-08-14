import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_TOKEN } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class PrivateApiService {
  private _headers!: HttpHeaders;

  constructor(private http: HttpClient) {
    
    let token = API_TOKEN;
    this._headers = new HttpHeaders({
      'X-Authorization': token,
      'accept': 'application/json',
    });
  }

  public get<T>(url: string, id: string|null, activateHeader: boolean = false): Observable<T> {
    if (id != null){
      url = `${url}/${id}/`
    }

    return this.http.get<T>(
      url, 
      activateHeader ? { headers: this._headers } : {}
      );
  }

  public post<T>(url: string, body: any, activateHeader: boolean = false): Observable<T> {
    return this.http.post<T>(
      url, 
      body, 
      activateHeader ? { headers: this._headers } : {}
      );
  }
 
}
