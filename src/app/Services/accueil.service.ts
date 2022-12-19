import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccueilService {
env=environment;
  constructor(private http: HttpClient) { }
   //Afficher toute les region
   getRegion():Observable<any>{
    return this.http.get(`${this.env.api}/nomregion/read`);//this.API_URL+this.ENDPOINT_Liste
    //(`${this.env.api}​/utilisateur​/tirageById​/${id}`,data);

  }

}
