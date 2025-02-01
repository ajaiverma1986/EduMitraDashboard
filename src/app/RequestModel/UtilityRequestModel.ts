export class OTPRequest{
    mobileno!:string
}
export class OTPResponse{
    status!:string
    response_message!:string
    OTPID!:string
}
export class OTPValidateRequest{
    mobileno!:string
    otp!:string
}