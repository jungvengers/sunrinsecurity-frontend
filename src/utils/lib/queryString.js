export const createQueryString = (data) => {
    let queryString = `per_page=${data.articlePerPage}&page=${data.currentPage}`;

    if (data.category !== null) queryString = queryString.concat(`&isContestWork=${data.category}`);
    if (data.clubs.length > 0) queryString = queryString.concat(`&clubs=${JSON.stringify(data.clubs)}`);
    if (data.kinds.length > 0) queryString = queryString.concat(`&kinds=${JSON.stringify(data.kinds)}`);
    console.log(queryString);
    return queryString;
};
