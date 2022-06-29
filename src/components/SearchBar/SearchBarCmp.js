import React from "react";
import "./SearchBarCss.css";

export default function SearchBarCmp() {
  return (
    <div className="col-12 col-sm-10 col-md-10 searchbar__bar">
      <div className="row">
        <div className="col-md-4 mb-1">
          <label htmlFor="">Check In</label>
          <input type="date" id="txtCheckInDate" name="txtCheckInDate" className="form-control" />
        </div>
        <div className="col-md-4 mb-1">
          <label htmlFor="">Check Out</label>
          <input type="date" id="txtCheckOUtDate" name="txtCheckOUtDate" className="form-control" />
        </div>
        <div className="col-md-4">
          <div className="text-end">
            <button type="submit" className="btn searchbar__btn">
              <i className="fa fa-search fa-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

