import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div
      className="
      flex items-center gap-3
      rounded-3xl
      border border-border
      bg-white/60
      backdrop-blur-xl
      px-5 py-4
      "
    >
      <Search size={20} className="text-muted" />

      <input
        type="text"
        placeholder="Search utilities..."
        value={value}
        onChange={onChange}
        className="
        w-full
        bg-transparent
        outline-none
        text-sm
        "
      />
    </div>
  );
};

export default SearchBar;