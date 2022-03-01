import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstctsListComponent } from './constcts-list/constcts-list.component';
import { SharedModule } from '../shared/shared.module';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConstctsListComponent,
    ContactDetailsComponent,
    ContactAddComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactsRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [ConstctsListComponent],
})
export class ContactsModule {}
