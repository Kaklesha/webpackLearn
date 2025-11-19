declare module '*.module.scss' {
    interface IClaccName{
        [className:string]:string
    }
    const classNames: IClaccName;
    export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg"{
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __PLATFORM__: 'mobile' | 'desktop';
declare const __ENV_MODE__: 'production' | 'development';