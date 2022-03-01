import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactModel } from 'src/app/models/contact-model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  contactDetails: any = {};

  constructor(
    private contactService: ContactsService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadOneContact();
  }

  loadOneContact(): void {
    const id = this.routes.snapshot.params['id'];
    this.contactService.getOneContact(id).subscribe((contact) => {
      this.contactDetails = contact;
    });
  }
}
