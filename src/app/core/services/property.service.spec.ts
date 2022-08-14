import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PropertyService } from './property.service';

describe('PropertyService', () => {
  let service: PropertyService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    })
    service = TestBed.inject(PropertyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all properties', () => {
    const expectedResponse ={
      "pagination": {
        "limit": 20,
        "page": 1,
        "total": 1,
        "next_page": null
      },
      "content": [
        {
          "agent": "John Smith",
          "public_id": "EB-XXX123",
          "title": "Beautiful property in Condesa",
          "title_image_full": "http://assets.easybroker.com/property_images/123/456/EB-010101.jpg",
          "title_image_thumb": "http://assets.easybroker.com/property_images/123/456/EB-010101_thumb.jpg",
          "bedrooms": 0,
          "bathrooms": 0,
          "parking_spaces": 0,
          "location": "Condesa, Cuauhtemoc",
          "property_type": "Apartment",
          "updated_at": "2020-03-01T23:26:53.402Z",
          "show_prices": true,
          "share_commission": true,
          "operations": [
            {
              "type": "sale",
              "amount": 500000,
              "formated_amount": "US$ 500,000",
              "currency": "USD",
              "unit": "total",
              "commission": {
                "type": "amount",
                "value": 10000,
                "currency": "USD"
              }
            },
            {
              "type": "temporary_rental",
              "amount": 500,
              "formated_amount": "US$ 500",
              "currency": "USD",
              "period": "monthly"
            }
          ]
        }
      ]
    }

    let params = '?page=1&limit=15&search%5Bstatuses%5D%5B%5D=published';
    service.getAll(params).subscribe(res => {
      expect(res).toBe(expectedResponse);
    })

    const req = httpMock.expectOne('https://api.stagingeb.com/v1/properties?page=1&limit=15&search%5Bstatuses%5D%5B%5D=published');
    req.flush(expectedResponse);

  });

  it('should retrieve a single property', () => {
    const property_id = 'EB-B5445';
    const expectedResponse = {
      "public_id": "EB-B5445",
      "title": "Casa en Venta Colonia del Valle en San Pedro Garza Garcia",
      "description": "Hermosa residencia de 2 niveles con un estilo contemporáneo moderno.ÁREAS- Hall principal- Sala doble altura- Comedor- Estudio- Baño social- Cocina- Despensa- Family room integrado a la cocina- Recámara con baño vestidor en PB con opción a salón de usos m",
      "bedrooms": 5,
      "bathrooms": 5,
      "half_bathrooms": null,
      "parking_spaces": null,
      "lot_size": 500,
      "construction_size": 630,
      "lot_length": 0,
      "lot_width": 0,
      "floors": null,
      "floor": null,
      "age": null,
      "internal_id": "55825393",
      "expenses": null,
      "location": {
          "name": "Del Valle, San Pedro Garza García, Nuevo León",
          "latitude": 25.6564843,
          "longitude": -100.3694401,
          "street": null,
          "postal_code": null,
          "show_exact_location": true,
          "hide_exact_location": false,
          "exterior_number": null,
          "interior_number": null
      },
      "property_type": "Casa",
      "created_at": "2019-04-17T18:34:05-05:00",
      "updated_at": "2022-08-07T14:25:12-05:00",
      "published_at": "2022-08-07T14:25:12-05:00",
      "operations": [
          {
              "type": "sale",
              "amount": 28900000,
              "currency": "MXN",
              "formatted_amount": "$28,900,000",
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
      "public_url": "https://www.stagingeb.com/mx/inmueble/casa-en-venta-colonia-del-valle-en-san-pedro-garza-garcia",
      "tags": [],
      "show_prices": true,
      "share_commission": false,
      "property_images": [
          {
              "title": null,
              "url": "https://assets.stagingeb.com/property_images/25445/50605/EB-B5445.jpg?version=1555544111"
          },
          {
              "title": null,
              "url": "https://assets.stagingeb.com/property_images/25445/50606/EB-B5445.jpg?version=1555544111"
          },
          {
              "title": null,
              "url": "https://assets.stagingeb.com/property_images/25445/50607/EB-B5445.jpg?version=1555544112"
          },
          {
              "title": null,
              "url": "https://assets.stagingeb.com/property_images/25445/50608/EB-B5445.jpg?version=1555544112"
          },
          {
              "title": null,
              "url": "https://assets.stagingeb.com/property_images/25445/50609/EB-B5445.jpg?version=1555544112"
          },
          {
              "title": null,
              "url": "https://assets.stagingeb.com/property_images/25445/50610/EB-B5445.jpg?version=1555544113"
          },
          {
              "title": null,
              "url": "https://assets.stagingeb.com/property_images/25445/50611/EB-B5445.jpg?version=1555544114"
          },
          {
              "title": null,
              "url": "https://assets.stagingeb.com/property_images/25445/50612/EB-B5445.jpg?version=1555544114"
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
  }

    service.getById(property_id).subscribe(res => {
      expect(res).toBe(expectedResponse);
    })

    const req = httpMock.expectOne('https://api.stagingeb.com/v1/properties/EB-B5445/');
    req.flush(expectedResponse);

  });

});
