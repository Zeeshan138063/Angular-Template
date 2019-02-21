import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { ApplicationConfiguration } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { ApplicationMenuModel } from '../shared/Model/ApplicationMenu.Model';
import { Http } from '@angular/http/src/http';
import { retry } from 'rxjs/operator/retry';
@Injectable()
export class ApplicationMenuService {

  private _url = ApplicationConfiguration.ApiServiceLink + 'ApplicationMenu';


  constructor(private http : HttpClient) { }


  
  getAllApplicationMenu()
  {
             
      return this.http.get(this._url);
   
    
  }

  getAllApplicationMenuById(id: number)
    {
        return this.http.get(this._url + "/" + id)
  }

  InsertApplicationMenu(applicationMenuModel: ApplicationMenuModel)
  {
      return this.http.post(this._url, applicationMenuModel);
  }

  DeleteApplicationMenu(id: number)
  {
      return this.http.delete(this._url + "/" + id);
  }
   

   



showError(err: any) {
    alert('There was an error: ' + err);
}
  

}
