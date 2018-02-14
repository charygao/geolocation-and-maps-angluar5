export interface SideMenuSettings {
    accordionMode?: boolean;
    arrowIcon?: string;

    itemHeight?: {
        ios?: number,
        md?: number,
        wp?: number
    };

    showSelectedOption?: boolean;
    selectedOptionClass?: string;
}
