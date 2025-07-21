import { Link } from "react-router-dom"

export default function App() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">KenPire Command UI</h1>
      <p className="mt-4 text-lg">This is the main command center.</p>
      <Link to="/gameboard" className="text-blue-500 underline mt-6 block">
        Enter Gameboard View
      </Link>
    </div>
  )
}
