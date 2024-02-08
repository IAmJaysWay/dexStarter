import React from 'react';
import type { ReactNode } from 'react';
import type { useAppProps } from './context';
export type AppProps = {
    className?: string;
    prefixCls?: string;
    children?: ReactNode;
};
declare const App: React.FC<AppProps> & {
    useApp: () => useAppProps;
};
export default App;
