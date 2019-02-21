import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { ApplicationConfiguration } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { VehicleDriverModel } from '../shared/Model/VehicleDriver.Model';
import { Http } from '@angular/http/src/http';
import { retry } from 'rxjs/operator/retry';
@Injectable()
export class VehicleDriverService {

  private _url = ApplicationConfiguration.ApiServiceLink + 'VehicleDriver';


  constructor(private http : HttpClient) { }


  
  getAllVehicleDriver()
  {
             
      return this.http.get(this._url);
   
    
  }

  getAllVehicleDriverById(id: number)
    {
        return this.http.get(this._url + "/" + id)
  }

  InsertVehicleDriver(vehicleDriverModel: VehicleDriverModel)
  {
      return this.http.post(this._url, vehicleDriverModel);
  }

  DeleteVehicleDriver(id: number)
  {
      return this.http.delete(this._url + "/" + id);
  }
   

   



showError(err: any) {
    alert('There was an error: ' + err);
}
  

}
