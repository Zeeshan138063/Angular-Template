import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { ApplicationConfiguration } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { VehicleDetailsModel } from '../shared/Model/VehicleDetails.Model';
import { Http } from '@angular/http/src/http';
import { retry } from 'rxjs/operator/retry';
@Injectable()
export class VehicleDetailsService {

  private _url = ApplicationConfiguration.ApiServiceLink + 'VehicleDetails';


  constructor(private http : HttpClient) { }


  
  getAllVehicleDetails()
  {
             
      return this.http.get(this._url);
   
    
  }

  getAllVehicleDetailsById(id: number)
    {
        return this.http.get(this._url + "/" + id)
  }

  InsertVehicleDetails(vehicleDetailsModel: VehicleDetailsModel)
  {
      return this.http.post(this._url, vehicleDetailsModel);
  }

  DeleteVehicleDetails(id: number)
  {
      return this.http.delete(this._url + "/" + id);
  }
   

   



showError(err: any) {
    alert('There was an error: ' + err);
}
  

}
