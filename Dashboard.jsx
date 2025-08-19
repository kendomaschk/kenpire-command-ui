import { useEffect, useState } from "react";
export default function Dashboard() {
  const [nodes, setNodes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/kenpire/system_truth/index.json");
        const data = await response.json();
        setNodes(data);
      } catch (error) {
        console.error("Failed to fetch node data", error);
      }
    }
    fetchData();
    const interval = setInterval(fetchData, 15000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {nodes.map((node) => (
        <div key={node.node} className="rounded-2xl shadow-md bg-white dark:bg-gray-700 p-4">
          <h2 className="text-xl font-bold mb-2">{node.node}</h2>
          <p>Status: <strong className={node.status === "TRUSTED" ? "text-green-600" : "text-yellow-500"}>{node.status}</strong></p>
          <p>IP: {node.ip}</p>
          <p>Whisper: {node.whisper}</p>
          <p>Last Seen: {node.last_heartbeat}</p>
          <p>Git: {node.git_branch} - {node.last_commit}</p>
          <details><summary className="mt-2 cursor-pointer text-blue-600">Bot Processes</summary>
            <ul className="text-sm mt-1">{node.bot_processes.map((bot, idx) => <li key={idx}>{bot}</li>)}</ul>
          </details>
        </div>
      ))}
    </div>
  );
}