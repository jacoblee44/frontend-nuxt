export class TeamMemberModel {
  id: number | undefined;
  name: string;
  title: string;
  email: string;
  phone: string;
  avatar?: string;

  constructor(init?: Partial<TeamMemberModel>) {
    const data = {
      id: undefined,
      name: '',
      title: '',
      email: '',
      phone: '',
      ...init,
    };

    this.id = data.id;
    this.name = data.name;
    this.title = data.title;
    this.email = data.email;
    this.phone = data.phone;
    this.avatar = data.avatar;
  }
}
