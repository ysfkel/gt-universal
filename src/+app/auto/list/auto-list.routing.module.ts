import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AutoList } from './auto-list.component';
import { AutoDetails } from '../details/details.component';
import { AutoListResolver } from '../../services/resolvers/auto.resolver';
import { AutoItemResolver } from '../../services/resolvers/auto-item.resolver';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'auto', component: AutoList,
        resolve:{
        autoList:AutoListResolver
       }  
      },{
          path:'auto/:id',component:AutoDetails,
          resolve:{
            autoItem:AutoItemResolver
          }
      }
    ])
  ]
})
export class AutoRoutingModule { }
