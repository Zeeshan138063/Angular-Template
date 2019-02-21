import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { ApplicationConfiguration } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { AgentDetailsModel } from '../shared/Model/AgentDetails.Model';
import { Http } from '@angular/http/src/http';
import { retry } from 'rxjs/operator/retry';
@Injectable()
export class AgentDetailsService {

  private _url = ApplicationConfiguration.ApiServiceLink + 'AgentDetails';


  constructor(private http : HttpClient) { }


  
  getAllAgentDetailsModel()
  {
             
      return this.http.get(this._url);
   
    
  }

  getAllAgentDetailsById(id: number)
    {
        return this.http.get(this._url + "/" + id)
  }

  InsertAgentDetails(agentDetailsModel: AgentDetailsModel)
  {
      return this.http.post(this._url, agentDetailsModel);
  }

  DeleteAgentDetails(id: number)
  {
      return this.http.delete(this._url + "/" + id);
  }
   

   



showError(err: any) {
    alert('There was an error: ' + err);
}
  

}
