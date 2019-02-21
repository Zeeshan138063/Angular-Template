import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { ApplicationConfiguration } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { VehicleTypeModel } from '../shared/Model/VehicleType.Model';
import { Http } from '@angular/http/src/http';
import { retry } from 'rxjs/operator/retry';
@Injectable()
export class VehicleTypeService {

  private _url = ApplicationConfiguration.ApiServiceLink + 'VehicleType';


  constructor(private http : HttpClient) { }


  
  getAllVehicleType()
  {
             
      return this.http.get(this._url);
   
    
  }

  getAllVehicleTypeById(id: number)
    {
        return this.http.get(this._url + "/" + id)
  }

  InsertVehicleType(vehicleTypeModel: VehicleTypeModel)
  {
      return this.http.post(this._url, vehicleTypeModel);
  }

  DeleteVehicleType(id: number)
  {
      return this.http.delete(this._url + "/" + id);
  }
   

   



showError(err: any) {
    alert('There was an error: ' + err);
}
  

}
