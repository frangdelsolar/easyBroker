import { ComponentFixture, TestBed} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
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

    it("Enviar button should be disabled if form is invalid", () => {
      expect(fixture.nativeElement.querySelector("#btn-submit").disabled).toBeTrue();
    })

    it("Enviar button should be available if form is valid", () => {
      component.form.get('name')?.setValue('name');
      component.form.get('email')?.setValue('email@email.com');
      component.form.get('phone')?.setValue('123123123');      
      component.form.get('message')?.setValue('TestMessage');
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector("#btn-submit").disabled).toBeFalse();
    })
  
    it("Should call onContactFormSubmit when Enviar button is clicked",async ()=>{
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

