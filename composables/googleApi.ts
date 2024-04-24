import { google } from 'googleapis'

const runtimeConfig = useRuntimeConfig()

const SHEET_ID = '1yJzlyutJkcFdAhGM2aEjXQSrGiZS3dwj3iOkA8v-_zc'

const client = new google.auth.JWT(
    runtimeConfig.public.CLIENT_EMAIL,
    null,
    runtimeConfig.public.PRIVATE_KEY,
    ['https://www.googleapis.com/auth/spreadsheets']
)

export const sheets = google.sheets({ version: 'v4', auth: client })
export { SHEET_ID }
