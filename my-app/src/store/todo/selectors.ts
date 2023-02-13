import { createSelector } from 'reselect';
import React from 'react';
import { RootState } from 'types';

export const baseSelector = (state: RootState) => state.todo;

export const TodoListSelector = createSelector(
  baseSelector,
  state => state.todolist,
);
