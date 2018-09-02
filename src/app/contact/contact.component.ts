import { Component, OnInit } from '@angular/core';
import { FireDbService } from '../services/fire-db.service';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:any = {};
  constructor(private fireDb: FireDbService) { }

  ngOnInit() {
  }

  saveContact() {
    console.log('entr')
    this.fireDb.saveContact(this.contact)
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log("Form Submitted!");
      this.contact.id = Date.now()
      this.saveContact()
      form.resetForm();
    }
    else {
      console.log('error')
    }
}
}
