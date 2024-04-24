import { sheets, SHEET_ID } from '../../composables/googleApi'

export default defineEventHandler(async (event: any) => {
    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SHEET_ID,
            range: 'Data!A:A', 
        })
        const values = response.data.values

        const body = await readBody(event)
        console.log(body, 'body')
        console.log(Object.values(body), 'Object.values(body)')
        // console.log(values, 'values')

        const validationResult = (values: any[][] | undefined) => {
            return values?.some((el) => el[0] === body.firstName)
        }

        let result = validationResult(values)
        console.log(result, 'result')
        if (result) {
            // Якщо валідація не пройшла, повертаємо помилку
            console.log('Validation failed')
            return {
                status: 500,
                body: { error: 'Internal server error' },
            }
        } else {
            const rows = Object.values(body)

            await sheets.spreadsheets.values.append({
                spreadsheetId: SHEET_ID,
                range: 'Data!A:C',
                insertDataOption: 'INSERT_ROWS',
                valueInputOption: 'RAW',
                requestBody: {
                    values: [rows],
                },
            })
            console.log('Form submitted successfully')
            return {
                status: 200,
                body: { message: 'Form submitted successfully' },
            }
        }
    } catch (error) {
        console.error(error)
        return {
            status: 500,
            body: { error: 'Internal server error' },
        }
    }
})
