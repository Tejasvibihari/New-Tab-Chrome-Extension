import React from 'react'
import { Trash } from 'lucide-react';
export default function TodoList() {
    return (
        <>
            <div className='bg-primary rounded-md shadow-xl text-white'>
                <div className='flex items-center p-2 justify-between'>
                    <h1 className=''>Todo List</h1>
                    <button className='rounded-md bg-secondary shadow-xl text-primary text-sm font-semibold py-2 px-2'>
                        New Task
                    </button>
                </div>
                <hr />
                <div className='p-2'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <input type="checkbox" />
                            <span className='ml-2'>Task 1</span>
                        </div>
                        <button className='ml-2 text-sm font-semibold py-2 px-2'>
                            <Trash size={15} />
                        </button>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}
