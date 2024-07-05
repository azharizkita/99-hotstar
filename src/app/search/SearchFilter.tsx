import { radioContainerStyle, radioStyle } from "./styles";

type SearchFiltersProps = {
  filter: "all" | "movies" | "tvShows";
  onFilterChange: (newFilter: "all" | "movies" | "tvShows") => void;
};

const SearchFilters = ({ filter, onFilterChange }: SearchFiltersProps) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = event.target.value as "all" | "movies" | "tvShows";
    onFilterChange(newFilter);
  };

  return (
    <div style={radioContainerStyle}>
      <label style={radioStyle}>
        <input
          type="radio"
          value="all"
          checked={filter === "all"}
          onChange={handleFilterChange}
        />
        All
      </label>
      <label style={radioStyle}>
        <input
          type="radio"
          value="movies"
          checked={filter === "movies"}
          onChange={handleFilterChange}
        />
        Movies
      </label>
      <label style={radioStyle}>
        <input
          type="radio"
          value="tvShows"
          checked={filter === "tvShows"}
          onChange={handleFilterChange}
        />
        TV Shows
      </label>
    </div>
  );
};

export default SearchFilters;
