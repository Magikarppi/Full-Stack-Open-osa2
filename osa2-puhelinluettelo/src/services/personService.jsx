import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)

}

const create = (newPerson) => {
    const request = axios.post(baseURL, newPerson)
    return request.then(response => {
        console.log('create response :', response)
        return response.data
    })
}

const deletePerson = (person) => {
    const request = axios.delete(`${baseURL}/${person.id}`)
    return request.then(response => console.log(response))
}

const update = (id, newPerson) => {
    return axios.put(`${baseURL}/${id}`, newPerson)
        .then(response => {
            return response.data
        }).catch(error => {
            console.log('fail', error.response)
        })
}

export default { getAll, create, deletePerson, update }