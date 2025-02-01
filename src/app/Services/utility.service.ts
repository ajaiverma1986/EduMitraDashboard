import { Injectable } from '@angular/core';
import { BaseserviceService } from './baseservice.service';
import { OTPRequest, OTPResponse, OTPValidateRequest } from '../RequestModel/UtilityRequestModel';
import { Observable } from 'rxjs';
import { SimpleResponse } from '../ResponseModel/BaseResponse';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private apiconnector:BaseserviceService) { }

  SendOTP(postdata:OTPRequest):Observable<OTPResponse>{
    return this.apiconnector.PostAPI("/Utility/SendOTP",postdata);
  }
  ValidateOTP(postdata:OTPValidateRequest):Observable<SimpleResponse>{
    return this.apiconnector.PostAPI("/Utility/ValidateOTP",postdata);
  }
}
