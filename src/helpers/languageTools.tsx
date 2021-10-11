type Message = Record<string, string>

export function l(list: Message, lang: string): string {
    if ((lang === 'en')||(lang === 'fr')) {
        return list[lang]
    } else {
        return ''
    }
}

type MessageJSX = Record<string, JSX.Element>

export function lJSX(list: MessageJSX, lang: string): JSX.Element {
    if ((lang === 'en')||(lang === 'fr')) {
        return list[lang]
    } else {
        return <noscript/>
    }
}
