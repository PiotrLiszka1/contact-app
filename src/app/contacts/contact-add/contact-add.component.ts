import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss'],
})
export class ContactAddComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({});

  namePattern: string | RegExp = '^[A-z]{3,15}$';

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.builderContactForm();
  }

  private builderContactForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(this.namePattern),
      ]),

      surname: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });
  }

  addContact(): void {
    this.contactService.addContact(this.contactForm.value).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
  }
}
