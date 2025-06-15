import { getCharacter, updateCharacter } from './api';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mapper';
import { CharacterEntityVm } from './character.vm';


export const useCharacter = (id: number) => {
    const loadCharacter = async () => {
        const result = await getCharacter(id);
        return mapCharacterFromApiToVm(result)
    };

    const updateBestSentence = async (character: CharacterEntityVm) => {
        const reg = mapCharacterFromVmToApi(character)
        return await updateCharacter(reg)
    }

    return { loadCharacter, updateBestSentence };
};
