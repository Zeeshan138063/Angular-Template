import { Injectable } from '@angular/core';
import { Http, Response, Headers,RequestOptions,RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { FacilitiesModel } from '../model/Facilities.Model';
import { ApplicationConfiguration } from 'app/app.config';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Injectable()
export class FacilitesService {

    
 private _url = ApplicationConfiguration.ApiServiceLink + 'Facilities';
    constructor(private http: Http) { }


    getAllfacilites() {
        alert("service function call");

        return this.http.get(this._url, { headers: this.getHeaders() })
            .map((res: Response) => res.json() as FacilitiesModel[]);

    }



 getApplicationUserById(id:Number) {
        return this.http.get(this._url+ "/"+ id, { headers: this.getHeaders() })
            .map((res: Response) => res.json() as FacilitiesModel);


        }



        
        InsertApplicationUser( applicationuser: FacilitiesModel) {
            
   
    
    
        //  let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8'}); 
            var headers = new Headers();
    
            
    
             headers.append('Content-Type', 'application/json; charset=utf-8'); 
            return this.http.post(this._url, JSON.stringify(applicationuser)
        
            
            , { headers : headers }
        );
        
        }

    DeleteApplicationUser(id:number) {   
        var headers = new Headers();  
        headers.append('Content-Type', 'application/json; charset=utf-8'); 
        return this.http.delete(this._url + "/"+ id,{ headers: this.getHeaders() });
           

    }

    


  
  
 
   
    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }


    showError(err: any) {
        alert('There was an error: ' + err);
    }
}

 