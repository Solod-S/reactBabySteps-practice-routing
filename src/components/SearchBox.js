export const SearchBox = ({ value, onchange }) => {
  return (
    <div>
      <input
        value={value}
        onChange={event => onchange(event.target.value)}
      ></input>
    </div>
  );
};
