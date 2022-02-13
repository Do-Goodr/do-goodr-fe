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

    loadAllOrganizations: () => {
        return fetch('https://do-goodr-be.herokuapp.com/api/v1/organizations')
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error()
                }
            })
            .catch(err => err)
    },

    loadEventsByZipCode: (zip, miles) => {
        return fetch(`https://do-goodr-be.herokuapp.com/api/v1/search?zip=${zip}&distance=${miles}`)
            .then(res => {

                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error()
                }
            })
            .catch(err => console.log(err))
    },

    loadEventsByOrg: (orgID) => {
        return fetch(`https://do-goodr-be.herokuapp.com/api/v1/organizations/${orgID}/events`)
        .then(res => {

            if (res.ok) {
                return res.json()
            } else {
                throw new Error()
            }
        })
        .catch(err => console.log(err))
    },

    postEvent: (event) => {
        return fetch(`https://do-goodr-be.herokuapp.com/api/v1/events?category=${event.category}&organization_id=${event.organization_id}&name=${event.name}&address=${event.address}&start_time=${event.date}%20${event.start_time}&end_time=${event.date}%20${event.end_time}&vols_required=${event.vols_required}&description=${event.description}`, {
            method: 'POST',
            body: JSON.stringify(event),
            headers: {
            'Content-Type': 'application/json',
            }
        })
    },

    deleteEvent: (id) => {
        return fetch(`https://do-goodr-be.herokuapp.com/api/v1/events/${id}`, {
            method: 'DELETE'})
            .then(res => {
                if(!res.ok) {
                    throw new Error(`${res.status} ${res.statusText}`);
                }
                return res.json();
            });
        },

    postNewOrg: (org) => {
        return fetch(`https://do-goodr-be.herokuapp.com/api/v1/organizations?name=${org.name}&location=${org.address}&phone=${org.phone}&email=${org.email}`, {
            method: 'POST',
            body: JSON.stringify(org),
            headers: {
            'Content-Type': 'application/json',
            }
        })
    }
}

export default apiCalls