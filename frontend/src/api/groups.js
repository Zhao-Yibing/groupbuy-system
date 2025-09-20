import client from './client'


//params = {page:1, size:10}
export const listGroups = (params) => client.get('/api/groups', { params })

//data = {name:"xx拼团", maxMembers: 10}
export const createGroup = (data) => client.post('/api/groups', data)