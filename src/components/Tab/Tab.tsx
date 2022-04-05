import {
  FC, memo, useMemo,
} from 'react';

interface Props {
  tab: Tab;
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tab: FC<Props> = memo(({
  tab, selectedTabId, onTabSelected,
}) => {
  const { id, title, content } = tab;

  const isSelected = useMemo(
    () => selectedTabId === id,
    [selectedTabId],
  );

  return (
    <>
      <button
        className="Tab__title"
        type="button"
        disabled={isSelected}
        onClick={() => {
          if (!isSelected) {
            onTabSelected(tab);
          }
        }}
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
});
