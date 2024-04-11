// Todo の詳細を取得する Action 関数
import db from "@/db"
import {todos, type SelectTodo} from "@/db/schema"
import {eq} from "drizzle-orm"

type Props = {
    id: string;
}

export default async function getTodo(params: Props) {
    const {id} = params
    const idAsNumber = Number(id)

    if (isNaN(idAsNumber)) {
        throw new Error(`Invalid id: ${id}. It must be a number.`)
    }

    try {
        const selectTodo: SelectTodo[]
            = await db.select().from(todos).where(eq(todos.id, idAsNumber)) // 配列が返る

        if (!selectTodo.length) return []

        return selectTodo
    } catch (error) {
        console.log(error)
        throw new Error(`Failed to get todo: ${String(error)}`)
    }
}
