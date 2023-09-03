import { ReactElement, JSXElementConstructor } from "react"

export type EsMenuProps ={
    Icon: ReactElement<any, string | JSXElementConstructor<any>> | React.FunctionComponent<React.SVGProps<SVGSVGElement>>| undefined 
    defaultValue: string
    options: EsMenuOptionsProps[]

}
export  type EsMenuOptionsProps ={
    value: string,
     text: string
     direction?:"ltr"| "rtl"
    onClick : (...arg: any) => void 
}
export enum TranslationsLanguage {
"en" = "English",
"he" = "עברית",
}
export  enum RouterOptions {
    "home" ="Home",
    "blog" ="Blog",
}
export  type BackButtonProps ={
    onclick: (arg: any) => void
}