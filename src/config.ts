import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import type { RawSubscription } from './types';

const subsConfig: RawSubscription = {
  id: 0,
  version: 0,
  name: '默认订阅',
  author: 'jiuqianyuan',
  supportUri: 'https://github.com/jiuqianyuan/subscription',
  updateUrl:
    'https://cdn.jsdelivr.net/gh/jiuqianyuan/subscription@tewst/dist/gkd.json5',
  checkUpdateUrl:
    'https://cdn.jsdelivr.net/gh/jiuqianyuan/subscription@tewst/dist/gkd.version.json',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
