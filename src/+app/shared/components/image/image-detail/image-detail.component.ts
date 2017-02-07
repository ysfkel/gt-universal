import { Component } from '@angular/core';


@Component({
    selector:'image-detail',
    inputs:['url'],
    styleUrls:['image-detail.component.css'],
    template:`
        <div>
           <img [src]="url" alt="">
        </div>
    `

})

export class ImageDetail{

}