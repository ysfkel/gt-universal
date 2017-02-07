import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeModule } from './+home/home.module';
import { AboutModule } from './+about/about.module';
import { TodoModule } from './+todo/todo.module';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, XLargeDirective } from './app.component';
import {  AutoModule } from './auto/list/auto-list.module';
import { AutoService } from './services/api/auto.service';
import { AutoListResolver } from './services/resolvers/auto.resolver';
import { AutoItemResolver } from './services/resolvers/auto-item.resolver';
import { MaterialModule,MdDialogModule} from '@angular/material';

@NgModule({
  declarations: [ AppComponent, XLargeDirective ],
  imports: [
    SharedModule,
    HomeModule,
    AboutModule,
    TodoModule,
    AppRoutingModule,
    AutoModule,
    MaterialModule.forRoot()
    
  ],
  providers:[
    AutoService,
    AutoListResolver
    ,AutoItemResolver
  ]

})
export class AppModule {
}

export { AppComponent } from './app.component';
