export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            dateTimeOriginal: '{month}-{date} {year}　{hour}:{minute}:{second}',
            download: 'Download',
        },
        ja: {
            dateTimeOriginal: '{year}年{month}月{date}日 {hour}時{minute}分{second}秒',
            download: 'ダウンロード'
        },
    }
}))
