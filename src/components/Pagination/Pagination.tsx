import React, { useState, useEffect } from "react";
import styles from "./Pagination.module.scss";
import LeftArrowIcon from "/public/leftArrow_icon.svg";
import RightArrowIcon from "/public/rightArrow_icon.svg";
import Image from "next/image";
import { useWindowSize } from "@/hook/useSize";

interface PaginationProps {
  totalItems: number;
  limit: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  limit,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / limit);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  const { width = 1 } = useWindowSize();
  const [isIconSmall, setIsIconSmall] = useState(false);

  useEffect(() => {
    if (+width <= 440) {
      setIsIconSmall(true);
    }
  }, []);

  useEffect(() => {
    setIsLeftDisabled(currentPage === 1);
    setIsRightDisabled(currentPage === totalPages);
  }, [currentPage, totalPages]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const pageRange = 2; // Number of pages to show before and after the current page
    console.log(totalPages, "total count");
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - pageRange && i <= currentPage + pageRange)
      ) {
        pages.push(
          <span
            key={i}
            className={
              currentPage === i
                ? `${styles.activePage} ${styles.pageNumber}`
                : styles.pageNumber
            }
            onClick={() => handlePageChange(i)}
          >
            {i}
          </span>
        );
      } else if (
        i === currentPage - pageRange - 1 ||
        i === currentPage + pageRange + 1
      ) {
        // Show ellipses (...) before and after the skipped pages
        pages.push(
          <span
            key={i}
            className={
              currentPage === i
                ? `${styles.activePage} ${styles.pageNumber}`
                : styles.pageNumber
            }
            onClick={() => handlePageChange(i)}
          >
            ...
          </span>
        );
      }
    }
    return pages;
  };

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.button} ${isLeftDisabled ? styles.disabled : ""}`}
        disabled={isLeftDisabled}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        {isIconSmall ? (
          <Image
            src={LeftArrowIcon}
            width={11}
            height={11}
            alt="left arrow icon"
          />
        ) : (
          <Image
            src={LeftArrowIcon}
            width={16}
            height={16}
            alt="left arrow icon"
          />
        )}
      </button>
      {renderPageNumbers()}
      <button
        className={`${styles.button} ${isRightDisabled ? styles.disabled : ""}`}
        disabled={isRightDisabled}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        {isIconSmall ? (
          <Image
            src={RightArrowIcon}
            width={11}
            height={11}
            alt="right arrow icon"
          />
        ) : (
          <Image
            src={RightArrowIcon}
            width={16}
            height={16}
            alt="right arrow icon"
          />
        )}
      </button>
    </div>
  );
};

export default Pagination;
