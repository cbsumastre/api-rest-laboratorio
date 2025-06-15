import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { switchRoutes } from './routes'
import { CharacterCollectionScene, CharacterScene, EpisodeScene } from '#scenes'

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.characterCollection}
          element={<CharacterCollectionScene />}
        />
        <Route path={switchRoutes.showCharacter} element={<CharacterScene />} />
        <Route path={switchRoutes.showEpisode} element={<EpisodeScene />} />
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.characterCollection} />}
        />
      </Routes>
    </HashRouter>
  )
}
