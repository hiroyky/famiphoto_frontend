import type {MessageContext} from "@intlify/core-base";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            dateTimeOriginalTimeStampString: '{month}-{date} {year}　{hour}:{minute}:{second}',
            download: 'Download',
            userId: 'User ID',
            displayName: 'Display Name',
            changePassword: 'Change Password',
            personalSettings: 'Personal Settings',
            apply: 'Apply',
            profile: 'Profile',
            deviceSettings: 'Device Settings',
            dateTimeOriginal: 'Date time original',
            unknown: 'Unknown',
            xYear: '{year}',
            xMonth: (ctx: MessageContext) => `${enMonthShortName(ctx.named('month'))}`,
            xMonthDate: (ctx: MessageContext) => `${enMonthShortName(ctx.named('month'))} ${ctx.named('date')}`,
            xDate: '{date}',
            uploadPhotos: 'Upload Photos',
        },
        ja: {
            dateTimeOriginalTimeStampString: '{year}年{month}月{date}日 {hour}時{minute}分{second}秒',
            download: 'ダウンロード',
            userId: 'ユーザID',
            displayName: '表示名',
            changePassword: 'パスワードの変更',
            personalSettings: '個人設定',
            apply: '反映する',
            profile: 'プロフィール',
            deviceSettings: '端末設定',
            dateTimeOriginal: '撮影日時',
            unknown: '不明',
            xYear: '{year}年',
            xMonth: '{month}月',
            xMonthDate: '{month}月{date}日',
            xDate: '{date}日',
            uploadPhotos: '写真をアップロード',
        },
    }
}))

function enMonthShortName(month: any): string {
    const dict: {[m: number]: string} = {
        1: 'Jan',
        2: 'Feb',
        3: 'Mar',
        4: 'Apr',
        5: 'May',
        6: 'Jun',
        7: 'Jul',
        8: 'Aug',
        9: 'Sep',
        10: 'Oct',
        11: 'Nov',
        12: 'Dec',
    }
    return dict[month]
}