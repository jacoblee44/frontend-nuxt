import { TeamModel, TeamMemberModel } from '~/resources/models';

async function loadTeamsMock(siteId: string): Promise<TeamModel[]> {
  console.debug('loading teams data for site', siteId);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        new TeamModel({
          id: 1,
          name: 'Team 1',
          members: [
            new TeamMemberModel({
              id: 1,
              name: 'Member 1',
              email: 'test@example.com',
              avatar: '/images/avatar-1.png',
            }),
          ],
        }),
      ]);
    }, 1000);
  });
}

export function useTeamsEdit(siteId: string) {
  const teams = ref<TeamModel[]>([]);
  const loading = ref(false);

  const loadTeams = () => {
    loading.value = true;
    loadTeamsMock(siteId)
      .then((teamModels) => {
        teams.value = teamModels;
        loading.value = false;
      })
      .catch(() => {
        loading.value = false;
      });
  };

  loadTeams();

  const createTeam = (name: string) => {
    const newTeam = new TeamModel({ name });
    teams.value = [...teams.value, newTeam];
    console.debug('createTeam', newTeam.id);
  };

  const findTeamById = (teamId: number) => teams.value.find((team) => team.id === teamId);

  const updateTeamName = (teamId: number, newName: string) => {
    const team = findTeamById(teamId);
    if (team) {
      team.name = newName;
      console.debug('updateTeam', team.id, newName);
    }
  };

  const addMember = (teamId: number, member: TeamMemberModel) => {
    const team = findTeamById(teamId);
    if (team) {
      // Later an API call will create the ID
      member.id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
      team.members = [...team.members, member];
      console.debug('updateTeam members', team.id, team.members);
    }
  };

  const removeMember = (teamId: number, member: TeamMemberModel) => {
    const team = findTeamById(teamId);
    if (team) {
      const newMembers = team.members.filter((item) => item.id !== member.id);
      team.members = newMembers;
      console.debug('updateTeam', team.id, newMembers);
    }
  };

  const updateMember = (teamId: number, data: Partial<TeamMemberModel>) => {
    const team = findTeamById(teamId);
    const memberId = data.id;
    if (team) {
      const newMembers = team.members.map((item) => {
        if (item.id === memberId) {
          return new TeamMemberModel({ ...item, ...data });
        }
        return item;
      });

      team.members = newMembers;
      console.debug('updateTeam', team.id, newMembers);
    }
  };

  return {
    loading,
    teams,
    createTeam,
    updateTeamName,
    addMember,
    removeMember,
    updateMember,
  };
}
