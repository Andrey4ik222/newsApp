/* eslint-disable react/prop-types */
import { useReducer, useState } from "react";
import Filters from "../Filters/Filters";

// eslint-disable-next-line react/prop-types
const Main = ({ news }) => {
  const [inputValue, setInputValue] = useState("");
  const [isFilters, setIsFilters] = useState(false);
  console.log(news);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const openFilters = () => {
    setIsFilters(!isFilters);
  };

  const initialValue = {
    news: [
      {
        title: "asd",
        url: "ssss",
      },
      {
        title: "gkmgfk",
        url: "ssfgfgfg",
      },
    ],
  };

  const reducer = (store, action) => {
    switch (action.type) {
      case "searchArticle":
        return {
          news: store.news.filter((item) =>
            item.title.toLowerCase().includes(action.payload.toLowerCase())
          ),
        };
      default:
        return store;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  const asd = (event) => {
    event.preventDefault();
    dispatch({
      type: "searchArticle",
      payload: inputValue,
    });
  };

  return (
    <main className="main">
      <div className="container">
        <h1 className="main-title">Formula Top Headlines</h1>
        <div className="search-wrapper">
          <form onSubmit={asd}>
            <input
              className="search-input"
              type="text"
              placeholder="Search article"
              value={inputValue}
              onChange={handleInputChange}
            />

            <button type="submit">submit</button>
          </form>

          <button onClick={openFilters}>Filters</button>
          {isFilters && <Filters></Filters>}

          <div>
            {state.news.map((elem) => (
              <p key={elem.url}>{elem.title}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
