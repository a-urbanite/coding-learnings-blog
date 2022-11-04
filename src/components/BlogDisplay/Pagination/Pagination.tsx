import React, { useEffect, useState } from "react";
import "./pagination.css";

const Pagination = ({ postsToDisplay, setcurrentPageContents, currentPage, setcurrentPage }: any) => {
  // const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(5);
  const [pageNumbers, setpageNumbers] = useState([] as number[]);

  const calculatePageNumbers = (postArray: any, postsPerPage: any) => {
    let pageNumberArr = [];
    for (let i = 1; i <= Math.ceil(postArray.length / postsPerPage); i++) {
      pageNumberArr.push(i);
    }
    return pageNumberArr;
  };

  const calculateCurrentPageContents = (currentPage: number, postsPerPage: number, postArray: any[]) => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = postArray.slice(indexOfFirstPost, indexOfLastPost);
    return currentPosts;
  };

  useEffect(() => {
    setcurrentPage(1);
    setpageNumbers(calculatePageNumbers(postsToDisplay, postsPerPage));
    setcurrentPageContents(calculateCurrentPageContents(currentPage, postsPerPage, postsToDisplay));
  }, [postsToDisplay]);

  useEffect(() => {
    setcurrentPageContents(calculateCurrentPageContents(currentPage, postsPerPage, postsToDisplay));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  useEffect(() => {
    setpageNumbers(calculatePageNumbers(postsToDisplay, postsPerPage));
    setcurrentPage(1);
    setcurrentPageContents(calculateCurrentPageContents(currentPage, postsPerPage, postsToDisplay));
  }, [postsPerPage]);

  return (
    <div className="paginationContainer">
      <ul className="paginationList">
        {pageNumbers.map((pageNumber: any) => {
          return (
            <li key={pageNumber} onClick={() => setcurrentPage(pageNumber)}>
              <span className={`globalBtn ${pageNumber === currentPage && "globalBtnActive"}`}>
                {pageNumber}
              </span>
            </li>
          );
        })}
      </ul>
      <p>{postsToDisplay.length}</p>
      <p className="pagiantionlabel">posts</p>
      <select
        className="globalForm__input"
        defaultValue={5}
        onChange={(e) => setpostsPerPage(+e.target.value)}
      >
        <option value={1}>1</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
      </select>
      <p className="pagiantionlabel">posts/page</p>
    </div>
  );
};

export default Pagination;
