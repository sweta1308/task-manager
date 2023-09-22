import { ReactNode } from "react";
import { DropResult } from "react-beautiful-dnd";
import { TaskProps } from "./taskContext.types";

type StatusProviderProps = {
  children: ReactNode;
};

type StatusContextProps = {
  statusReady?: TaskProps[];
  statusProgress?: TaskProps[];
  statusTesting?: TaskProps[];
  statusDone?: TaskProps[];
  onDragEnd?: (result: DropResult) => void;
};

export type { StatusProviderProps, StatusContextProps };
