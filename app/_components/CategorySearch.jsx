import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'


function CategorySearch() {
  return (
    <div className="row-span-1 flex flex-col items-center justify-center p-4 shadow-sm mb-10 gap-2">
      <h2 className="text-4xl font-semibold tracking-wide">Поиск по категориям</h2>
      <h2 className="text-gray-500 text-xl">Поиск и запись к врачу в один клик</h2>
      <div className="flex w-full max-w-sm items-center space-x-2 mt-2">
      <Input type="text" placeholder="Поиск..." />
      <Button type="submit"><Search/> Поиск</Button>
    </div>

    </div>
  )
}

export default CategorySearch
