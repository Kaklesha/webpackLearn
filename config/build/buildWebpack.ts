import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';

export function buildWebpack(options:BuildOptions): webpack.Configuration{

    const {mode,port,paths} = options;
    const isDev = mode ==='development';
return {
    mode: mode?? "development",
    entry: paths.entry
    
    //path.resolve(__dirname,'src', 'index.tsx')
    ,
    output: {
        path: paths.output 
       // path.resolve(__dirname,'build')
        ,
            filename: '[name].[contenthash].js',
            clean:true
        
    },
    plugins: buildPlugins(options),
    module:{
        rules: buildLoaders(options),
    },
    resolve: buildResolvers(options), 
    devtool: isDev &&'inline-source-map',
    devServer: isDev ?buildDevServer(options):undefined,

 
    
}
};