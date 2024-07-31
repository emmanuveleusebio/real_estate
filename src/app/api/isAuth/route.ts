import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

const secretKey = '123456';

export async function GET(req: NextRequest){
    try {
        const token = req.cookies.get('token');

        if (!token){
            return NextResponse.json({message: 'token not found'}, {status:401})
        }
        jwt.verify(token.value, secretKey)
        return NextResponse.json({message: 'token verified successfully'})

    } catch (error) {
        console.log('token verification failed', error)
        return NextResponse.json({message:'invailid token'}, {status: 401})
    }
}