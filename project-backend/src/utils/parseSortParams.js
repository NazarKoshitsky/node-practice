import { sortOrderList } from '../constants/sort.js';

const parseSortParams = ({ sortBy, sortOrder }, movieFieldList) => {
  const parsedSortOrder = sortOrderList.includes(sortOrder)
    ? sortOrder
    : sortOrderList[0];
  const parsedSortBy = movieFieldList.includes(sortBy)
    ? sortBy
    : movieFieldList[0];

  return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortOrder,
  };
};

export default parseSortParams;
