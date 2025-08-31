export interface Challenge {
  id: number;
  scenario: string;
  guidance: string;
  illustration: string;
  prompt: string;
  placeholder: string;
  feedback: {
    principle: string;
    examples: string[];
  };
}