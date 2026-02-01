export interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
  categoryColor: string;
  tags: string[];
  iconUrl: string;
  starred: boolean;
  url: string;
}

export interface CategoryColorStyle {
  bg: string;
  text: string;
  border: string;
}

export type CategoryColors = Record<string, CategoryColorStyle>;
