let initialState = [
    {id: 1, name: 'Artyom', country: 'Russia', city: 'Aksay', date_created: '2021/05/21', friends: 4},
    {id: 2, name: 'Arina', country: 'Russia', city: 'Rostov-on-Done', date_created: '2015/08/15', friends: 7},
    {id: 3, name: 'Vika', country: 'Russia', city: 'Moscow', date_created: '2020/09/01', friends: 20},
    {id: 4, name: 'Aleksei', country: 'USA', city: 'LA', date_created: '2019/12/29', friends: 5}
]

export const AllUsersReducer = (state = initialState, action) => {
    return state
}
