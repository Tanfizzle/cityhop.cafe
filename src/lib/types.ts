import type { Writable } from 'svelte/store';

export type Tag = 'snow' | 'fog' | 'rain' | 'morning' | 'night' | 'day' | 'evening';

export interface Track {
	name: string;
	trackID: string;
	genre: Genre;
	live: boolean;
}

export interface Offset {
  start?: number;
  end?: number;
}

export interface Scene {
	name: string;
	type: 'walk' | 'drive';
	videoID: string;
	tags?: Tag[];
	suggestedTrack?: Track;
	offset?: Offset;
	country: Country;
}

export enum Country {
	korea = 'South Korea',
	us = 'United States',
	canada = 'Canada',
  turkey = 'Turkey',
	vietnam = 'Vietnam',
	china = 'China',
	france = 'France',
	czechRepublic = 'Czech Republic',
	uk = 'England',
	germany = 'Germany',
	austria = 'Austria',
	ghana = 'Ghana',
	russia = 'Russia',
	ukraine = 'Ukraine',
	netherlands = 'Netherlands',
	spain = 'Spain',
	taiwan = 'Taiwan',
	lebanon = 'Lebanon',
	japan = 'Japan',
	singapore = 'Singapore',
	peru = 'Peru',
  southAfrica = 'South Africa',
	india = 'India',
	uae = 'United Arab Emirates',
	italy = 'Italy',
  serbia = 'Serbia',
	mexico = 'Mexico',
	thailand = 'Thailand',
	egypt = 'Egypt',
	scotland = 'Scotland',
	switzerland = 'Switzerland'
}

export enum Genre {
	pop = 'Pop',
	jazz = 'Jazz',
	lofi = 'Lofi',
	rnb = 'R&B',
	classical = 'Classical',
	electronic = 'Electronic'
}
