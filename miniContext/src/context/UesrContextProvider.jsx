import React from 'react'
import userContext  from './userContext'

const UesrContextProvider = ({children}) => {
    const [user,setuser] = React.useState(null)
    return (
        <UesrContextProvide value={{user,setuser}}>
        {children}
        </UesrContextProvide>
    )

}


export default UesrContextProvider