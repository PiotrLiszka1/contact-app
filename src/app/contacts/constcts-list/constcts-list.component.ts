import { Component, OnInit } from '@angular/core';
import { CONTACTS } from 'src/app/data/contacts-data';
import { ContactModel } from 'src/app/models/contact-model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-constcts-list',
  templateUrl: './constcts-list.component.html',
  styleUrls: ['./constcts-list.component.scss'],
})
export class ConstctsListComponent implements OnInit {
  // TYPOWANIE
  contacts: ContactModel[] = [];

  constructor(private contactService: ContactsService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  // METODY
  hideContacts() {
    this.contacts = [];
  }
  showContacts() {
    this.loadContacts();
  }

  loadContacts(): void {
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }
}
