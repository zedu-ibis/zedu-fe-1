export interface ContributorTeam {
  // URL segment used for /contributors/[team]
  slug: string;
  name: string;
  description?: string;
}

// TODO: replace with the real team list
export const contributorTeams: ContributorTeam[] = [
  { slug: "team-alpha", name: "Team Alpha" },
  { slug: "team-beta", name: "Team Beta" },
  { slug: "team-gamma", name: "Team Gamma" },
  { slug: "team-delta", name: "Team Delta" },
  { slug: "team-epsilon", name: "Team Epsilon" },
  { slug: "team-zeta", name: "Team Zeta" },
];
