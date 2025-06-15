import { getEpisode } from './api';
import { mapEpisodeFromApiToVm } from './episode.mapper';

export const useEpisode = (id: string) => {
    const loadEpisode = async () => {
        const result = await getEpisode(id);
        return mapEpisodeFromApiToVm(result)
    };

    return { loadEpisode };
};
