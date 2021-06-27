import { Seeder } from 'mongoose-data-seed';
import Raid from '../src/models/raid';

const data = [
  {
    title: 'Last Wish',
    encounters: [
      { name: 'Kalli, the Corrupted' },
      { name: 'Shuro Chi, the Corrupted' },
      { name: 'Morgeth, the Spirekeeper' },
      { name: 'The Vault' },
      { name: 'Riven of a Thousand Voices' },
      { name: 'The Heart of Riven' },
    ],
    emoji: '🇱',
    encodedEmoji: '%F0%9F%87%B1',
  },
  {
    title: 'Garden of Salvation',
    encounters: [
      { name: 'Evade the Consecrated Mind' },
      { name: 'Summon the Consecrated Mind' },
      { name: 'Defeat the Consecrated Mind' },
      { name: 'Defeat the Sanctified Mind' },
    ],
    emoji: '🇬',
    encodedEmoji: '%F0%9F%87%AC',
  },
  {
    title: 'Deep Stone Crypt',
    encounters: [
      { name: 'Frostbite Sparrow Race' },
      { name: 'Crypt Security' },
      { name: 'Atraks-1' },
      { name: 'Space Walk' },
      { name: 'Taniks, Reborn' },
      { name: 'Taniks, the Abomination' },
    ],
    emoji: '🇩',
    encodedEmoji: '%F0%9F%87%A9',
  },
  {
    title: 'Vault of Glass',
    encounters: [
      { name: 'The Spire' },
      { name: 'Confluxes' },
      { name: 'Oracles' },
      { name: 'The Templar' },
      { name: "The Gorgon's Labyrinth" },
      { name: 'The Gatekeeper' },
      { name: "Atheon, Time's Conflux" },
    ],
    emoji: '🇻',
    encodedEmoji: '%F0%9F%87%BB',
  },
];

class RaidsSeeder extends Seeder {
  async shouldRun() {
    return Raid.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return Raid.create(data);
  }
}

export default RaidsSeeder;
//
