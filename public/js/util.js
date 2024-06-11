const onShowLoading = () => $("#loading-screen").css("display", "block");
const onHideLoading = () => $("#loading-screen").css("display", "none");
const apiCall = async (query, input) => {
    try {
        const response = await axios.post(
            `${apiPrefix}/graphql`,
            {
                query: query,
                variables: {
                    input: input
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*", // Required for CORS
                    Authorization: `Bearer ${sessionStorage.getItem('khanway_access_token')}`
                }
            }
        )
        if (!response.data || response.data.errors || !response.data.data)
            throw new Error("An error occurred, please try again later");

        console.log('response', response)
        return response.data.data;
    } catch (e) {
        Swal.fire({
            icon: 'error',
            title: 'ERROR!',
            text: e.message,
        })
    }
}

const addComma = (num) => {
    if (num === 0)
        return "0";
    if (num.toString().includes('.'))
        return num.toFixed(0).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}


