'use client'

import Link from 'next/link'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { type SelectTodo } from '@/db/schema'

type Props = {
    todos: SelectTodo[];
}

function TodoTable({ todos }: Props) {
  return (
    <Table className="border">
      <TableCaption>A list of Todos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>TODO LIST</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map(todo => {
          return (
            <TableRow key={todo.id}>
              <TableCell className="cursor-pointer">
                <Link href={`/${"1"}`}>
                  <div className="flex flex-col">
                    <p>{todo.title}</p>
                    <p>{todo.author}</p>
                  </div>
                </Link>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default TodoTable
