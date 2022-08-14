import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PropertyService } from 'src/app/core/services/property.service';

import { PropertiesDetailComponent } from './properties-detail.component';

describe('PropertiesDetailComponent', () => {
  let component: PropertiesDetailComponent;
  let fixture: ComponentFixture<PropertiesDetailComponent>;
  let fakePropertyService: PropertyService;

  beforeEach(async () => {
    const propertyDetailResponse = {
      "public_id": "EB-B5338",
      "title": "Locales en Venta Edificio Roble en San Pedro Garza Garcia",
      "description": "El edificio Roble cuenta con: - Locales comerciales y restaurantes - 4 niveles de área comercial - 26 locales de 31 hasta 266 m2 - elevadores - 2,707.61 m2 de área rentable - 4,825.7 m2 de construcción - 1,433 m2 de terreno CARACTERÍSTICAS DEL LOCAL - Muros perimetrales de block aparente - cielo: losa de concreto aligerada - Firme de concreto - Frente: cristal con puerta de cristal templado - Preparaciones: eléctricas, hidrosanitarias, voz datos, aire acondicionado DISPONIBLE NIVEL 2 - Local 10 / 132.31 m2 - Local 13 / 57.31 m2 - Local 14 / 64.16 m2 NIVEL 3 - Local 19 / 64.54 m2 - Local 20 / 61.18 m2 - Local 21 / 57.34 m2 - Local 24 / 52.81 m2 NIVEL 4 - Local 28 / 61.18 m2 NIVEL 5 - Restaurante 1 / 325.23 m2 ID-1403",
      "bedrooms": null,
      "bathrooms": null,
      "half_bathrooms": null,
      "parking_spaces": null,
      "lot_size": 0,
      "construction_size": 61,
      "lot_length": 0,
      "lot_width": 0,
      "floors": null,
      "floor": null,
      "age": null,
      "internal_id": null,
      "expenses": null,
      "location": {
          "name": "Valle Del Campestre, San Pedro Garza García, Nuevo León",
          "latitude": 25.6493905,
          "longitude": -100.3561053,
          "street": null,
          "postal_code": null,
          "show_exact_location": true,
          "hide_exact_location": false,
          "exterior_number": null,
          "interior_number": null
      },
      "property_type": "Local comercial",
      "created_at": "2019-04-17T18:21:16-05:00",
      "updated_at": "2022-08-07T14:08:49-05:00",
      "published_at": "2022-08-07T14:08:49-05:00",
      "operations": [
          {
              "type": "sale",
              "amount": 5506200,
              "currency": "MXN",
              "formatted_amount": "$5,506,200",
              "commission": {
                  "type": "percentage"
              },
              "unit": "total"
          }
      ],
      "property_files": [],
      "videos": [],
      "virtual_tour": null,
      "collaboration_notes": null,
      "public_url": "https://www.stagingeb.com/mx/inmueble/locales-en-venta-edificio-roble-en-san-pedro-garza-garcia-9a168540-1ca8-4f3a-bbb2-3ca7ee573492",
      "tags": [],
      "show_prices": true,
      "share_commission": false,
      "property_images": [
          {
              "title": null,
              "url": "https://assets.stagingeb.com/property_images/25338/49435/EB-B5338.jpg?version=1555543329"
          },
          {
              "title": null,
              "url": "https://assets.stagingeb.com/property_images/25338/49436/EB-B5338.jpg?version=1555543330"
          },
          {
              "title": null,
              "url": "https://assets.stagingeb.com/property_images/25338/49437/EB-B5338.jpg?version=1555543331"
          },
          {
              "title": null,
              "url": "https://assets.stagingeb.com/property_images/25338/49438/EB-B5338.jpg?version=1555543332"
          },
          {
              "title": null,
              "url": "https://assets.stagingeb.com/property_images/25338/49439/EB-B5338.jpg?version=1555543332"
          },
          {
              "title": null,
              "url": "https://assets.stagingeb.com/property_images/25338/49440/EB-B5338.jpg?version=1555543333"
          },
          {
              "title": null,
              "url": "https://assets.stagingeb.com/property_images/25338/49441/EB-B5338.jpg?version=1555543333"
          }
      ],
      "agent": {
          "id": 2829,
          "name": "Alejandro Blanco Zivec",
          "full_name": "Alejandro Blanco Zivec",
          "mobile_phone": "5512123132",
          "profile_image_url": "https://assets.stagingeb.com/profile_images/2829/Alex__1___scaled_.jpg",
          "email": "ablanco+prueba5@easybroker.com"
      },
      "features": []
  };

    const fakePropertyService = jasmine.createSpyObj<PropertyService>(
      'PropertyService',
      {
        getById: of(propertyDetailResponse),
      }
    );

    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      declarations: [ PropertiesDetailComponent ],
      providers: [
        {
          provide: PropertyService,
          useValue: fakePropertyService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {params: {id: 'EB-B5338'}}
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
});
