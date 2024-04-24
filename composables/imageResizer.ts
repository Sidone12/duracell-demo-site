export function resizeImg(fileData: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.onload = function () {
            // Розміри зображення
            const max_size = 500 // Загальний максимальний розмір (ви можете витягнути його з конфігурації сайту)

            // Оптимізуємо розмір зображення
            let width = image.width
            let height = image.height

            if (width > height) {
                if (width > max_size) {
                    height *= max_size / width
                    width = max_size
                }
            } else {
                if (height > max_size) {
                    width *= max_size / height
                    height = max_size
                }
            }

            // Створюємо canvas для малювання
            const canvas = document.createElement('canvas')
            canvas.width = width
            canvas.height = height

            // Рендеримо зображення на canvas
            const ctx = canvas.getContext('2d')
            ctx.drawImage(image, 0, 0, width, height)

            // Отримуємо URL-адресу зображення з canvas
            const dataUrl = canvas.toDataURL('image/jpeg')

            resolve(dataUrl)
        }
        image.src = fileData
        image.onerror = reject
    })
}
