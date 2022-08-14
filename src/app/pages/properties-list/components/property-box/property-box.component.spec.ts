import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBoxComponent } from './property-box.component';

describe('PropertyBoxComponent', () => {
  let component: PropertyBoxComponent;
  let fixture: ComponentFixture<PropertyBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBoxComponent);
    component = fixture.componentInstance;
    component.property = {
      "public_id": "EB-B5439",
      "title": "Casa en Venta del Valle en San Pedro Garza García",
      "title_image_full": "https://assets.stagingeb.com/property_images/25439/50546/EB-B5439.jpg?version=1555544076",
      "title_image_thumb": "https://assets.stagingeb.com/property_images/25439/50546/EB-B5439_thumb.jpg?version=1555544076",
      "location": "Del Valle, San Pedro Garza García, Nuevo León",
      "operations": [
          {
              "type": "sale",
              "amount": 24450000,
              "currency": "MXN",
              "formatted_amount": "$24,450,000",
              "commission": {
                  "type": "percentage"
              },
              "unit": "total"
          }
      ],
      "bedrooms": 3,
      "bathrooms": 4,
      "parking_spaces": 4,
      "property_type": "Casa",
      "lot_size": 432,
      "construction_size": 516,
      "updated_at": "2022-08-07T14:25:12-05:00",
      "agent": "Alejandro Blanco Zivec",
      "show_prices": true,
      "share_commission": false
  };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
