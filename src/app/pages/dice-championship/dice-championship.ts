import { Component, computed, signal } from '@angular/core';
import { selectedLanguagePack } from '../../core/utils/language-pack';
import s1 from './seasons/s1.json';

export interface Player {
  id: string;
  name: string;
  avatar?: string;
}

export interface Loser {
  playerId: string;
  excuse: string;
}

export interface Match {
  id: string;
  player1Id: string;
  player2Id: string;
  player1Wins: number;
  player2Wins: number;
}

export interface Round {
  title: string;
  isFinished: boolean;
  matches: Match[];
}

export interface Edition {
  id: number;
  title: string;
  date: string;
  isFinished: boolean;
  players: Player[];
  championId?: string;
  losers: Loser[];
  rounds: Round[];
}

export interface PodiumEntry {
  rank: 1 | 2 | 3;
  name: string;
  avatar?: string;
  label: string;
}

export interface Standing {
  id: string;
  name: string;
  avatar?: string;
  wins: number;
  losses: number;
  matches: number;
  diff: number;
}

@Component({
  selector: 'app-dice-championship',
  standalone: true,
  imports: [],
  templateUrl: './dice-championship.html',
  styleUrl: './dice-championship.css',
})
export class DiceChampionship {
  public pack = selectedLanguagePack;

  public editions = [s1] as Edition[];
  public activeEditionIndex = signal<number>(0);

  public activeEdition = computed(() => this.editions[this.activeEditionIndex()]);

  public podium = computed<PodiumEntry[]>(() => {
    const edition = this.activeEdition();

    // ❗ NU afișa podium dacă turneul nu e terminat
    if (!edition.isFinished) return [];

    const finalMatch = edition.rounds.at(-1)?.matches[0];
    if (!finalMatch) return [];

    const p1 = this.getPlayer(finalMatch.player1Id);
    const p2 = this.getPlayer(finalMatch.player2Id);
    if (!p1 || !p2) return [];

    const winner = finalMatch.player1Wins > finalMatch.player2Wins ? p1 : p2;
    const runnerUp = finalMatch.player1Wins > finalMatch.player2Wins ? p2 : p1;

    const semiRound = edition.rounds.at(-2);
    let third: Player | undefined;

    if (semiRound?.isFinished) {
      const semiMatch = semiRound.matches[0];
      const loserId =
        semiMatch.player1Wins > semiMatch.player2Wins
          ? semiMatch.player2Id
          : semiMatch.player1Id;

      third = this.getPlayer(loserId);
    }

    return [
      {
        rank: 1,
        name: winner.name,
        avatar: winner.avatar,
        label: this.pack().diceChampionship.champion || 'Champion'
      },
      {
        rank: 2,
        name: runnerUp.name,
        avatar: runnerUp.avatar,
        label: this.pack().diceChampionship.finalist || 'Finalist'
      },
      ...(third ? [{
        rank: 3 as const,
        name: third.name,
        avatar: third.avatar,
        label: this.pack().diceChampionship.semifinalist || 'Semifinalist'
      }] : [])
    ];
  });

  public standings = computed<Standing[]>(() => {
    const edition = this.activeEdition();
    const map = new Map<string, Standing>();

    for (const round of edition.rounds) {
      // ❗ sari peste round-uri neterminate
      if (!round.isFinished) continue;

      for (const match of round.matches) {
        const p1 = this.getPlayer(match.player1Id);
        const p2 = this.getPlayer(match.player2Id);
        if (!p1 || !p2) continue;

        [p1, p2].forEach(player => {
          const existing = map.get(player.id) ?? {
            id: player.id,
            name: player.name,
            avatar: player.avatar,
            wins: 0,
            losses: 0,
            matches: 0,
            diff: 0
          };

          const isPlayer1 = player.id === match.player1Id;
          const playerWins = isPlayer1 ? match.player1Wins : match.player2Wins;
          const opponentWins = isPlayer1 ? match.player2Wins : match.player1Wins;

          existing.matches++;
          existing.diff += playerWins;

          if (playerWins > opponentWins) existing.wins++;
          else existing.losses++;

          map.set(player.id, existing);
        });
      }
    }

    return Array.from(map.values()).sort((a, b) =>
      b.wins - a.wins || b.diff - a.diff || a.name.localeCompare(b.name)
    );
  });

  selectEdition(index: number) {
    this.activeEditionIndex.set(index);
  }

  trackByRound(index: number, round: Round) {
    return round.title;
  }

  trackByMatch(index: number, match: Match) {
    return match.id;
  }

  getPlayer(id: string | undefined): Player | undefined {
    if (!id) return undefined;
    return this.activeEdition().players.find(p => p.id === id);
  }

  getPlayerName(id: string | undefined): string {
    return this.getPlayer(id)?.name || 'Unknown Player';
  }

  getPlayerAvatar(id: string | undefined): string {
    return this.getPlayer(id)?.avatar || '/heroes/default.png';
  }
}