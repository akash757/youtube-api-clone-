import React, { useState } from 'react'
import { Paper,TextField } from '@material-ui/core'
export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("")
  const haandleSubmit = (e) => {
    e.preventDefault();
    const {onFormSubmit} = props
    onFormSubmit(searchTerm)
  }
  return (
    <Paper elevation={6} style={{padding:'25px'}}>
      <form onSubmit={haandleSubmit}>
        <TextField fullWidth label="Search..." onChange={(e) => setSearchTerm(e.target.value) } />
      </form>
    </Paper>
  )
}
