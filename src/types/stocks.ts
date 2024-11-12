type Status = 'up' | 'down'|'neutral';

export interface Lesson {
  id: string;
  stockName: string;
  stockOption: Status;
  stockPercentage: string;
}
