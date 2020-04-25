import { IConfigApiReport } from '@microsoft/api-extractor';

declare module '@microsoft/api-extractor' {
  export interface IConfigApiReport {
    pluginProp?: boolean;
  }
}

/**
 * @public
 */
export function bar(typeByNpmTypeAndExtended: IConfigApiReport) {
  console.log(typeByNpmTypeAndExtended)
}