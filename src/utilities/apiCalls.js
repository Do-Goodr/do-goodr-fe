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

    postEvent: (event) => {
        return fetch('https://do-goodr-be.herokuapp.com/api/v1/events', {
            method: 'POST',
            body: JSON.stringify(event),
            headers: {
            'Content-Type': 'application/json',
            }
        })
    }

}

export default apiCalls