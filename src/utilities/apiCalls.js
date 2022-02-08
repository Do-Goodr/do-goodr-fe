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
        console.log('test', event)
        return fetch(`https://do-goodr-be.herokuapp.com/api/v1/events?category=${event.category}&organization_id=${event.organization_id}&name=${event.name}&address=${event.address}&start_time=${event.date}%20${event.start_time}&end_time=${event.date}%20${event.end_time}&vols_required=${event.vols_required}&description=${event.description}`, {
            method: 'POST',
            body: JSON.stringify(event),
            headers: {
            'Content-Type': 'application/json',
            }
        })
    }

}

export default apiCalls