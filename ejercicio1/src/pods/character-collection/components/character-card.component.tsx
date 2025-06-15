import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import * as classes from './character-card.styles'
import { CharacterEntityVm } from '../character-collection.vm'
import { Box, Chip } from '@mui/material'
import { getStatusColor } from '#common/utils'

interface Props {
  character: CharacterEntityVm
  onShow: (id: string) => void
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onShow } = props

  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: 'auto',
        boxShadow: 3,
        borderRadius: 2,
        overflow: 'hidden',
      }}
      onClick={() => onShow(character.id)}
      className={classes.clickable}
    >
      <CardMedia
        component="img"
        height="200"
        image={character.image}
        alt={character.name}
        sx={{ objectFit: 'cover' }}
      />

      <CardContent sx={{ padding: 3 }}>
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            fontWeight="bold"
          >
            {character.name}
          </Typography>

          <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
            <Chip
              label={character.status}
              color={getStatusColor(character.status) as any}
              size="small"
              variant="filled"
            />
            <Chip label={character.species} variant="outlined" size="small" />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
