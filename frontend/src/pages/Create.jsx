import { useState } from "react";
import axios from "axios";

export function Create() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/mint", { name, image });
    alert("NFT Minted!");
    setName("");
    setImage("");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Create NFT</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="NFT Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded border"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 rounded border"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Mint NFT
        </button>
      </form>
    </div>
  );
}