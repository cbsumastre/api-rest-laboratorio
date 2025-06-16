import React from 'react'
import { useParams } from 'react-router-dom'

import { EpisodeEntityVm } from './episode.vm'
import { useEpisode } from './episode.hook'
import { EpisodeComponent } from './episode.component'

export const EpisodeContainer: React.FunctionComponent = (props) => {
  const [episode, setEpisode] = React.useState<EpisodeEntityVm>()
  const { id } = useParams<{ id: string }>()
  const { loadEpisode } = useEpisode(id)

  React.useEffect(() => {
    if (id) {
      loadEpisode().then((result) => setEpisode(result))
    }
  }, [])

  return episode && <EpisodeComponent episode={episode} />
}
