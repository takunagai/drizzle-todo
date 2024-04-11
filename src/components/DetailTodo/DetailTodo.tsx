'use client'

import {useEffect, useState} from "react"
import {useParams} from "next/navigation"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Button} from "@/components/ui/button"

import {type SelectTodo} from "@/db/schema"

type Props = {
    todo: SelectTodo[]
}
function DetailTodo({todo}: Props) {
    const params = useParams()
    const {id} = params
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [author, setAuthor] = useState("")
    const updateTodo = async () => {
        const res = await fetch("/api/todo/update", {
            method: "POST",
            body: JSON.stringify({
                id,
                title,
                description,
                author,
            }),
        })
        const json = await res.json()
    }

    useEffect(() => {
        if (todo.length > 0) {
            setTitle(todo[0].title)
            setDescription(todo[0].description)
            setAuthor(todo[0].author)
        }
    }, [todo])

    return (
        <div className="flex flex-col gap-8 mb-8">
            <div className="flex flex-col gap-2">
                <Label className="font-bold">タイトル</Label>
                <Input value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className="flex flex-col gap-2">
                <Label className="font-bold">詳細</Label>
                <Textarea value={description} onChange={e => setDescription(e.target.value)}/>
            </div>
            <div className="flex flex-col gap-2">
                <Label className="font-bold">作成者</Label>
                <Input value={author} onChange={e => setAuthor(e.target.value)}/>
            </div>
            <div>
                <Button onClick={updateTodo}>更新</Button>
            </div>
        </div>
    )
}

export default DetailTodo