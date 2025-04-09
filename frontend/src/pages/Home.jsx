import { useEffect, useState } from "react";
import axios from "axios";

export function Home() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/trending").then(res => {
      setCollections(res.data);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to NOVAverse</h1>
      <h2 className="text-xl font-semibold mb-2">🔥 Trending Collections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {collections.map((item, i) => (
          <div key={i} className="bg-white/10 p-4 rounded-xl shadow">
            <img src={item.image} className="w-full h-48 object-cover rounded-lg mb-2" />
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-sm text-gray-400">{item.volume} ETH traded</p>
          </div>
        ))}
      </div>
    </div>
  );
}