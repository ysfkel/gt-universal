import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';


@Component({
    selector:'auto-list',
    styleUrls:['auto-list.component.css'],
    template:`
          <div class="list-container">
             <auto-list-item [item]="i" *ngFor="let i of items"></auto-list-item> 
          </div>
            
    `
})


export  class AutoList implements OnInit{


    items:Array<any>;

    constructor(private route:ActivatedRoute,public _http: Http){
    }
      
      ngOnInit(){
          this.items=this.route.snapshot.data['autoList'];

      }


} 



