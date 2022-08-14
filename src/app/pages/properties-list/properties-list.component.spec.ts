import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { PropertyService } from 'src/app/core/services/property.service';
import { of } from 'rxjs';

import { PropertiesListComponent } from './properties-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('PropertiesListComponent', () => {
  let component: PropertiesListComponent;
  let fixture: ComponentFixture<PropertiesListComponent>;
  let fakePropertyService: PropertyService;

  beforeEach(async () => {
    const propertyListResponse = {
      "pagination": {
          "limit": 15,
          "page": 15,
          "total": 458,
          "next_page": "https://api.stagingeb.com/v1/properties?limit=15&page=16&search%5Bstatuses%5D%5B%5D=published"
      },
      "content": [
          {
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
          },
          {
              "public_id": "EB-B5441",
              "title": "Casa en Venta en Valle San Pedro Garza Garcia",
              "title_image_full": "https://assets.stagingeb.com/property_images/25441/50564/EB-B5441.jpg?version=1555544086",
              "title_image_thumb": "https://assets.stagingeb.com/property_images/25441/50564/EB-B5441_thumb.jpg?version=1555544086",
              "location": "Palo Blanco, San Pedro Garza García, Nuevo León",
              "operations": [
                  {
                      "type": "sale",
                      "amount": 27000000,
                      "currency": "MXN",
                      "formatted_amount": "$27,000,000",
                      "commission": {
                          "type": "percentage"
                      },
                      "unit": "total"
                  }
              ],
              "bedrooms": 3,
              "bathrooms": 5,
              "parking_spaces": 4,
              "property_type": "Casa",
              "lot_size": 766,
              "construction_size": 783,
              "updated_at": "2022-08-07T14:25:12-05:00",
              "agent": "Alejandro Blanco Zivec",
              "show_prices": true,
              "share_commission": false
          },
          {
              "public_id": "EB-B5445",
              "title": "Casa en Venta Colonia del Valle en San Pedro Garza Garcia",
              "title_image_full": "https://assets.stagingeb.com/property_images/25445/50605/EB-B5445.jpg?version=1555544111",
              "title_image_thumb": "https://assets.stagingeb.com/property_images/25445/50605/EB-B5445_thumb.jpg?version=1555544111",
              "location": "Del Valle, San Pedro Garza García, Nuevo León",
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
              "bedrooms": 5,
              "bathrooms": 5,
              "parking_spaces": null,
              "property_type": "Casa",
              "lot_size": 500,
              "construction_size": 630,
              "updated_at": "2022-08-07T14:25:12-05:00",
              "agent": "Alejandro Blanco Zivec",
              "show_prices": true,
              "share_commission": false
          },
          {
              "public_id": "EB-B5487",
              "title": "Casa en Venta en Jardines Coloniales en San Pedro",
              "title_image_full": "https://assets.stagingeb.com/property_images/25487/51049/EB-B5487.jpg?version=1555544374",
              "title_image_thumb": "https://assets.stagingeb.com/property_images/25487/51049/EB-B5487_thumb.jpg?version=1555544374",
              "location": "Jardines Coloniales 1er Sector, San Pedro Garza García, Nuevo León",
              "operations": [
                  {
                      "type": "sale",
                      "amount": 45000000,
                      "currency": "MXN",
                      "formatted_amount": "$45,000,000",
                      "commission": {
                          "type": "percentage"
                      },
                      "unit": "total"
                  }
              ],
              "bedrooms": 4,
              "bathrooms": 7,
              "parking_spaces": 4,
              "property_type": "Casa",
              "lot_size": 1300,
              "construction_size": 800,
              "updated_at": "2022-08-07T14:25:12-05:00",
              "agent": "Alejandro Blanco Zivec",
              "show_prices": true,
              "share_commission": false
          },
          {
              "public_id": "EB-B5493",
              "title": "Departamentos en Venta Centrito 360 San Pedro Garza Garcia",
              "title_image_full": "https://assets.stagingeb.com/property_images/25493/51109/EB-B5493.jpg?version=1555544408",
              "title_image_thumb": "https://assets.stagingeb.com/property_images/25493/51109/EB-B5493_thumb.jpg?version=1555544408",
              "location": "Del Valle, San Pedro Garza García, Nuevo León",
              "operations": [
                  {
                      "type": "sale",
                      "amount": 12711400,
                      "currency": "MXN",
                      "formatted_amount": "$12,711,400",
                      "commission": {
                          "type": "percentage"
                      },
                      "unit": "total"
                  }
              ],
              "bedrooms": 0,
              "bathrooms": null,
              "parking_spaces": null,
              "property_type": "Departamento",
              "lot_size": 0,
              "construction_size": 244,
              "updated_at": "2022-08-07T14:25:12-05:00",
              "agent": "Alejandro Blanco Zivec",
              "show_prices": true,
              "share_commission": false
          },
          {
              "public_id": "EB-B5498",
              "title": "Casa en Venta Lomas del Valle en San Pedro Garza Garcia",
              "title_image_full": "https://assets.stagingeb.com/property_images/25498/51138/EB-B5498.jpg?version=1555544425",
              "title_image_thumb": "https://assets.stagingeb.com/property_images/25498/51138/EB-B5498_thumb.jpg?version=1555544425",
              "location": "Lomas Del Valle, San Pedro Garza García, Nuevo León",
              "operations": [
                  {
                      "type": "sale",
                      "amount": 27950000,
                      "currency": "MXN",
                      "formatted_amount": "$27,950,000",
                      "commission": {
                          "type": "percentage"
                      },
                      "unit": "total"
                  }
              ],
              "bedrooms": 4,
              "bathrooms": 6,
              "parking_spaces": null,
              "property_type": "Casa",
              "lot_size": 500,
              "construction_size": 625,
              "updated_at": "2022-08-07T14:25:12-05:00",
              "agent": "Alejandro Blanco Zivec",
              "show_prices": true,
              "share_commission": false
          },
          {
              "public_id": "EB-B5363",
              "title": "Departamentos en Venta Centrito 360 San Pedro Garza Garcia",
              "title_image_full": "https://assets.stagingeb.com/property_images/25363/49660/EB-B5363.jpg?version=1555543479",
              "title_image_thumb": "https://assets.stagingeb.com/property_images/25363/49660/EB-B5363_thumb.jpg?version=1555543479",
              "location": "Del Valle, San Pedro Garza García, Nuevo León",
              "operations": [
                  {
                      "type": "sale",
                      "amount": 12711400,
                      "currency": "MXN",
                      "formatted_amount": "$12,711,400",
                      "commission": {
                          "type": "percentage"
                      },
                      "unit": "total"
                  }
              ],
              "bedrooms": 0,
              "bathrooms": null,
              "parking_spaces": null,
              "property_type": "Departamento",
              "lot_size": 0,
              "construction_size": 244,
              "updated_at": "2022-08-07T14:25:13-05:00",
              "agent": "Alejandro Blanco Zivec",
              "show_prices": true,
              "share_commission": false
          },
          {
              "public_id": "EB-B5368",
              "title": "Casa en Venta Lomas del Valle en San Pedro Garza Garcia",
              "title_image_full": "https://assets.stagingeb.com/property_images/25368/49689/EB-B5368.jpg?version=1555543501",
              "title_image_thumb": "https://assets.stagingeb.com/property_images/25368/49689/EB-B5368_thumb.jpg?version=1555543501",
              "location": "Lomas Del Valle, San Pedro Garza García, Nuevo León",
              "operations": [
                  {
                      "type": "sale",
                      "amount": 27950000,
                      "currency": "MXN",
                      "formatted_amount": "$27,950,000",
                      "commission": {
                          "type": "percentage"
                      },
                      "unit": "total"
                  }
              ],
              "bedrooms": 4,
              "bathrooms": 6,
              "parking_spaces": null,
              "property_type": "Casa",
              "lot_size": 500,
              "construction_size": 625,
              "updated_at": "2022-08-07T14:25:13-05:00",
              "agent": "Alejandro Blanco Zivec",
              "show_prices": true,
              "share_commission": false
          },
          {
              "public_id": "EB-B5369",
              "title": "Casa en Venta Colonia del Valle en San Pedro Garza Garcia",
              "title_image_full": "https://assets.stagingeb.com/property_images/25369/49705/EB-B5369.jpg?version=1555543511",
              "title_image_thumb": "https://assets.stagingeb.com/property_images/25369/49705/EB-B5369_thumb.jpg?version=1555543511",
              "location": "Del Valle, San Pedro Garza García, Nuevo León",
              "operations": [
                  {
                      "type": "sale",
                      "amount": 30850000,
                      "currency": "MXN",
                      "formatted_amount": "$30,850,000",
                      "commission": {
                          "type": "percentage"
                      },
                      "unit": "total"
                  }
              ],
              "bedrooms": 4,
              "bathrooms": 4,
              "parking_spaces": null,
              "property_type": "Casa",
              "lot_size": 590,
              "construction_size": 610,
              "updated_at": "2022-08-07T14:25:13-05:00",
              "agent": "Alejandro Blanco Zivec",
              "show_prices": true,
              "share_commission": false
          },
          {
              "public_id": "EB-B5407",
              "title": "Casa en Venta Fuentes del Valle en San Pedro Garza Garcia",
              "title_image_full": "https://assets.stagingeb.com/property_images/25407/50196/EB-B5407.jpg?version=1555543838",
              "title_image_thumb": "https://assets.stagingeb.com/property_images/25407/50196/EB-B5407_thumb.jpg?version=1555543838",
              "location": "Fuentes del Valle, San Pedro Garza García, Nuevo León",
              "operations": [
                  {
                      "type": "sale",
                      "amount": 27600000,
                      "currency": "MXN",
                      "formatted_amount": "$27,600,000",
                      "commission": {
                          "type": "percentage"
                      },
                      "unit": "total"
                  }
              ],
              "bedrooms": 4,
              "bathrooms": 6,
              "parking_spaces": null,
              "property_type": "Casa",
              "lot_size": 480,
              "construction_size": 630,
              "updated_at": "2022-08-07T14:25:13-05:00",
              "agent": "Alejandro Blanco Zivec",
              "show_prices": true,
              "share_commission": false
          },
          {
              "public_id": "EB-B5550",
              "title": "Casa en Venta Fuentes del Valle en San Pedro Garza Garcia",
              "title_image_full": "https://assets.stagingeb.com/property_images/25550/51780/EB-B5550.jpg?version=1555544803",
              "title_image_thumb": "https://assets.stagingeb.com/property_images/25550/51780/EB-B5550_thumb.jpg?version=1555544803",
              "location": "Fuentes del Valle, San Pedro Garza García, Nuevo León",
              "operations": [
                  {
                      "type": "sale",
                      "amount": 27600000,
                      "currency": "MXN",
                      "formatted_amount": "$27,600,000",
                      "commission": {
                          "type": "percentage"
                      },
                      "unit": "total"
                  }
              ],
              "bedrooms": 4,
              "bathrooms": 6,
              "parking_spaces": null,
              "property_type": "Casa",
              "lot_size": 480,
              "construction_size": 630,
              "updated_at": "2022-08-07T14:25:13-05:00",
              "agent": "Alejandro Blanco Zivec",
              "show_prices": true,
              "share_commission": false
          },
          {
              "public_id": "EB-B5551",
              "title": "Departamento en Venta Torre Antigua Hacienda San Agustin en San Pedro",
              "title_image_full": "https://assets.stagingeb.com/property_images/25551/51792/EB-B5551.jpg?version=1555544810",
              "title_image_thumb": "https://assets.stagingeb.com/property_images/25551/51792/EB-B5551_thumb.jpg?version=1555544810",
              "location": "Antigua Hacienda San Agustin, San Pedro Garza García, Nuevo León",
              "operations": [
                  {
                      "type": "sale",
                      "amount": 7000000,
                      "currency": "MXN",
                      "formatted_amount": "$7,000,000",
                      "commission": {
                          "type": "percentage"
                      },
                      "unit": "total"
                  }
              ],
              "bedrooms": 3,
              "bathrooms": 3,
              "parking_spaces": 2,
              "property_type": "Departamento",
              "lot_size": 0,
              "construction_size": 180,
              "updated_at": "2022-08-07T14:25:13-05:00",
              "agent": "Alejandro Blanco Zivec",
              "show_prices": true,
              "share_commission": false
          },
          {
              "public_id": "EB-B9714",
              "title": "Hermosa casa en Tijuana",
              "title_image_full": "https://assets.stagingeb.com/property_images/29714/115393/EB-B9714.jpg?version=1582309771",
              "title_image_thumb": "https://assets.stagingeb.com/property_images/29714/115393/EB-B9714_thumb.jpg?version=1582309771",
              "location": "3 de Octubre, Tijuana, Baja California",
              "operations": [
                  {
                      "type": "sale",
                      "amount": 1233213,
                      "currency": "MXN",
                      "formatted_amount": "$1,233,213",
                      "commission": {
                          "type": "percentage"
                      },
                      "unit": "total"
                  },
                  {
                      "type": "rental",
                      "currency": "MXN",
                      "formatted_amount": "Consulte precio",
                      "commission": {
                          "type": "percentage"
                      },
                      "unit": "total"
                  }
              ],
              "bedrooms": 3,
              "bathrooms": 4,
              "parking_spaces": 5,
              "property_type": "Casa",
              "lot_size": 324,
              "construction_size": 345,
              "updated_at": "2022-08-07T14:25:13-05:00",
              "agent": "Alejandro Blanco Zivec",
              "show_prices": true,
              "share_commission": true
          },
          {
              "public_id": "EB-C0079",
              "title": "Casa en Venta Amorada en Santiago Nuevo Leon 2",
              "title_image_full": "https://assets.stagingeb.com/property_images/30079/116048/EB-C0079.jpg?version=1593798969",
              "title_image_thumb": "https://assets.stagingeb.com/property_images/30079/116048/EB-C0079_thumb.jpg?version=1593798969",
              "location": "PRI, Santiago Papasquiaro, Durango",
              "operations": [
                  {
                      "type": "sale",
                      "amount": 5400000,
                      "currency": "MXN",
                      "formatted_amount": "$5,400,000",
                      "commission": {
                          "type": "percentage"
                      },
                      "unit": "total"
                  }
              ],
              "bedrooms": 3,
              "bathrooms": 3,
              "parking_spaces": 2,
              "property_type": "Casa",
              "lot_size": 262,
              "construction_size": 324,
              "updated_at": "2022-08-07T14:25:13-05:00",
              "agent": "Alejandro Blanco Zivec",
              "show_prices": true,
              "share_commission": false
          },
          {
              "public_id": "EB-C0097",
              "title": "Casa en Venta Amorada en Santiago Nuevo Leon",
              "title_image_full": "https://assets.stagingeb.com/property_images/30097/116353/EB-C0097.jpg?version=1596480427",
              "title_image_thumb": "https://assets.stagingeb.com/property_images/30097/116353/EB-C0097_thumb.jpg?version=1596480427",
              "location": "PRI, Santiago Papasquiaro, Durango",
              "operations": [
                  {
                      "type": "sale",
                      "amount": 5400000,
                      "currency": "MXN",
                      "formatted_amount": "$5,400,000",
                      "commission": {
                          "type": "percentage"
                      },
                      "unit": "total"
                  },
                  {
                      "type": "rental",
                      "amount": 25000,
                      "currency": "MXN",
                      "formatted_amount": "$25,000",
                      "commission": {
                          "type": "percentage"
                      },
                      "unit": "total"
                  },
                  {
                      "type": "temporary_rental",
                      "amount": 989,
                      "currency": "MXN",
                      "formatted_amount": "$989 por noche",
                      "period": "daily"
                  }
              ],
              "bedrooms": 3,
              "bathrooms": 3,
              "parking_spaces": 2,
              "property_type": "Casa",
              "lot_size": 262,
              "construction_size": 324,
              "updated_at": "2022-08-07T14:25:13-05:00",
              "agent": "Alejandro Blanco Zivec",
              "show_prices": true,
              "share_commission": false
          }
      ]
  }

    const fakePropertyService = jasmine.createSpyObj<PropertyService>(
      'PropertyService',
      {
        getAll: of(propertyListResponse),
      }
    );
    
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],

      declarations: [ PropertiesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});