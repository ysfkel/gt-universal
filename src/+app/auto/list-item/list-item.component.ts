import { Component ,OnInit } from '@angular/core';



@Component({
    selector:'auto-list-item',
    inputs:['item'],
    styleUrls:['list-item.component.css'],
    templateUrl:'list-item.component.html'
})
export class ListItem implements OnInit{

    item:any;

    ngOnInit(){
        console.log(this.item)
    }
    
}