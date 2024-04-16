// import React from "react";
import { AiOutlineSearch } from 'react-icons/ai'

export default function search() {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search…"
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <AiOutlineSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
}
