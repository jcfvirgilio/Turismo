export interface CountriesResponse {
  documentation: string;
  licenses: License[];
  rate: Rate;
  results: ResultElement[];
  status: Status;
  stay_informed: StayInformed;
  thanks: string;
  timestamp: Timestamp;
  total_results: number;
  error: string;
}

export interface License {
  name: string;
  url: string;
}

export interface Rate {
  limit: number;
  remaining: number;
  reset: number;
}

export interface ResultElement {
  annotations: string;
  bounds: string;
  components: string;
  confidence: number;
  formatted: string;
  geometry: string;
}

export interface Status {
  code: number;
  message: string;
}

export interface StayInformed {
  blog: string;
  mastodon: string;
  twitter: string;
}

export interface Timestamp {
  created_http: string;
  created_unix: number;
}
