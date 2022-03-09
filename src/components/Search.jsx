var Search = (props) => (
  <div className="search-bar form-inline">
    {/* <input className="form-control inputField" type="text" onChange={(e) => {
      props.updateFeed(e.target.value);
    }}/> */}

    <input className="form-control inputField" type="text" onChange={(e) => {
      let debounced = (_.debounce(props.updateFeed, 500));
      debounced(e.target.value);
    }
    }/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-play"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
