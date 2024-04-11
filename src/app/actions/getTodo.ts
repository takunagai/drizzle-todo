// Todo の詳細を取得する Action 関数
import db from "@/db"
import {todos, type SelectTodo} from "@/db/schema"
import {eq} from "drizzle-orm"

type Props = {
    id: string;
}

export default async function getTodo(params: Props) {
    try {
        const {id} = params
        const number_id = Number(id)
        const selectTodo: SelectTodo[]
            = await db.select().from(todos).where(eq(todos.id, number_id)) // 配列が返る
        if (!selectTodo) return []

        return selectTodo
    } catch (error) {
        console.log(error)
        throw new Error(String(error))
    }
}
