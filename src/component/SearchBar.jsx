import "./layout.css";
function SearchBar() {
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder=" &nbsp;🔍 &nbsp;Events, Organiser, Keyword"
        />

        <input type="text" placeholder=" &nbsp;🎯 &nbsp;Anywhere" />
        <input type="text" placeholder=" &nbsp;📅 &nbsp;Anytime" />
        <button>Search</button>
      </div>
      <div className="recommendbtn">
        <button>Today</button>
        <button>Tomorrow</button>
        <button>This week</button>
        <button>Sports</button>
        <button>Community</button>
      </div>
    </div>
  );
}

export default SearchBar;
