import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UtilityService } from '../../../Services/utility.service';
import { OTPRequest, OTPResponse, OTPValidateRequest } from '../../../RequestModel/UtilityRequestModel';
import { BaseComponent } from '../base/base.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FlexLayoutModule, MatSelectModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent extends BaseComponent implements OnInit {
  Roles: any = ['Admin', 'Author', 'Reader'];
  isOtpv: number = 0;
  isSendOtp: number = 0;
  isDisabled: boolean = false;
  otpmodel: OTPResponse = new OTPResponse();
  req: OTPRequest = new OTPRequest();
  MobileNo!: string;
  Otpdata!: string;
  valotpmdl:OTPValidateRequest=new OTPValidateRequest();
  constructor(private utilser: UtilityService, private fb: FormBuilder, toast: ToastrService) {
    super(toast);
  }
  ngOnInit() {
    this.MobileNo="";
    this.Otpdata="";
  }
  SendOtp() {

    this.req.mobileno = this.MobileNo;
    this.utilser.SendOTP(this.req).subscribe({
      next: (res) => {
        this.otpmodel = res;
        if (Number(this.otpmodel.OTPID) > 0) {
          this.isSendOtp = 1;
          this.isDisabled = true;
          this.showToaster(1, "Otp Send Successfully", "Register");
        }
        else {
          this.isSendOtp = 0;
          this.isDisabled = false;
          this.showToaster(3, "Please Try again", "Register");
        }
      }
    })

  }
  VerifyOTP(){
    this.valotpmdl.mobileno=this.MobileNo;
    this.valotpmdl.otp=this.Otpdata;
    this.utilser.ValidateOTP(this.valotpmdl).subscribe({
      next:(resp)=>{
       if(Number(resp.result)>0){
        this.showToaster(1, "Otp Validated", "Successfully");
       }
       else
       {
        this.showToaster(3, "Otp not  Validated", "Successfully");
       }
      }
    })
  }
}
