import db from "@/db"
import {todos} from "@/db/schema"
import {eq} from "drizzle-orm"
import {NextResponse} from "next/server"

export async function POST(request: Request) {
    let body

    try {
        body = await request.json()
    } catch (error) {
        // Invalid JSON input
        return NextResponse.json({error: 'Invalid JSON input'})
    }

    const {id} = body

    const deletedCount
        = await db
        .delete(todos)
        .where(eq(todos.id, id))

    return NextResponse.json({deletedCount})
}
