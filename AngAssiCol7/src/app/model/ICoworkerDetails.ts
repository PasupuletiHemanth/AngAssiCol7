import { ICoworkerFunctionalities } from './ICoworkerFunctionalities';

export interface ICoworkerDetails {
    id: number;
    coworkerId: string;
    storeNumber: number;
    source: string;
    coworkerFunctionalities : ICoworkerFunctionalities[];
  }