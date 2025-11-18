declare module '*.module.scss' {
    interface IClaccName{
        [className:string]:string
    }
    const classNames: IClaccName;
    export = classNames;
}