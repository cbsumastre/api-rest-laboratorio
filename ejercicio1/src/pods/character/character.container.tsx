import React from 'react'
import { useParams } from 'react-router-dom'
import { CharacterEntityVm } from './character.vm'

import { useCharacterCollection } from './character-collection.hook'
import { CharacterComponent } from './character.component'

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<CharacterEntityVm>()
  const { id } = useParams<{ id: string }>()
  const { loadCharacter } = useCharacterCollection(id)

  React.useEffect(() => {
    if (id) {
      loadCharacter().then((result) => setCharacter(result))
    }
  }, [])

  return character && <CharacterComponent character={character} />
}
