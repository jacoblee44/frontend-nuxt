import { TeamMemberModel } from '~/resources/models/team-member.model';

export class TeamModel {
  id: number = Math.random();
  name = '';
  members: TeamMemberModel[] = [];

  constructor(init?: Partial<TeamModel>) {
    assignInit(this, init);
  }
}
