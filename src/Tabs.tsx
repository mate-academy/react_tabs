/* eslint-disable max-len */
import { Button, Box } from '@mui/material';

interface Ta {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Ta[],
  onSelect: (id: string) => void,
  selectedTabId: string,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onSelect,
}) => {
  return (
    <Box
      data-cy="tab-content"
    >
      <Box
        component="div"
        sx={{ display: 'flex', flexDirection: 'row' }}
      >
        {tabs.map((tab: Ta) => (
          <Box>
            <Button
              type="button"
              onClick={
                () => (onSelect(tab.id))
              }
            >
              {tab.title}
            </Button>
          </Box>
        ))}
      </Box>

      <div>
        {tabs.find((tab: Ta) => tab.id === selectedTabId)?.content || tabs[0].content}
      </div>
    </Box>
  );
};
