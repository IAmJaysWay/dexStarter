import * as React from 'react';
import type { Locale } from '.';
export type LocaleComponentName = Exclude<keyof Locale, 'locale'>;
export interface LocaleReceiverProps<C extends LocaleComponentName = LocaleComponentName> {
    componentName?: C;
    defaultLocale?: Locale[C] | (() => Locale[C]);
    children: (locale: NonNullable<Locale[C]>, localeCode: string, fullLocale: Locale) => React.ReactElement;
}
declare const LocaleReceiver: <C extends LocaleComponentName = LocaleComponentName>(props: LocaleReceiverProps<C>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export default LocaleReceiver;
export declare const useLocaleReceiver: <C extends LocaleComponentName = LocaleComponentName>(componentName: C, defaultLocale?: Locale[C] | (() => Locale[C]) | undefined) => [Locale[C]];
