import {Component} from '@angular/core';
import {MdDialog,MdDialogRef} from '@angular/material';
import { Email } from './gt-email.component';


@Component({
  selector: 'email-dialog',
  templateUrl: 'gt-email-dialog.component.html',
})
export class EmailDialog {
  constructor(public dialog: MdDialog,public dialogRef: MdDialogRef<Email>) {}

  openDialog() {
    this.dialog.open(Email);
  }
}


