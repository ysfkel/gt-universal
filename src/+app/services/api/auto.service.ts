import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AutoService {

    uri:any='http://localhost:5000/autos';

    constructor(private http:Http){

    }

  getAll() {
  return this.http.get(this.uri)
      .map(res => res.json())
      .catch(err => {
   
        return Observable.throw(err);
      });
  }

  getById(id:any){
      let url=`${this.uri}/${id}`;

      return this.http.get(url)
      .map(res=>res.json())
      ._catch(err=>{
           console.log('Error: ', err);
        return Observable.throw(err);
      })
  }
}


  