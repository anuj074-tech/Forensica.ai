export type Witness = {
  id: string;
  name: string;
  statement: string;
};

export type Suspect = {
  id: string;
  name: string;
  description: string;
  motive?: string;
};

export type Evidence = {
  id: string;
  type: 'image' | 'video' | 'document' | 'audio';
  title: string;
  description:string;
  timestamp: string;
  imageUrl: string;
  imageHint: string;
};
