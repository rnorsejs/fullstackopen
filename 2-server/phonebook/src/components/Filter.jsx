const Filter = ({ handleFilter }) => {
  return (
    <div>
      Filter contacts: <input onChange={handleFilter} />
    </div>
  );
};
export default Filter;
