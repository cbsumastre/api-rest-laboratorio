import React from 'react'

import { linkRoutes } from '#core/router'
import { useNavigate } from 'react-router-dom'

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  Divider,
} from '@mui/material'
import { LocationOn, Tv, CalendarToday } from '@mui/icons-material'

import * as classes from './character.styles'
import { CharacterEntityVm } from './character.vm'
import { formatDate, getStatusColor } from '#common/utils'
import { GenderIcon } from '#common/components'

interface Props {
  character: CharacterEntityVm
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props

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
      onClick={() => handleNavigateMain()}
      className={classes.clickable}
    >
      <CardMedia
        component="img"
        height="300"
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
            {character.type && (
              <Chip
                label={character.type}
                variant="outlined"
                size="small"
                color="secondary"
              />
            )}
          </Box>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {GenderIcon(character.gender)}
            <Typography variant="body2" sx={{ ml: 1 }}>
              <strong>Género:</strong> {character.gender}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOn sx={{ fontSize: 16, color: 'primary.main' }} />
            <Typography variant="body2" sx={{ ml: 1 }}>
              <strong>Origen:</strong> {character.origin}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOn sx={{ fontSize: 16, color: 'secondary.main' }} />
            <Typography variant="body2" sx={{ ml: 1 }}>
              <strong>Última vez visto:</strong> {character.location}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Tv sx={{ fontSize: 16, color: 'info.main' }} />
            <Typography variant="body2" sx={{ ml: 1 }}>
              <strong>Nº de Episodios:</strong> {character.numberOfEpisodes}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CalendarToday sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="body2" sx={{ ml: 1 }}>
              <strong>Creado:</strong> {formatDate(character.created)}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
