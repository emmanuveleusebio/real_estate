import { NextRequest, NextResponse } from 'next/server';


export async function POST(req:NextRequest) {
    try {
        const {data} = await req.json()
        return NextResponse.json({data})
    } catch (error) {
        console.log(error, "error from the backend")
    }
}



