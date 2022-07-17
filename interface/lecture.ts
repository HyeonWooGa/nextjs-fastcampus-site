export interface mockTags {
  id: number;
  name: string;
}

export interface mockCategory {
  id: number;
  name: string;
}

export interface Lecture {
  id: number;
  category: mockCategory;
  title: string;
  tags: [mockTags];
  description: string;
  thumb: string;
  isHot: boolean;
  isNew: boolean;
}
