export default function SearchBar({ query, onChange }) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search foods..."
    />
  );
}
