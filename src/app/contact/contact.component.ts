import { Component, OnInit } from '@angular/core';
import { FireDbService } from '../services/fire-db.service';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:any = {};
  constructor(private fireDb: FireDbService,public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  saveContact() {
    console.log('entr')
    this.fireDb.saveContact(this.contact)
  }
  openSnackBar(message) {
    this.snackBar.open(message, 'X', {duration:2500});
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log("Form Submitted!");
      this.contact.id = Date.now()
      this.saveContact()
      form.resetForm();
      this.openSnackBar('Your Message has been submitted')
    }
    else {
      console.log('error')
      this.openSnackBar('Your Form has an error')
    }
}
}
