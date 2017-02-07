import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//import { DialogService } from './dialog.service';

@NgModule({
     imports:[
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
     
     ],
     exports:[

     ],
     declarations:[
        
     ],
     providers:[
       //  DialogService
     ]

})

export class UtillityModule{
    
}