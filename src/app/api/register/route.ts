import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");
import Connect from "@/config/dbConfig";
import user from "@/models/user";
import bcrypt from 'bcrypt'

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "letmefineshmyfood@gmail.com",
    pass: "rwmb tsin trdk njpz",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const otpCache: { [key: string]: number } = {};

export async function POST(req: NextRequest) {
  try {
    
    await Connect();
    const { action, details, enteredOtp } = await req.json();
    if(action === 'register'){
        const otp = generateOTP();
        otpCache[details.email] = otp;
    
        // setTimeout(() => {
        //     delete otpCache[otp]
        // }, 2 * 60 * 1000);
    
        const mailOption = {
          from: "letmefineshmyfood@gmail.com",
          to: 'eusebioemmanuvel8@gmail.com',
          subject: "one time password for login",
          text: `your otp is ${otp}`,
        };
        await transporter.sendMail(mailOption);
        return NextResponse.json({ message: "OTP sent successfully" });
    
    } else if(action === 'verify'){
        
       console.log(otpCache[details.email] ,"this is it")
       console.log(enteredOtp,'tgsusjfks')
        if(enteredOtp == otpCache[details.email]){

             const hashedPassword = await bcrypt.hash(details.password,10)
           const member = await user.create({
                email : details.email,
                username : details.username,
                password: hashedPassword,
            })
        }
        return NextResponse.json({Name:'success'})
    }
    
  } catch (error) {
    console.log("backend error", error);
  }
}
