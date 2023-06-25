interface Ability {
  name: string;
  url: string;
}

interface Form extends Ability {}
interface GameIndexVersion extends Ability {}
interface MoveLearnMethod extends Ability {}
interface VersionGroup extends Ability {}
interface MoveObject extends Ability {}
interface Specie extends Ability {}
interface Stat extends Ability {}
interface PokemonTypeObject extends Ability {}

interface GameIndex {
  game_index: number;
  version: GameIndexVersion;
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
}

interface Move {
  move: MoveObject;
  version_group_details: VersionGroupDetail[];
}

interface BasicSprite {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

interface OtherSprite {
  dream_world: BasicSprite;
  home: BasicSprite;
  officialArtwork: BasicSprite;
}

interface Sprite {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: OtherSprite;
  versions: any;
}

interface Status {
  base_stat: number;
  effort: number;
  stat: Stat;
}

interface PokemonType {
  slot: number;
  type: PokemonTypeObject;
}

export interface OriginalPokemonData {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  game_indices: GameIndex[];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: [];
  species: Specie[];
  sprites: Sprite;
  stats: Status[];
  types: PokemonType[];
  weight: number;
}

export interface PokemonData {
  pokemonId: number;
  name: string;
  image: string;
}
