import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

export function buildLoaders(options:BuildOptions): ModuleOptions['rules'] {
        const isDev = options.mode ==='development';
    const isProd = options.mode ==='production';

const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
}

const svgrLoader = {
    test: /\.svg$/,
    use: [{loader: '@svgr/webpack', options: {icon:true,
        svgoConfig:{
           // вместо плагина svgoConfig на цвет svg можно fill={"red"} stroke={"red"}
            plugins:[
                {
                    name: 'convertColors',
                    params: {
                        currentColor:true,
                    }
                }
            ]
        }
    }}],
}

const cssLoaderWithModules = {
    loader: "css-loader",
    options:{
        modules: { 
             localIdentName: isDev? '[path]_[name]__[local]':'[hash:base64:8]'
            }
    },
}

const scssLoader =  {
        test: /\.s[ac]ss$/i,
        use: [ isDev ? "style-loader":MiniCssExtractPlugin.loader,
             cssLoaderWithModules,
             "sass-loader"
            ],
    };
const tsLoader= {
    //ts-loader умеет работать с JSX
    //без TS нужно использовать Babel-loader
        test: /\.tsx?$/,
        use: [{loader:'ts-loader',
            options:{
                //не проверять типы вовремя сборки при dev mode тк работает плагин ForkTsCheckerWebpack
                transpileOnly: isDev,
            }
        }],
        exclude: /node_modules/,
    };

    return [
        assetLoader,
        svgrLoader,
        scssLoader, tsLoader
    ]
}