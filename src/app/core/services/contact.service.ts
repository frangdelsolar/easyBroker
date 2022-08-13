import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContactRequest } from '../models/contact-request.interface';
import { PrivateApiService } from './private-api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  _apiUrl = environment.apiUrl + environment.apiUrlContactRequests;

  constructor(private privateSvc: PrivateApiService) {}

  public create(body: ContactRequest){
    return this.privateSvc.post<ContactRequest>(this._apiUrl, body, true);
  }

}
