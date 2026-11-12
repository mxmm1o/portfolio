type Props = {
    /** false のときは別ページ用。各項目はトップの該当セクションへ戻るリンクになる */
    onHome?: boolean;
    /** 別ページで強調する項目 */
    current?: string;
};
export declare function FloatingNav({ onHome, current }: Props): import("react/jsx-runtime").JSX.Element;
export {};
