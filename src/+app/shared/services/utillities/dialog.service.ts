import { Injectable } from '@angular/core';
import swal from 'sweetalert2'


@Injectable()
export class DialogService{

name:any;
 _alert:any;

    constructor(){

        this._alert=swal;
    }



    alert(config,callback){

          this._alert({
          title: config.title||'',
          text: config.text||'',
          type: config.type|| "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText:config.confirmText||"Confirm",
          cancelButtonText: config.cancelText||'Cancel',
          closeOnConfirm: config.closeOnConfirm|| true,
          closeOnCancel:config.closeOnCancel|| true
        }, callback);       
    }

         simplePrompt(message){

          try{
              this._alert(message||'[provide your text]')
          }catch(e){
              console.log(e);
              throw e
          }

      }

}

