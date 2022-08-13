import { Component, Input, OnInit } from '@angular/core';
import { PropertyForList } from 'src/app/core/models/property-for-list.interface';

@Component({
  selector: 'app-property-box',
  templateUrl: './property-box.component.html',
  styleUrls: ['./property-box.component.scss']
})
export class PropertyBoxComponent implements OnInit {
  @Input() property!: PropertyForList;

  constructor() { }

  ngOnInit(): void {
  }

}
