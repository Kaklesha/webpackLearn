import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/types';


export function buildDevServer(options:BuildOptions):DevServerConfiguration{
  return  {
        port: options.port ?? 3000,
        open: true,
        //history работает только для devserv, если через nginx, надо проксировать на index.html
        //см про деплой frontend приложения
        historyApiFallback: true,
    }
}