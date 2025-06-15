import * as apiModel from './api/episode.api-model';
import * as viewModel from './episode.vm';

const getSeasonByEpisode = (episode: string): string | null => {
    const match = episode.match(/^S(\d+)E\d+$/);
    if (match && match[1]) {
        return parseInt(match[1], 10).toString();
    }
    return null;
}

const getNumberByEpisode = (episode: string): string | null => {
    const match = episode.match(/^S\d+E(\d+)$/);
    if (match && match[1]) {
        return parseInt(match[1], 10).toString();
    }
    return null;
}


export const mapEpisodeFromApiToVm = (
    episode: apiModel.EpisodeApi
): viewModel.EpisodeEntityVm => ({
    ...episode,
    id: episode.id,
    name: episode.name,
    numberOfCharacters: episode.characters.length,
    episode: episode.episode,
    season: getSeasonByEpisode(episode.episode),
    numberOfEpisode: getNumberByEpisode(episode.episode),
    created: episode.created.toString(),
    airDate: episode.air_date
});
