import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-properties-detail',
  templateUrl: './properties-detail.component.html',
  styleUrls: ['./properties-detail.component.scss']
})
export class PropertiesDetailComponent implements OnInit {

  property_id!: number;
  property: any;

  constructor(
    private route: ActivatedRoute
  ) {
    this.property_id = this.route.snapshot.params['id'];
   }

  ngOnInit(): void {
  }

}
