import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_TOKEN } from 'src/environments/environment.local';


@Injectable({
  providedIn: "root",
})
export class ApiService {
  private _headers!: HttpHeaders;
  

  constructor(private http: HttpClient) {
    
    let token = API_TOKEN;

    if (token) {
      token = `${token}`;
      this._headers = new HttpHeaders({
        'X-Authorization': token,
        'accept': 'application/json',
      });
    }
  }

  public get<T>(url: string, id: number|null, activateHeader: boolean = false): Observable<T> {
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

  public put<T>(url: string, body: any, id: number, activateHeader: boolean = false): Observable<T> {
    return this.http.put<T>(
      `${url}/${id}/`, 
      body, 
      activateHeader ? { headers: this._headers } : {}
      );
  }

  public patch<T>(url: string, body : {}, activateHeader: boolean = true): Observable<T> {
    return this.http.patch<T>(
      url,
      body ? body : {},
      activateHeader ? { headers: this._headers } : {}
    );
  }

  public delete<T>(url: string, id: number, activateHeader: boolean = true): Observable<T> {
    return this.http.delete<T>(
      `${url}/${id}/`,
      activateHeader ? { headers: this._headers } : {}
    );
  }
  
}
