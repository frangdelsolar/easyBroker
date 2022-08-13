import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from 'src/app/core/services/property.service';


@Component({
  selector: 'app-properties-detail',
  templateUrl: './properties-detail.component.html',
  styleUrls: ['./properties-detail.component.scss']
})
export class PropertiesDetailComponent implements OnInit {

  property_id!: string;
  property: any;
  images: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private propertySvc: PropertyService
  ) {
    this.property_id = this.route.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.propertySvc.getById(this.property_id).subscribe(
      (prop) => {
          this.property = prop;
          for (let image of prop.property_images){
            this.images.push({
                previewImageSrc: image.url,
                thumbnailImageSrc: image.url,
                alt: image.title,
                title: image.title,
            })
          }
      },
      (err)=>{
        alert(err.error.error)
      }
    )
  }

}
