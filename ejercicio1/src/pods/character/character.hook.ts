import { getCharacter } from './api';
import { mapCharacterFromApiToVm } from './character.mapper';

export const useCharacter = (id: string) => {
    const loadCharacter = async () => {
        const result = await getCharacter(id);
        return mapCharacterFromApiToVm(result)
    };

    return { loadCharacter };
};
