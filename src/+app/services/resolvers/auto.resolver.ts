import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AutoService } from '../api/auto.service';


@Injectable()
export class AutoListResolver implements Resolve<any> {

  constructor(private autoService: AutoService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.autoService.getAll();
  }
}

