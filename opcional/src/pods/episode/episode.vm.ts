export interface EpisodeEntityVm {
    id: string;
    name: string;
    episode: string;
    season: string | null;
    numberOfCharacters: number;
    numberOfEpisode: string | null;
    created: string;
    airDate: string;
}