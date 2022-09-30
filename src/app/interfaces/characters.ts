export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: LocationRickMorty;
  location: LocationRickMorty;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

interface LocationRickMorty {
  name: string;
  url: string;
}
