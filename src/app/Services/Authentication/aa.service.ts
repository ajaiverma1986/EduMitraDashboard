import { Injectable } from '@angular/core';
import { BaseserviceService } from '../baseservice.service';
import { UserLoginRequest } from '../../RequestModel/AAModel';
import { Observable } from 'rxjs';
import { UserLoginResponse } from '../../ResponseModel/AAResponse';

@Injectable({
  providedIn: 'root'
})
export class AAService {

  constructor(private apiconnector:BaseserviceService) { 

  }
  login(Postdata:UserLoginRequest): Observable<UserLoginResponse> {
    return this.apiconnector.PostAPI("/AA/login",Postdata);
  }
  
}
