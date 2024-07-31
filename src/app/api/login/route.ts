import { NextRequest, NextResponse } from "next/server";
import user from '@/models/user';
import Connect from "@/config/dbConfig";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const secretKey = '123456';

export async function POST(req: NextRequest){
    try {
        await Connect();
        const data = await req.json();
        const {username, password, email} = data
        const account = await user.findOne({email})
        if(!account){
            return NextResponse.json({status:404, message:'user not found'}, {status:404})
        }

        const match = await bcrypt.compare(password, account.password);
        if(match){
           
            const token = jwt.sign({id:account._id}, secretKey, {expiresIn : '1h'});
            const response =  NextResponse.json({message: 'user verified sucessfully'})
            response.cookies.set('token', token ,{
                httpOnly: true,
                secure:process.env.NODE_ENV === 'production',
                maxAge:3600,
                path: '/'
            });
            return response;
        }else{
            console.log('wrong password')
            return NextResponse.json({status:404, message:'password is not correct'}, {status:404})
        }

       
    } catch (error) {
        console.log('backend error', error)
        return NextResponse.json({ status: 500, message: 'Internal Server Error' }, { status: 500 });
    }

}