import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.local';
import { PropertyList } from '../models/property-list.interface';
import { Property } from '../models/property.interface';
import { PrivateApiService } from './private-api.service';


@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  
  _apiUrl = environment.apiUrl + environment.apiUrlProperties;

  constructor(private adminSvc: PrivateApiService) {}

  public getAll(params: string|null=null){
    let url = this._apiUrl
    if(params){
      url = this._apiUrl + params;
    }
    return this.adminSvc.get<PropertyList>(url, null, true);
  }

  public getById(id: string){
    return this.adminSvc.get<Property>(this._apiUrl, id, true);
  }

}