import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const UserWidget = () => {
  return (
    <button>
      <FontAwesomeIcon icon={faUser} />
      <p>Cuenta</p>
    </button>
  )
}

export default UserWidget