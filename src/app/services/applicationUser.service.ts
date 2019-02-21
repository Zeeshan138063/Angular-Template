import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { ApplicationConfiguration } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { ApplicationUserModel } from '../shared/Model/ApplicationUser.Model';
import { Http } from '@angular/http/src/http';
import { retry } from 'rxjs/operator/retry';
@Injectable()
export class ApplicationUserService {

  private _url = ApplicationConfiguration.ApiServiceLink + 'ApplicationUser';


  constructor(private http : HttpClient) { }


  
  getAllApplicationUser()
  {
             
      return this.http.get(this._url);
   
    
  }

  getAllApplicationUserById(id: number)
    {
        return this.http.get(this._url + "/" + id)
  }

  InsertApplicationUser(applicationUserModel: ApplicationUserModel)
  {
      return this.http.post(this._url, applicationUserModel);
  }

  DeleteApplicationUser(id: number)
  {
      return this.http.delete(this._url + "/" + id);
  }
   

   



showError(err: any) {
    alert('There was an error: ' + err);
}
  

}
