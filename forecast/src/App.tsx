
import './App.css'
import { Button } from "@/components/ui/button"
import { Search } from './components/ui/search'

function App() {

  return (
    <>
      <div className="flex items-center gap-4">
        <Search className="w-64" />
        <Button variant="destructive" size="lg">Click me</Button>
      </div>
    </>
  )
}

export default App
