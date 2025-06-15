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
import { DetailBox } from './components/DetailBox'

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
          <DetailBox label="Género" description={character.gender}>
            {GenderIcon(character.gender)}
          </DetailBox>

          <DetailBox label="Primera vez visto" description={character.origin}>
            <LocationOn sx={{ fontSize: 16, color: 'primary.main' }} />
          </DetailBox>

          <DetailBox label="Última vez visto" description={character.location}>
            <LocationOn sx={{ fontSize: 16, color: 'secondary.main' }} />
          </DetailBox>

          <DetailBox
            label="Nº de episodios"
            description={character.numberOfEpisodes}
          >
            <Tv sx={{ fontSize: 16, color: 'info.main' }} />
          </DetailBox>

          <DetailBox label="Creado" description={formatDate(character.created)}>
            <CalendarToday sx={{ fontSize: 16, color: 'text.secondary' }} />
          </DetailBox>
        </Box>
      </CardContent>
    </Card>
  )
}
