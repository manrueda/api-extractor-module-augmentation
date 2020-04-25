import { foo, Extras } from './core';
import './plugin'
import { bar } from './external-plugin'

foo({ coreProp: true });

foo({ pluginProp: true });

bar({ pluginProp: true, enabled: true });

export { foo, Extras, bar }
