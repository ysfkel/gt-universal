import { Component } from '@angular/core';


@Component({
    selector:'price',
    inputs:['data'],
    template:`
        <div>
            <span>{{data|currency:'AED':false}}</span>
        </div>
    `

})

export class PriceComponent{

}