import { Component ,OnInit} from '@angular/core';



@Component({
    selector:'ad-header-short-info',
    inputs:['data'],
    styleUrls:['ad-header-short-info.component.css'],
    templateUrl:'ad-header-short-info.component.html'
})


export  class AdHeaderShortInfo implements OnInit{

     data:any;

    constructor(){
    }

 
      ngOnInit(){

          console.log('data',this.data)
       
      }


} 

