import { NextRequest, NextResponse } from 'next/server';

export async function POST(req:NextRequest) {
    try {
        const responseData = { message: 'Hello from the backend' };
        console.log(responseData)
        return NextResponse.json(responseData)
    } catch (error) {
        console.log('backend error', error);
    return NextResponse.json({ error: 'Error occurred' });
    }
}