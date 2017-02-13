import { Component ,OnInit,ViewEncapsulation } from '@angular/core';



@Component({
    selector:'auto-list-item',
    inputs:['item'],
    styleUrls:['list-item.component.css'],
    templateUrl:'list-item.component.html',    
    
    encapsulation:ViewEncapsulation.Native
})
export class ListItem implements OnInit{

    item:any;
    imgSrc:string;

    ngOnInit(){
      this.imgSrc=`assets/${this.item.url}`;
    }
    
}