import { NextRequest,NextResponse} from 'next/server'
import { cartTable, db } from '@/lib/drizzle'
import {v4 as uuid} from 'uuid'
import {cookies} from 'next/headers'
import { eq } from 'drizzle-orm'



export const GET = async(request:NextRequest)=>{

    const req = request.nextUrl;
    let currentUserId = req.searchParams.get('user_id')


    if(!currentUserId){
        return NextResponse.json({message:'user id not found'})
    }

    try {
        const res = await db.select().from(cartTable).where(eq(cartTable.user_id,currentUserId))
        return NextResponse.json({message:"OK",data:res})
    } catch (error) {
        console.log("Error")
        return NextResponse.json({message:"ERROR",data:"",error})
    }

}


export const POST = async(request:NextRequest)=>{

    const req = await request.json()
    const uid = uuid()
    const setCookies = cookies()
    if (!setCookies.has('user_id')) {
        setCookies.set('user_id',uid)
    }

    try {

        const res = await db.insert(cartTable).values({
            product_id:req.product_id,
            quantity:3,
            user_id:cookies().get('user_id')?.value as string       
        }).returning()
        return NextResponse.json({message:'OK',data:res})
    } catch (error) {
        
    }


}