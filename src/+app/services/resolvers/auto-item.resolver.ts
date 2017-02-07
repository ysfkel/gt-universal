import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AutoService } from '../api/auto.service';


@Injectable()
export class AutoItemResolver implements Resolve<any> {

  constructor(private autoService: AutoService) {}

  resolve(route: ActivatedRouteSnapshot) {
    
      let id=route.params['id'];
    return this.autoService.getById(id);
  }
}

