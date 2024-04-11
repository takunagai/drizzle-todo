// Todo を全件取得する Action 関数
import db from "@/db"
import {todos, type SelectTodo} from "@/db/schema"

export default async function getTodos() {
    try {
        const selectTodos: SelectTodo[] = await db.select().from(todos)
        if (!selectTodos) return []
    } catch (error) {
        console.error(error)
    }
}
