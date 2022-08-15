import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() images!: any[];

  constructor() { }

  ngOnInit(): void {
    if (this.images.length <= 0){
      this.images = [{
        previewImageSrc: 'assets/property-placeholder_grande.webp',
        thumbnailImageSrc: 'assets/property-placeholder_grande.webp',
        alt: 'property placeholder',
        title: 'property placeholder',
      }]
    }
  }

}
