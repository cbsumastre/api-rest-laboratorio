import { getCharacter } from './api';
import { mapCharacterFromApiToVm } from './character.mapper';

export const useCharacterCollection = (id: string) => {
    const loadCharacter = async () => {
        const result = await getCharacter(id);
        return mapCharacterFromApiToVm(result)
    };

    return { loadCharacter };
};
