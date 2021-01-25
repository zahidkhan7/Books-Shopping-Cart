import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { from, ObjectUnsubscribedError } from 'rxjs';
import { GenericValidator } from 'src/app/shared/generic-validator';

import { BillingOrder } from '../billingOrder';
import { BookItems } from '../book';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  billingForm: FormGroup;
  private book: BookItems;
  private billingOrder: BillingOrder;


  private validationMessages: { [key: string]: { [key: string]: string } };
  displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;

  constructor(
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private searchService : SearchService
  ) {
    this.validationMessages = {
      name: {
        required: 'Name is Required',
      },
      email: {
        required: 'Email Required',
        email: 'Please enter right email format (ex: test@xyz.com)',
      },
      phoneNumber: {
        required: 'phoneNumber Required',
        minlength: 'The phoneNumber should be 10',
      },
      address: {
        required: 'address Required',
      },
    };
    
   }

  ngOnInit(): void {

    this.billingForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),

      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern(/[0-9\+\-\ ]/),
      ]),
      address: new FormControl('', Validators.required),
    });
  }

  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(
      this.billingForm
    );
  }
  
onSubmit(form: FormGroup) {
  if (form.valid) {
    const orderDetails = {
      name: form.value.name,
      email: form.value.email,
      phoneNumber: form.value.phoneNumber,
      address: form.value.address,
    };
    this.dialog.open(DialogElementsExampleDialog);
    this.searchService.deleteFromCart(this.book.id);
    this.searchService.addToMyCollection(orderDetails, this.book);
  } else {
    Object.keys(form.controls).forEach((key: string) => {
      const c = form.get(key);
      if (!c.valid) {
        const message = this.validationMessages[key];
        for (const errorKey in c.errors) {
          this.displayMessage[key] = message[errorKey];
        }
      }
    });
  }
}
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}