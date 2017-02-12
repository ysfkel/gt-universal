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
       <div class="image-with-header">
         <div class="image-container">
            <image-detail [url]="auto.url"></image-detail>
         </div>
         <div class="header-info">
            <ad-details-title [data]="auto.title" class="title"></ad-details-title>
            <price [data]="auto.price"></price>
            <ad-header-short-info [data]="shortInfo" class="ad-header-short-info"></ad-header-short-info>
            <div class="button-group">
                <a href="#">Email</a>
                <a href="#">Call</a>
            </div> 
         </div>
         
        </div>
        <div class="description ">
            <h4>Additional Details</h4>
            <div class="list">
            <dl>
                <dt>Make</dt>
                    <dd><strong>Toyota</strong></dd>
                <dt>Model</dt>
                    <dd><strong>Yaris</strong></dd>
                <dt>Year</dt>
                    <dd><strong>2014</strong></dd>
                <dt>Color</dt>
                    <dd><strong>black</strong></dd>
            </dl>
            <dl>
                <dt>Make</dt>
                    <dd><strong>Toyota</strong></dd>
                <dt>Model</dt>
                    <dd><strong>Yaris</strong></dd>
                <dt>Year</dt>
                    <dd><strong>2014</strong></dd>
                <dt>Color</dt>
                    <dd><strong>black</strong></dd>
            </dl>
            </div>
        </div>
        <div class="description">
            <h4>Description</h4>
            <p>i am the first owner of the car. It is in total original condition sports model. Tinting and Rust Proofing done from Al- Futtaim. No scratches on the car not even on the bumper. No need to spend a single penny just buy and drive,</p>
            
        </div>
        <div class="features">
            <h4>Features</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div class="others">
            <div class="tools">
                <div class="emi-calc">
                    <h4>EMI Calculator</h4>
                    <div class="calc">
                        <p>Own this car for just 0% downpayment</p>
                    </div>
                </div>
                <div class="share">
                    <h4>Share this</h4>
                    <div class="share-block">
                        <p>Share this ad</p>
                    </div>
                </div>
            </div>
        </div> 
    </div>
         
    `,
    encapsulation:ViewEncapsulation.Native
})


export  class AutoDetails implements OnInit{


    auto:Array<any>;
     dialogRef: MdDialogRef<Email>;
     shortInfo:any;

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
              this.setShortInfo(this.auto);
              console.log('item',this.auto);

          })


      }

      setShortInfo(auto){
          this.shortInfo={
              mileage:auto.mileage,
              model:auto.model,
              carType:auto.carType
          }
      }


} 

