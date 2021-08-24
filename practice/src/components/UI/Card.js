import React from 'react'

const Card = () => {
    const userData = [
        {
            userName : '루이',
            userAge : 11
        },
        {
            userName : '오드',
            userAge : 10
        }
    ]

    return(
        <div>
            {userData[0].userName}
        </div>
    )
}

export default Card