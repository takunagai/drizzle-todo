'use client'

import {useParams, useRouter} from "next/navigation"
import {Button} from "@/components/ui/button"

function DeleteTodo() {
    const router = useRouter()
    const params = useParams()
    const {id} = params
    const deleteTodo = async () => {
        const res = await fetch("/api/todo/delete", { // API はまだ未実装
            method: "POST",
            body: JSON.stringify({
                id: id,
            }),
        })
        router.push("/")
    }
    return <Button onClick={deleteTodo}>削除する</Button>
}

export default DeleteTodo
