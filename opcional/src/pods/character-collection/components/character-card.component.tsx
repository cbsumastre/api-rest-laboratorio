import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import * as classes from './character-card.styles'
import { CharacterEntityVm } from '../character-collection.vm'
import { Box, Button, Chip, Divider } from '@mui/material'
import { getStatusColor } from '#common/utils'
import { PlayCircleOutline } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { linkRoutes } from '#core/router'

interface Props {
  character: CharacterEntityVm
  onShow: (id: string) => void
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onShow } = props
  const navigate = useNavigate()

  const handleNavigateEpisode = (id: string) => {
    navigate(linkRoutes.showEpisode(id))
  }

  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: 'auto',
        boxShadow: 3,
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={character.image}
        alt={character.name}
        sx={{ objectFit: 'cover' }}
        title={character.name}
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

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PlayCircleOutline sx={{ fontSize: 16, color: 'info.main' }} />
            <Typography variant="body2" sx={{ ml: 1 }}>
              <strong>Último episodio:</strong> {character.lastEpisode.episode}
            </Typography>
            <Button
              onClick={() => handleNavigateEpisode(character.lastEpisode.id)}
              size="small"
              variant="contained"
            >
              Ver
            </Button>
          </Box>
        </Box>
        <Button
          onClick={() => onShow(character.id)}
          fullWidth
          variant="contained"
          sx={{
            py: 1.2,
            fontWeight: 'bold',
          }}
          title={`Ver detalle de ${character.name}`}
        >
          Ver detalle
        </Button>
      </CardContent>
    </Card>
  )
}
