import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @Input() params!: any;
  form!: FormGroup;
  nameControl = new FormControl('', [Validators.required]);
  phoneControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  msgControl = new FormControl('', [Validators.required]);

  constructor(
    private fb: FormBuilder,
    private contactSvc: ContactService
  ) {

   }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.nameControl,
      phone: this.phoneControl,
      email: this.emailControl,
      message: this.msgControl,
      property_id: this.params.id,
      source: '@franciscoGdelSolarEasyBrokerApp'
    })
  }

  onContactFormSubmit(){
    this.contactSvc.create(this.form.value).subscribe(
      (res:any)=>{
        alert("Mensaje enviado correctamente")
        this.form.reset();
      },
      (err)=>{
        alert(err.error.error)
      }
    )
  }

}
