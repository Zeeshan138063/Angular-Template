import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { ApplicationConfiguration } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { UserTypeModel } from '../shared/Model/UserType.Model';
import { Http } from '@angular/http/src/http';
import { retry } from 'rxjs/operator/retry';
@Injectable()
export class UserTypeService {

  private _url = ApplicationConfiguration.ApiServiceLink + 'UserType';


  constructor(private http : HttpClient) { }


  
  getAllUserType()
  {
             
      return this.http.get(this._url);
   
    
  }

  getAllUserTypeById(id: number)
    {
        return this.http.get(this._url + "/" + id)
  }

  InsertUserType(userTypeModel: UserTypeModel)
  {
      return this.http.post(this._url, userTypeModel);
  }

  DeleteUserType(id: number)
  {
      return this.http.delete(this._url + "/" + id);
  }
   

   



showError(err: any) {
    alert('There was an error: ' + err);
}
  

}
