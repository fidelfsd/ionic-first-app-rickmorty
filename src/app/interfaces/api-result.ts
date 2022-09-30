export interface ApiResult {
  info: Info;
  results: any[];
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}
