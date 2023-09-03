import { signal } from '@preact/signals-react';
import { BlogItem } from '../type';

export const settingSignal = signal<{ isMobile: boolean; direction: 'rtl' | 'ltr' }>({ isMobile: false, direction: 'ltr' });
export const blogSignal = signal<{ articles: BlogItem[] }>({ articles: [] });
