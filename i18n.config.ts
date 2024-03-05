export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            dateTimeOriginal: '{month}-{date} {year}　{hour}:{minute}:{second}',
            download: 'Download',
            userId: 'User ID',
            displayName: 'Display Name',
            changePassword: 'Change Password',
            personalSettings: 'Personal Settings',
            apply: 'Apply',
            profile: 'Profile',
            deviceSettings: 'Device Settings',
        },
        ja: {
            dateTimeOriginal: '{year}年{month}月{date}日 {hour}時{minute}分{second}秒',
            download: 'ダウンロード',
            userId: 'ユーザID',
            displayName: '表示名',
            changePassword: 'パスワードの変更',
            personalSettings: '個人設定',
            apply: '反映する',
            profile: 'プロフィール',
            deviceSettings: '端末設定',
        },
    }
}))
