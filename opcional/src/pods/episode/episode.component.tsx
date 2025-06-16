import React from 'react'

import { linkRoutes } from '#core/router'
import { useNavigate } from 'react-router-dom'

import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Button,
} from '@mui/material'
import {
  CalendarToday,
  Schedule,
  People,
  Category,
  Movie,
} from '@mui/icons-material'

import { formatDate } from '#common/utils'
import { EpisodeEntityVm } from './episode.vm'

interface Props {
  episode: EpisodeEntityVm
}

export const EpisodeComponent: React.FunctionComponent<Props> = (props) => {
  const { episode } = props

  const navigate = useNavigate()

  const handleNavigateMain = () => {
    navigate(linkRoutes.characterCollection)
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
      <Box
        sx={{
          p: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
          {episode.name}
        </Typography>
      </Box>
      <Divider sx={{ my: 1 }} />

      <CardContent sx={{ padding: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Category sx={{ fontSize: 16, color: 'warning.main' }} />
            <Typography variant="body2" sx={{ ml: 1 }}>
              <strong>Temporada:</strong> {episode.season}
            </Typography>
            <Movie sx={{ fontSize: 16, color: 'warning.main', ml: 3 }} />
            <Typography variant="body2" sx={{ ml: 1 }}>
              <strong>Episodio:</strong> {episode.episode}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Schedule sx={{ fontSize: 16, color: 'primary.main' }} />
            <Typography variant="body2" sx={{ ml: 1 }}>
              <strong>Fecha de emisión:</strong> {episode.airDate}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <People sx={{ fontSize: 16, color: 'secondary.main' }} />
            <Typography variant="body2" sx={{ ml: 1 }}>
              <strong>Personajes:</strong> {episode.numberOfCharacters}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CalendarToday sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="body2" sx={{ ml: 1 }}>
              <strong>Creado:</strong> {formatDate(episode.created)}
            </Typography>
          </Box>

          <Button
            onClick={() => handleNavigateMain()}
            fullWidth
            variant="contained"
            sx={{
              py: 1.2,
              fontWeight: 'bold',
            }}
          >
            Volver
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}
