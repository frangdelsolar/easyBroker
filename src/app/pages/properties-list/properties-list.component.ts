import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pagination } from 'src/app/core/models/pagination.interface';
import { PropertyForList } from 'src/app/core/models/property-for-list.interface';
import { PropertyService } from 'src/app/core/services/property.service';



@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})
export class PropertiesListComponent implements OnInit {

  properties: BehaviorSubject<any> = new BehaviorSubject(null);

  pagination: Pagination = {
    limit: 15,
    page: 0,
    total: 0,
    next_page: ""
  };
  
  constructor(
    private propertySvc: PropertyService
  ) { 
  
  }

  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties(){
    let params: string = `?page=${this.pagination.page}&limit=${this.pagination.limit}&search%5Bstatuses%5D%5B%5D=published`;
    this.propertySvc.getAll(params).subscribe(props => {
      this.properties.next(props.content);
      this.pagination = props.pagination;
    })
  }

  paginate(ev: any){
    this.pagination.page = ev.pageIndex;
    this.loadProperties();
  }
}
