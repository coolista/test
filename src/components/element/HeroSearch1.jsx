"use client";
import { useState } from "react";
import TextArea1 from "../ui-elements/textareas/TextArea1";

const searchResult = [
  "mobile app development",
  "mobile app builder",
  "mobile legends",
  "mobile app ui ux design",
  "mobile game app development",
  "mobile app design",
];

export default function HeroSearch1() {
  const [isSearchDropdownOpen, setSearchDropdownOpen] = useState(false);
  const [getSelectedResult, setSelectedResult] = useState("");

  // search dropdown
  const focusDropdown = () => {
    setSearchDropdownOpen(true);
  };
  const blurDropdown = () => {
    setSearchDropdownOpen(false);
  };

  const selectSearch = (select) => {
    setSelectedResult(select);
  };

  return (
    <>
      <form className="form-search position-relative">
        <div className="box-text ">
          <input
            className="form-control"
            type="text"
            name="search"
            placeholder="Tell us dream"
            onBlur={blurDropdown}
            value={getSelectedResult}
            onChange={(e) => setSelectedResult(e.target.value)}
          />
          <div
            className="search-suggestions"
            style={
              isSearchDropdownOpen
                ? {
                    visibility: "visible",
                    opacity: "1",
                    top: "70px",
                  }
                : {
                    visibility: "hidden",
                    opacity: "0",
                    top: "100px",
                  }
            }
          >
            <h6 className="fz14 ml30 mt25 mb-3">Popular Search</h6>
            <div className="box-suggestions">
              <ul className="px-0 m-0 pb-4">
                {searchResult.map((item, index) => (
                  <li
                    key={index}
                    className={
                      getSelectedResult === item ? "ui-list-active" : ""
                    }
                  >
                    <div
                      onClick={() => selectSearch(item)}
                      className="info-product"
                    >
                      <div className="item_title">{item}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
