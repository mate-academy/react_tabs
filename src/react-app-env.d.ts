/// <reference types="react-scripts" />

interface Tab {
  id: string;
  title: string;
  content: string;
}

type Callback = (a: string) => void;
