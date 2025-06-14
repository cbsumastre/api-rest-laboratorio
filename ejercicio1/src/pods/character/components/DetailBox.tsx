import { Box, Typography } from '@mui/material'
import React, { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  label: string
  description: string | number
}
export const DetailBox: React.FC<Props> = (props) => {
  const { label, description } = props

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {props.children}
      <Typography variant="body2" sx={{ ml: 1 }}>
        <strong>{label}:</strong> {description}
      </Typography>
    </Box>
  )
}
