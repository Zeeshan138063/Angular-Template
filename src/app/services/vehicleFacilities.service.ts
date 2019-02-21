import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { ApplicationConfiguration } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { VehicleFacilitiesModel } from '../shared/Model/VehicleFacilities.Model';
import { Http } from '@angular/http/src/http';
import { retry } from 'rxjs/operator/retry';
@Injectable()
export class VehicleFacilitiesService {

  private _url = ApplicationConfiguration.ApiServiceLink + 'VehicleFacilities';


  constructor(private http : HttpClient) { }


  
  getAllVehicleFacilities()
  {
             
      return this.http.get(this._url);
   
    
  }

  getAllVehicleFacilitiesById(id: number)
    {
        return this.http.get(this._url + "/" + id)
  }

  InsertVehicleFacilities(vehicleFacilitiesModel: VehicleFacilitiesModel)
  {
      return  this.http.post(this._url, vehicleFacilitiesModel);
  }

  DeleteVehicleFacilities(id: number)
  {
      return this.http.delete(this._url + "/" + id);
  }
   

   



showError(err: any) {
    alert('There was an error: ' + err);
}
  

}
