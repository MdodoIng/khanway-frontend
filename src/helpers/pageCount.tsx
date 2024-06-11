export const getPageCount = (total: number, pageSize: number) => {
    const total_float = parseFloat(total.toFixed(0));
    const pageSize_float = parseFloat(pageSize.toFixed(0));
    if (total_float === 0 || pageSize_float === 0)
        return 1;

    const pageCount = total_float / pageSize_float;
    const restCount = total_float % pageSize_float;
    const result = Math.trunc(pageCount).toString();

    if (restCount === 0)
        return parseInt(result);
    else
        return parseInt(result) + 1;
}

export const getPageCountV2 = (total: number, pageSize: number) => {
    const total_float = parseFloat(total.toFixed(0));
    const pageSize_float = parseFloat(pageSize.toFixed(0));
    if (total_float === 0 || pageSize_float === 0)
        return 1;

    const pageCount = total_float / pageSize_float;
    const result = Math.ceil(pageCount).toString();
    return parseInt(result);
}