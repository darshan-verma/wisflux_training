import { FC, ChangeEvent, useState, useEffect } from "react";
import { Search } from "react-bootstrap-icons";
import debounce from "lodash.debounce";

interface Props {
  onSearch: (q: string) => void;
}

export const SearchBar: FC<Props> = ({ onSearch }) => {
  const [term, setTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const debounced = debounce(async (q: string) => {
    setIsSearching(true);
    await onSearch(q);
    setIsSearching(false);
  }, 500);

  useEffect(() => {
    const storedSearchText = localStorage.getItem("searchText");
    setTerm(storedSearchText || "");
    debounced(term);
    return debounced.cancel;
  }, [term]);

  return (
    <div className="relative max-w-xl mx-auto mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-black placeholder-gray-400"
          type="text"
          placeholder="Search for amazing photos..."
          value={term}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            {localStorage.setItem("searchText", e.target.value)
            setTerm(e.target.value)}

          }
        />
      </div>
      {isSearching && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-indigo-500"></div>
        </div>
      )}
    </div>
  );
};
