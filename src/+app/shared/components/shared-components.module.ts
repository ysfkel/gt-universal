import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';


import { GTEmailModule } from './email/gt-email.module'
import { GTImageModule } from './image/gt-image.component.module';
import { PriceComponent } from './price/price.component';


@NgModule({
  imports: [
  GTEmailModule,
  GTImageModule,
  CommonModule
  ],
  declarations: [
   PriceComponent
  ],
  exports:[
    GTEmailModule,
    GTImageModule,
    PriceComponent
  ]
})
export class ShardComponentsModule { }
