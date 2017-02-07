import { Component ,OnInit,ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import {MdDialog, MdDialogRef} from '@angular/material';
import { Email } from '../../shared/components/email/gt-email.component';
//import { DialogService } from '../../shared/services/utillities/dialog.service';


@Component({
    selector:'auto-list',
    styleUrls:['details.component.css'],
    template:`
    
    <div class="details-container">
       <div>
         <div class="image-container">
            <image-detail [url]="auto.url"></image-detail>
         </div>
         <div class="header-info">
            <ad-details-title></ad-details-title>
            <ad-header-short-info></ad-header-short-info>
         </div> 
        </div>
    </div>
       
         
    `
})


export  class AutoDetails implements OnInit{


    auto:Array<any>;
     dialogRef: MdDialogRef<Email>;

    constructor(private route:ActivatedRoute,public dialog: MdDialog){
    }

 


     openDialog() {
    let dialogRef = this.dialog.open(Email,{
  position:'absolute'
});
  
    dialogRef.afterClosed().subscribe(result => {
      
    });
  } 
      ngOnInit(){
          console.log('details',this.route)
          this.route
          .data
          .subscribe((item:any)=>{
              this.auto=item.autoItem;
              console.log('item',this.auto);

          })


      }


} 

