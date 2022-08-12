import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

import { environment } from 'src/environments/environment.local';

@Component({
  selector: 'app-properties-detail',
  templateUrl: './properties-detail.component.html',
  styleUrls: ['./properties-detail.component.scss']
})
export class PropertiesDetailComponent implements OnInit {

  properties!: any[];

  constructor(
    private apiSvc: ApiService
  ) { }

  ngOnInit(): void {
    this.apiSvc.get<any>(environment.apiUrl + environment.apiUrlProperties, null, true).subscribe(res=>{
      this.properties = res.content;
      console.log(this.properties)
    })
  }

}
