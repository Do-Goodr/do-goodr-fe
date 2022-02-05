const apiCalls = {
    loadAllEvents: () => {
        return fetch('https://do-goodr-be.herokuapp.com/api/v1/events')
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error()
                }
            })
            .catch(err => err)
    },

}

export default apiCalls