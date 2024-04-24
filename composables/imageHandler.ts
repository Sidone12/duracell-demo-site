import { readFile } from './fileReader'
import { resizeImg } from './imageResizer'

export async function readAndResizeImg(
    file: File
): Promise<{ id: number; title: string; url: string }> {
    const fileData = await readFile(file)
    const resizedImg = await resizeImg(fileData)

    const photo = {
        id: Date.now(),
        title: file.name,
        url: resizedImg,
    }

    return photo
}
