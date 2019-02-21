import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { ApplicationConfiguration } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { AgentDocumentModel } from '../shared/Model/AgentDocument.Model';
import { Http } from '@angular/http/src/http';
import { retry } from 'rxjs/operator/retry';
@Injectable()
export class AgentDocumentService {

  private _url = ApplicationConfiguration.ApiServiceLink + 'AgentDocument';


  constructor(private http : HttpClient) { }


  
  getAllAgentDocument()
  {
             
      return this.http.get(this._url);
   
    
  }

  getAllAgentDocumentById(id: number)
    {
        return this.http.get(this._url + "/" + id)
  }

  InsertAgentDocument(agentDocumentModel: AgentDocumentModel)
  {
      return this.http.post(this._url, agentDocumentModel);
  }

  DeleteAgentDocument(id: number)
  {
      return this.http.delete(this._url + "/" + id);
  }
   

   



showError(err: any) {
    alert('There was an error: ' + err);
}
  

}
