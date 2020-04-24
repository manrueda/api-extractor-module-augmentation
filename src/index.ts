import { foo } from './core';
import './plugin'

foo({ coreProp: true });

foo({ pluginProp: true });