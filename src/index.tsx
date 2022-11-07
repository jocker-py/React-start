import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { IState } from './redux/interfaces';
import { store } from './redux/state';

const rootID = document.getElementById('root') as HTMLElement;
const root: ReactDOM.Root = ReactDOM.createRoot(rootID);

export type ReRenderTree = (state: IState) => void;
export const reRenderTree: ReRenderTree = (state) => {
  root.render(<App state={state} dispatch={store.dispatch.bind(store)} />);
};

reRenderTree(store.getState());
store.subscribe(reRenderTree);
