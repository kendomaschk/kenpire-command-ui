import { Link } from "react-router-dom"

export default function GameboardView() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold">Gameboard View</h2>
      <p className="mt-4">Your tasks will appear as cards here.</p>
      <Link to="/" className="text-blue-500 underline mt-6 block">
        Back to Home
      </Link>
    </div>
  )
}
