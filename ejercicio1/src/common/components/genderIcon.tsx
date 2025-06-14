import React from 'react'
import { Person, Favorite, FavoriteBorder } from '@mui/icons-material'

export const GenderIcon = (gender: string) => {
  switch (gender) {
    case 'Female':
      return <Favorite sx={{ fontSize: 16 }} />
    case 'Male':
      return <Person sx={{ fontSize: 16 }} />
    default:
      return <FavoriteBorder sx={{ fontSize: 16 }} />
  }
}
