"use client";

import { useState, useEffect } from "react";
import Head from "next/head";

// Type definitions
interface Player {
  name: string;
  avatar: string;
}

interface Team {
  rank: number;
  name: string;
  score: number;
  color: string;
  players: Player[];
}

interface Individual {
  rank: number;
  name: string;
  score: number;
  avatar: string;
}

interface Game {
  id: string;
  name: string;
  icon: string;
  color: string;
  tableName: string;
}

interface GameData {
  teams: Team[];
  individuals: Individual[];
}

interface ApiResponse<T> {
  data: T;
  success?: boolean;
  message?: string;
}

// Game configurations with their respective table names
const GAMES: Game[] = [
  {
    id: "world_explorer",
    name: "World Explorer",
    icon: "🌍",
    color: "#4A90E2",
    tableName: "world_explorer_leaderboard",
  },
  {
    id: "racing_flags",
    name: "Racing Flags",
    icon: "🏁",
    color: "#E94B3C",
    tableName: "racing_flags_leaderboard",
  },
  {
    id: "sword_battle",
    name: "Sword Battle",
    icon: "⚔️",
    color: "#F39C12",
    tableName: "sword_battle_leaderboard",
  },
  {
    id: "trophy_hunt",
    name: "Trophy Hunt",
    icon: "🏆",
    color: "#F1C40F",
    tableName: "trophy_hunt_leaderboard",
  },
  {
    id: "puzzle_master",
    name: "Puzzle Master",
    icon: "🧩",
    color: "#9B59B6",
    tableName: "puzzle_master_leaderboard",
  },
  {
    id: "gem_collector",
    name: "Gem Collector",
    icon: "💎",
    color: "#1ABC9C",
    tableName: "gem_collector_leaderboard",
  },
  {
    id: "fire_battle",
    name: "Fire Battle",
    icon: "🔥",
    color: "#E67E22",
    tableName: "fire_battle_leaderboard",
  },
  {
    id: "magic_wand",
    name: "Magic Wand",
    icon: "🪄",
    color: "#8E44AD",
    tableName: "magic_wand_leaderboard",
  },
];

// Sample data for different games - this would come from your APIs
const SAMPLE_DATA: Record<string, GameData> = {
  world_explorer: {
    teams: [
      {
        rank: 1,
        name: "Pink Team",
        score: 60791,
        color: "#E91E63",
        players: Array(5).fill({ name: "Player", avatar: "👤" }),
      },
      {
        rank: 2,
        name: "Purple Team",
        score: 60742,
        color: "#9C27B0",
        players: Array(5).fill({ name: "Player", avatar: "👤" }),
      },
      {
        rank: 3,
        name: "Red Team",
        score: 60454,
        color: "#F44336",
        players: Array(5).fill({ name: "Player", avatar: "👤" }),
      },
      {
        rank: 4,
        name: "Blue Team",
        score: 47208,
        color: "#2196F3",
        players: Array(5).fill({ name: "Player", avatar: "👤" }),
      },
    ],
    individuals: [
      { rank: 1, name: "HilmCC", score: 8377, avatar: "👤" },
      { rank: 2, name: "oGarfield", score: 8240, avatar: "👤" },
      { rank: 3, name: "MrFrost", score: 7625, avatar: "👤" },
      { rank: 4, name: "Brinkz", score: 7361, avatar: "👤" },
    ],
  },
  racing_flags: {
    teams: [
      {
        rank: 1,
        name: "Speed Demons",
        score: 45230,
        color: "#FF5722",
        players: Array(5).fill({ name: "Racer", avatar: "🏎️" }),
      },
      {
        rank: 2,
        name: "Lightning Bolts",
        score: 43891,
        color: "#FFEB3B",
        players: Array(5).fill({ name: "Racer", avatar: "⚡" }),
      },
      {
        rank: 3,
        name: "Turbo Racers",
        score: 41567,
        color: "#4CAF50",
        players: Array(5).fill({ name: "Racer", avatar: "🚗" }),
      },
    ],
    individuals: [
      { rank: 1, name: "SpeedKing", score: 9245, avatar: "🏎️" },
      { rank: 2, name: "RaceQueen", score: 8756, avatar: "👑" },
      { rank: 3, name: "TurboMax", score: 8234, avatar: "⚡" },
    ],
  },
  sword_battle: {
    teams: [
      {
        rank: 1,
        name: "Blade Masters",
        score: 52340,
        color: "#795548",
        players: Array(5).fill({ name: "Warrior", avatar: "⚔️" }),
      },
      {
        rank: 2,
        name: "Steel Legion",
        score: 48920,
        color: "#607D8B",
        players: Array(5).fill({ name: "Knight", avatar: "🛡️" }),
      },
      {
        rank: 3,
        name: "Iron Fists",
        score: 45678,
        color: "#9E9E9E",
        players: Array(5).fill({ name: "Fighter", avatar: "👊" }),
      },
    ],
    individuals: [
      { rank: 1, name: "SwordMaster", score: 10456, avatar: "⚔️" },
      { rank: 2, name: "BladeRunner", score: 9872, avatar: "🗡️" },
      { rank: 3, name: "IronWill", score: 9234, avatar: "🛡️" },
    ],
  },
};

