import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { ApplicationConfiguration } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { ApplicationUserRoleDetailModel } from '../shared/Model/ApplicationUserRoleDetail.Model';
import { Http } from '@angular/http/src/http';
import { retry } from 'rxjs/operator/retry';
@Injectable()
export class ApplicationUserRoleDetailService {

  private _url = ApplicationConfiguration.ApiServiceLink + 'ApplicationUserRoleDetail';


  constructor(private http : HttpClient) { }


  
  getAllApplicationUserRoleDetail()
  {
             
      return this.http.get(this._url);
   
    
  }

  getAllApplicationUserRoleDetailById(id: number)
    {
        return this.http.get(this._url + "/" + id)
  }

  InsertApplicationUserRoleDetail(applicationUserRoleDetailModel: ApplicationUserRoleDetailModel)
  {
      return this.http.post(this._url, applicationUserRoleDetailModel);
  }

  DeleteApplicationUserRoleDetail(id: number)
  {
      return this.http.delete(this._url + "/" + id);
  }
   

   



showError(err: any) {
    alert('There was an error: ' + err);
}
  

}
