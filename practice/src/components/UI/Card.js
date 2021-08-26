import React from 'react'

const Card = () => {
    const userData = [
        {
            id: 1,
            userName: '루이',
            userAge: 11
        },
        {
            id: 2,
            userName: '오드',
            userAge: 10
        },
        {
            id: 3,
            userName: '하루',
            userAge: 1
        }
    ]

    return(
        // <div>
        //     {userData[0].userName}
        //     {userData[0].userAge}
        // </div>
        <div>
            {userData.map(userList => (
                <p>{userList.id} {userList.userName} {userList.userAge}</p>
            ))}
        </div>
    )
}

export default Card