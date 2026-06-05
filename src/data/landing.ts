import type { ComponentPropsMap } from '../components/ComponentRegistry';
import raw from './landing.json';

export const landingSections = {
  hero: raw.sections[0].data as ComponentPropsMap['hero']['data'],
  stats: raw.sections[1].data as ComponentPropsMap['stats']['data'],
  companies: raw.sections[2].data as ComponentPropsMap['companies']['data'],
};
