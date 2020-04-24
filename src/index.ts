import { foo, Extras } from './core';
import './plugin'

foo({ coreProp: true });

foo({ pluginProp: true });

export { foo, Extras }
