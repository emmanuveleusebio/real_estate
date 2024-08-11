import { NextRequest, NextResponse } from "next/server";
import products from '@/models/products'
import configDb from '@/config/dbConfig'
import jwt from 'jsonwebtoken'


export async function POST(NextRequest){
    try {
        configDb();
        const token = NextRequest.cookies.get('token')?.value;
        
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
        const {title, description, location, price, category} = await NextRequest.json();

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


export async function GET(NextRequest) {
    try {
        configDb();
        const { searchParams } = new URL(NextRequest.url);
        const category = searchParams.get('category');
        console.log(category,'this is the cat')

        let data;
        if (category) {
            data = await products.find({ category });
           
        } else {
            data = await products.find();
            
        }

        return NextResponse.json({ plots: data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'error while getting data', error: error }, { status: 401 });
    }
}