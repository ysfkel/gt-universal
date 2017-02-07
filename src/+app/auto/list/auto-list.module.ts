import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { AutoList } from './auto-list.component';
import { AutoRoutingModule } from './auto-list.routing.module';
import { MaterialModule,MdDialogModule} from '@angular/material';
import { ListItem } from '../list-item/list-item.component';
import { AutoDetails } from '../details/details.component';
import { GTImageModule } from '../../shared/components/image/gt-image.component.module';
import { GTEmailModule } from '../../shared/components/email/gt-email.module';
import { UtillityModule } from '../../shared/services/utillities/utillities.module';
import { AutoFeatures } from '../details/feature/features.component';
import { AdDetailsTitle } from '../details/header/ad-title/ad-details-title.component';
import { AdHeaderShortInfo } from '../details/header/short-info/ad-header-short-info.component';

@NgModule({
  imports: [
    SharedModule,
    AutoRoutingModule
   ,MaterialModule.forRoot(),
   MdDialogModule.forRoot()
   ,GTImageModule
   ,GTEmailModule
   ,UtillityModule
  ],
  declarations: [
    AutoList,
    ListItem,
    AutoDetails
    ,AutoFeatures
    ,AdDetailsTitle
    ,AdHeaderShortInfo
  ],
  exports:[
    ListItem,
    AutoDetails
      ,AutoFeatures
    ,AdDetailsTitle
    ,AdHeaderShortInfo
  ]
})
export class AutoModule { }
