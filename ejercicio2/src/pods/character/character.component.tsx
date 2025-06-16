import React, { useEffect, useState } from 'react'

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
  TextField,
  Button,
  CircularProgress,
} from '@mui/material'

import SaveIcon from '@mui/icons-material/Save'
import { LocationOn, Tv, CalendarToday, FormatQuote } from '@mui/icons-material'

import * as classes from './character.styles'
import { formatDate, getStatusColor } from '#common/utils'
import { GenderIcon } from '#common/components'
import { useCharacter } from './character.hook'
import { DetailBox } from './components/DetailBox'
import { CharacterEntityVm } from './character.vm'

interface Props {
  character: CharacterEntityVm
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props
  const [bestSentence, setBestSentence] = useState<string>()
  const [isUpdated, setIsUpdated] = useState(false)

  const { updateBestSentence } = useCharacter(character.id)

  useEffect(() => {
    if (character.bestSentence) {
      setBestSentence(character.bestSentence)
    }
  }, [])

  const navigate = useNavigate()

  const handleNavigateMain = () => {
    navigate(linkRoutes.characterCollection)
  }

  const handleEditBestSentence = (b: string) => {
    setBestSentence(b)
  }

  const handleUpdateBestSentence = () => {
    setIsUpdated(true)
    const updatedCharacter = {
      ...character,
      bestSentence,
    }
    updateBestSentence(updatedCharacter)
      .then((result) => {
        if (result) handleNavigateMain()
      })
      .finally(() => {
        setIsUpdated(false)
      })
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
        height="300"
        image={character.image}
        alt={character.name}
        sx={{ objectFit: 'cover' }}
        onClick={() => handleNavigateMain()}
        className={classes.clickable}
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

          <DetailBox
            label="Primera vez visto"
            description={character.origin.name}
          >
            <LocationOn sx={{ fontSize: 16, color: 'primary.main' }} />
          </DetailBox>

          <DetailBox
            label="Última vez visto"
            description={character.location.name}
          >
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

          <DetailBox>
            <FormatQuote sx={{ fontSize: 16, color: 'text.secondary' }} />
            <TextField
              fullWidth
              multiline
              rows={2}
              value={bestSentence}
              onChange={(e) => handleEditBestSentence(e.target.value)}
              placeholder="Escribe la mejor frase del personaje..."
              variant="standard"
              size="small"
            />
            <FormatQuote sx={{ fontSize: 16, color: 'text.secondary' }} />
          </DetailBox>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Button
          onClick={handleUpdateBestSentence}
          disabled={isUpdated}
          fullWidth
          variant="contained"
          startIcon={
            isUpdated ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              <SaveIcon />
            )
          }
          sx={{
            py: 1.5,
            fontWeight: 'bold',
          }}
        >
          {isUpdated ? 'Actualizando...' : 'Actualizar'}
        </Button>
      </CardContent>
    </Card>
  )
}
