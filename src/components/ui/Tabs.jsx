import React from 'react'
import Button from '../common/buttons/Button'

function Tabs({setFilter,filter}) {
  return (
   <div className="flex gap-4 mb-6">
  <Button
    variant="outline"
    onClick={() => setFilter("active")}
    className={filter === "active" ? "bg-gradient-to-br from-purple-300 to-pink-400" : ""}
  >
    Active
  </Button>
  <Button
    variant="outline"
    onClick={() => setFilter("completed")}
   className={filter === "completed" ? "bg-gradient-to-br from-purple-300 to-pink-400" : ""}
  >
    Completed
  </Button>
  <Button
    variant="outline"
    onClick={() => setFilter("all")}
   className={filter === "all" ? "bg-gradient-to-br from-purple-300 to-pink-400" : ""}
  >
    All
  </Button>
</div>
  )
}

export default Tabs
