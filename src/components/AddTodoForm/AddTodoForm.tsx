"use client"

import {useState} from "react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"

function AddTodoForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [author, setAuthor] = useState("")
    const addTodo = async () => {
        const res = await fetch("/api/todo/create", {
            method: "POST",
            body: JSON.stringify({
                title,
                description,
                author,
            }),
        })
        const json = await res.json()
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger className="bg-primary text-background px-4 py-1 text-[14px] rounded-sm">+
                TODO追加</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>TODOの追加</AlertDialogTitle>
                    <AlertDialogDescription>
                        TODO を追加します。Description です。
                    </AlertDialogDescription>
                </AlertDialogHeader>
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
                </div>
                <AlertDialogFooter>
                    <AlertDialogCancel>キャンセル</AlertDialogCancel>
                    <AlertDialogAction onClick={addTodo}>追加</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default AddTodoForm