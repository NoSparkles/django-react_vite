import React, { useState, useEffect } from 'react'

const Hello = ({name}) => {
  let [notes, setNotes] = useState([])
    let getNotes = async () => {
        let response = await fetch('/api')
        console.log(response)
        //let data = await response.json()
    }
    getNotes()

  return (
    <>Hello {1}!</>
  )
}

export default Hello