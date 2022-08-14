import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { ContactRequest } from '../models/contact-request.interface';

import { ContactService } from './contact.service';

describe('ContactService', () => {
  let service: ContactService;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new ContactService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return success response when form is valid', () => {
    const mockData: ContactRequest = {
      name: 'Nombre',
      phone: '123123123',
      email: 'email@email.com',
      message: 'Test message',
      property_id: 'EB-12312',
      source: 'test_source'
    }
    const mockSuccessResponse = {
      "status": "successful"
    }
    httpClientSpy.post.and.returnValue(of(mockSuccessResponse))
    service.create(mockData).subscribe(res=>{
      expect(res).toEqual(mockSuccessResponse)
    })
  })

  it('should return error response when form is invalid', () => {
    const mockData: ContactRequest = {
      name: '',
      phone: '',
      email: '',
      message: '',
      property_id: 'EB-12312',
      source: 'test_source'
    }
    const mockErrorResponse = new HttpErrorResponse({
      error: "You must specify a name, email or phone number.",
      status: 422
    })
    httpClientSpy.post.and.returnValue(throwError(mockErrorResponse))
    service.create(mockData).subscribe(
      (res)=>{},
      (err)=>{
        expect(err).toEqual(mockErrorResponse)
      }
    )
  })

});
