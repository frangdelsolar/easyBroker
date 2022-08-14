import { ComponentFixture, fakeAsync, TestBed, async, tick } from '@angular/core/testing';
import { of} from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Location } from "@angular/common";
import { Router, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form.component';



describe('Test ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  describe('Check of Contact Form component', () => {
    
    beforeEach(async () => {
      TestBed.configureTestingModule({
        imports: [
          FormsModule,
          ReactiveFormsModule,
          HttpClientTestingModule,
          CommonModule
        ],
        declarations: [ContactFormComponent],
        providers: [],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(ContactFormComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create component', () => {
      expect(component).toBeTruthy();
    });

    it('form should load four fields', () => {
      expect( component.form.contains('name')).toBeTruthy();
      expect( component.form.contains('phone')).toBeTruthy();
      expect( component.form.contains('email')).toBeTruthy();
      expect( component.form.contains('message')).toBeTruthy();
    });
  
    it("Name field should be required",()=>{
      const control = component.form.get('name');
      control?.setValue('');
      expect( control?.valid ).toBeFalsy();
    });

    it("Phone field should be required",()=>{
      const control = component.form.get('phone');
      control?.setValue('');
      expect( control?.valid ).toBeFalsy();
    });
  
    it("Email field should be required",()=>{
      const control = component.form.get('email');
      control?.setValue('');
      expect( control?.valid ).toBeFalsy();
    });

    it("Message field should be required",()=>{
      const control = component.form.get('message');
      control?.setValue('');
      expect( control?.valid ).toBeFalsy();
    });


  });

  describe('Check of Contacto Form action', () => {
  
    beforeEach(async () => {
      TestBed.configureTestingModule({
        imports: [
          FormsModule,
          ReactiveFormsModule,
          HttpClientTestingModule,
          CommonModule
        ],
        declarations: [ContactFormComponent],
        providers: [],
      }).compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(ContactFormComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
   
    it("Should call onContactFormSubmit when the form is valid",async ()=>{
      const spy = spyOn(component, 'onContactFormSubmit');
      component.form.get('name')?.setValue('name');
      component.form.get('email')?.setValue('email@email.com');
      component.form.get('phone')?.setValue('123123123');      
      component.form.get('message')?.setValue('TestMessage');
      fixture.detectChanges();
      fixture.nativeElement.querySelector("#btn-submit").click();
      expect(spy).toHaveBeenCalled();
    });
  
  });


});

