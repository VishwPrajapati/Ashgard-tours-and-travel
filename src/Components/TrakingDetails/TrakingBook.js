import React from "react";
import { data } from "../../Data";

export default function TrakingBook() {
  return (
    <>
      <section className="traking_book_now">
        <div className="container">
          <div className="main_book_now">
            <div className="left_side_book_now">
              {data.left_side_book_now.title}
            </div>
            <div className="right_side_book_now">
              <button>{data.right_side_book_now.title}</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
