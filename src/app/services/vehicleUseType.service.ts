import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { ApplicationConfiguration } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { VehicleUseTypeModel } from '../shared/Model/VehicleUseType.Model';
import { Http } from '@angular/http/src/http';
import { retry } from 'rxjs/operator/retry';
@Injectable()
export class VehicleUseTypeService {

  private _url = ApplicationConfiguration.ApiServiceLink + 'VehicleUseType';


  constructor(private http : HttpClient) { }


  
  getAllVehicleUseType()
  {
             
      return this.http.get(this._url);
   
    
  }

  getAllVehicleUseTypeById(id: number)
    {
        return this.http.get(this._url + "/" + id)
  }

  InsertVehicleUseType(vehicleUseTypeModel: VehicleUseTypeModel)
  {
      return this.http.post(this._url, vehicleUseTypeModel);
  }

  DeleteVehicleUseType(id: number)
  {
      return this.http.delete(this._url + "/" + id);
  }
   

   



showError(err: any) {
    alert('There was an error: ' + err);
}
  

}
