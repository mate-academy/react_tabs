export interface ITabs {
  id: string,
  title: string,
  content: string
}

export type TabsProps = {
  tabs: ITabs[];
};
