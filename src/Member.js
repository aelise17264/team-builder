import React from 'react'

function Member(props){
    const {details} = props
    console.log(details)
    if(!details){
        return <h3>Role for initiative </h3>
    }
    return(
        <div className='memberCard'>
            <h3>Username: {details.username}</h3>
            <h3>Email: {details.email}</h3>
            <h3>Character: {details.character}</h3>
        </div>
    )
}

export default Member