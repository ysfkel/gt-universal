import { NgModule } from '@angular/core';


import { Email } from './gt-email.component'
import { EmailDialog } from './gt-email-dialog.component'
import { MaterialModule,MdDialogModule} from '@angular/material';

@NgModule({
  imports: [
   MaterialModule.forRoot(),
   MdDialogModule.forRoot()

  ],
  declarations: [
 Email
 ,EmailDialog
  ],
  exports:[
  Email
  ,EmailDialog
  ,MaterialModule
  ],
  entryComponents:[
      Email
  ]
})
export class GTEmailModule { }
