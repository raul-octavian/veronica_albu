export type CreateOrder = (
  basketId: string,
  value: number,
  duration: number
) => Promise<void>;
