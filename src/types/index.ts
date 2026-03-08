export interface Speaker {
  id: number;
  name: string;
  title: string;
  bio: string;
  photoUrl: string;
}

export interface ScheduleItem {
  time: string;
  activity: string;
}

export interface Sponsor {
  id: number;
  name: string;
  logoUrl: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}