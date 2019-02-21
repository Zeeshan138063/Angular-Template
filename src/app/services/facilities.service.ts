import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { ApplicationConfiguration } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { FacilitiesModel } from '../shared/Model/Facilities.Model';
import { Http } from '@angular/http/src/http';
import { retry } from 'rxjs/operator/retry';
@Injectable()
export class FacilitiesService {

  private _url = ApplicationConfiguration.ApiServiceLink + 'Facilities';


  constructor(private http : HttpClient) { }


  
  getAllfacilites()
  {
             
      return this.http.get(this._url);
   
    
  }

  getAllfacilitesById(id: number)
    {
        return this.http.get(this._url + "/" + id)
  }

  Insertfacilites(facilitiesModel: FacilitiesModel)
  {
      return  this.http.post(this._url, facilitiesModel);
  }

  Deletefacilites(id: number)
  {
      return this.http.delete(this._url + "/" + id);
  }
   

   



showError(err: any) {
    alert('There was an error: ' + err);
}
  

}
