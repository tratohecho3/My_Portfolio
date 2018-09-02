import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FireDbService {

  constructor(private afDb: AngularFireDatabase) { }

  saveContact(contact) {
    this.afDb.database.ref('contacts/'+ contact.id).set(contact)
  }
}
