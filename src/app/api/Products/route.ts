import { NextRequest, NextResponse } from "next/server";
import products from '@/models/products'
import configDb from '@/config/dbConfig'
import jwt from 'jsonwebtoken'


export async function POST(req:NextRequest){
    try {
        configDb();
        const token = req.cookies.get('token')?.value;
        if(!token){
            return NextResponse.json({message:'user not verified'})
        }
        let decodedToken
        try {
           const secretKey = '123456'
           decodedToken = jwt.verify(token, secretKey)
            
        } catch (error) {
            return NextResponse.json({message:'invalid token'}, {status: 401})
        }
        const {title, description, location, price, category} = await req.json();

        const createdProduct = await products.create({
            title,
            description,
            location,
            price,
            category,
            seller:decodedToken.id,
        })
        

        return NextResponse.json({message: 'data added successfully'})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:'error while posting data from the backend'})
    }
}


export async function GET(req: NextRequest){
    try {
       
        configDb();
        const data = await products.find()
        return NextResponse.json({message: 'data fetched successfully', value:data}, {status:200})
    } catch (error) {
        return NextResponse.json({message: 'error while getting data', error:error}, {status:401})

    }
}