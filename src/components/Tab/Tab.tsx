import {
  FC, memo, useCallback, useMemo,
} from 'react';

interface Props {
  tab: Tab;
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tab: FC<Props> = memo(
  ({ tab, selectedTabId, onTabSelected }) => {
    const { id, title, content } = useMemo(() => tab, []);

    const isSelected = useMemo(
      () => selectedTabId === id,
      [selectedTabId],
    );

    const handleButtonClick = useCallback(() => {
      if (!isSelected) {
        onTabSelected(tab);
      }
    }, [selectedTabId]);

    return (
      <>
        <button
          className="Tab__title"
          type="button"
          disabled={isSelected}
          onClick={handleButtonClick}
        >
          {title}
        </button>

        {isSelected && (
          <p className="Tab__content">
            {content}
          </p>
        )}
      </>
    );
  },
);