interface GameIconProps {
  game: Game;
  isSelected: boolean;
  onClick: (game: Game) => void;
}

const GameIcon: React.FC<GameIconProps> = ({ game, isSelected, onClick }) => (
  <button
    onClick={() => onClick(game)}
    className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
      isSelected
        ? "ring-3 ring-yellow-400 scale-110 shadow-lg"
        : "hover:brightness-110 hover:shadow-md"
    }`}
    style={{ backgroundColor: game.color }}
    title={game.name}
    type="button"
  >
    {game.icon}
  </button>
);

interface TeamRowProps {
  team: Team;
  gameId: string;
}

const TeamRow: React.FC<TeamRowProps> = ({ team, gameId }) => (
  <div className="flex items-center justify-between p-4 bg-gray-800/70 backdrop-blur-sm rounded-lg mb-3 hover:bg-gray-700/70 transition-all duration-200 group">
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-3">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm ${
            team.rank === 1
              ? "bg-yellow-500"
              : team.rank === 2
              ? "bg-gray-400"
              : team.rank === 3
              ? "bg-amber-600"
              : "bg-gray-600"
          }`}
        >
          {team.rank}
        </div>
        <div
          className="w-4 h-4 rounded-full shadow-inner"
          style={{ backgroundColor: team.color }}
        />
      </div>
      <span className="text-white font-semibold group-hover:text-yellow-200 transition-colors">
        {team.name}
      </span>
    </div>
    <div className="flex items-center space-x-4">
      <div className="flex space-x-1">
        {team.players.slice(0, 5).map((player, idx) => (
          <div
            key={`${gameId}-${team.name}-player-${idx}`}
            className="w-8 h-8 bg-gray-600/80 rounded-full flex items-center justify-center text-xs border border-gray-500"
          >
            {player.avatar}
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-2 bg-gray-900/50 px-3 py-1 rounded-full">
        <span className="text-yellow-400 font-bold text-lg">
          {team.score.toLocaleString()}
        </span>
        <span className="text-yellow-400 text-sm">🔥</span>
      </div>
    </div>
  </div>
);

interface IndividualRowProps {
  player: Individual;
  gameId: string;
}

const IndividualRow: React.FC<IndividualRowProps> = ({ player, gameId }) => (
  <div className="flex items-center justify-between p-4 bg-gray-800/70 backdrop-blur-sm rounded-lg mb-3 hover:bg-gray-700/70 transition-all duration-200 group">
    <div className="flex items-center space-x-4">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm ${
          player.rank === 1
            ? "bg-yellow-500"
            : player.rank === 2
            ? "bg-gray-400"
            : player.rank === 3
            ? "bg-amber-600"
            : "bg-gray-600"
        }`}
      >
        {player.rank}
      </div>
      <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center border-2 border-gray-500">
        {player.avatar}
      </div>
      <span className="text-white font-semibold group-hover:text-yellow-200 transition-colors">
        {player.name}
      </span>
    </div>
    <div className="flex items-center space-x-2 bg-gray-900/50 px-3 py-1 rounded-full">
      <span className="text-yellow-400 font-bold text-lg">
        {player.score.toLocaleString()}
      </span>
      <span className="text-yellow-400 text-sm">🔥</span>
    </div>
  </div>
);

interface LoadingSpinnerProps {
  game: Game;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ game }) => (
  <div className="text-center py-12">
    <div className="relative">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-600 border-t-yellow-400 mx-auto"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl">{game.icon}</span>
      </div>
    </div>
    <p className="text-gray-300 mt-6 text-lg">
      Loading {game.name} leaderboards...
    </p>
  </div>
);

interface ErrorStateProps {
  error: string;
  onRetry: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error, onRetry }) => (
  <div className="text-center py-8">
    <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6 max-w-md mx-auto">
      <p className="text-red-300 text-lg">⚠️ {error}</p>
      <button
        onClick={onRetry}
        className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
        type="button"
      >
        Try Again
      </button>
    </div>
  </div>
);

interface EmptyStateProps {
  title: string;
  gameName: string;
  icon: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, gameName, icon }) => (
  <div className="text-center py-8 text-gray-400">
    <p className="text-6xl mb-4">{icon}</p>
    <p>
      No {title.toLowerCase()} data available for {gameName}
    </p>
  </div>
);

const GameLeaderboards: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<Game>(GAMES[0]);
  const [gameData, setGameData] = useState<GameData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch leaderboard data for specific game
  const fetchGameData = async (game: Game): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      // Replace with actual API calls to your different game tables
      const [teamsResponse, individualsResponse] = await Promise.all([
        // fetch(`/api/games/${game.id}/teams`).then(res => res.json() as Promise<ApiResponse<Team[]>>),
        // fetch(`/api/games/${game.id}/individuals`).then(res => res.json() as Promise<ApiResponse<Individual[]>>)

        // Simulated API calls - replace with actual endpoints
        new Promise<ApiResponse<Team[]>>((resolve) =>
          setTimeout(
            () =>
              resolve({
                data: SAMPLE_DATA[game.id]?.teams || [],
                success: true,
              }),
            800
          )
        ),
        new Promise<ApiResponse<Individual[]>>((resolve) =>
          setTimeout(
            () =>
              resolve({
                data: SAMPLE_DATA[game.id]?.individuals || [],
                success: true,
              }),
            800
          )
        ),
      ]);

      setGameData({
        teams: teamsResponse.data,
        individuals: individualsResponse.data,
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      setError(`Failed to load ${game.name} leaderboard: ${errorMessage}`);
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Load data when component mounts or game changes
  useEffect(() => {
    fetchGameData(selectedGame);
  }, [selectedGame]);

  const handleGameSelect = (game: Game): void => {
    if (game.id !== selectedGame.id) {
      setSelectedGame(game);
    }
  };

  const handleRetry = (): void => {
    fetchGameData(selectedGame);
  };

  return (
    <>
      <Head>
        <title>{selectedGame.name} - BiomeBattle Leaderboards</title>
        <meta
          name="description"
          content={`${selectedGame.name} leaderboard and player statistics`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-blue-800">
        {/* Header */}

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Game Selection */}
          <div className="text-center mb-8">
            <div className="flex justify-center flex-wrap gap-4 bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl shadow-2xl">
              {GAMES.map((game) => (
                <GameIcon
                  key={game.id}
                  game={game}
                  isSelected={game.id === selectedGame.id}
                  onClick={handleGameSelect}
                />
              ))}
            </div>
          </div>

          {/* Current Game Title */}

          {/* Error State */}
          {error && <ErrorState error={error} onRetry={handleRetry} />}

          {/* Loading State */}
          {loading && <LoadingSpinner game={selectedGame} />}

          {/* Leaderboards */}
          {!loading && !error && gameData && (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Team Leaderboard */}
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-white text-2xl font-bold flex items-center space-x-2">
                    <span>🏆</span>
                    <span>Team Rankings</span>
                  </h2>
                  <span className="text-gray-400 text-sm">
                    {gameData.teams.length} teams
                  </span>
                </div>

                {gameData.teams.length > 0 ? (
                  <div className="space-y-2">
                    {gameData.teams.map((team) => (
                      <TeamRow
                        key={`${selectedGame.id}-team-${team.rank}`}
                        team={team}
                        gameId={selectedGame.id}
                      />
                    ))}
                  </div>
                ) : (
                  <EmptyState
                    title="Team Rankings"
                    gameName={selectedGame.name}
                    icon="🏆"
                  />
                )}
              </div>

              {/* Individual Leaderboard */}
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-white text-2xl font-bold flex items-center space-x-2">
                    <span>👤</span>
                    <span>Individual Rankings</span>
                  </h2>
                  <span className="text-gray-400 text-sm">
                    {gameData.individuals.length} players
                  </span>
                </div>

                {gameData.individuals.length > 0 ? (
                  <div className="space-y-2">
                    {gameData.individuals.map((player) => (
                      <IndividualRow
                        key={`${selectedGame.id}-player-${player.rank}`}
                        player={player}
                        gameId={selectedGame.id}
                      />
                    ))}
                  </div>
                ) : (
                  <EmptyState
                    title="Individual Rankings"
                    gameName={selectedGame.name}
                    icon="👤"
                  />
                )}
              </div>
            </div>
          )}

          {/* Refresh Button */}
        </div>
      </div>
    </>
  );
};

export default GameLeaderboards;
