export const createQueryString = (data) => {
    try {
        let queryString = ``;
        if (data.perPage) queryString = queryString.concat(`per_page=${data.perPage}&`);
        if (data.currentPage) queryString = queryString.concat(`page=${data.currentPage}&`);
        if (data.writer) queryString = queryString.concat(`writer=${data.writer}&`);
        if (data.category && data.category !== null)
            queryString = queryString.concat(`isContestWork=${data.category}&`);
        if (data.clubs && data.clubs.length > 0)
            queryString = queryString.concat(`clubs=${JSON.stringify(data.clubs)}&`);
        if (data.kinds && data.kinds.length > 0)
            queryString = queryString.concat(`kinds=${JSON.stringify(data.kinds)}`);
        return queryString;
    } catch (error) {
        console.log(error);
    }
};
