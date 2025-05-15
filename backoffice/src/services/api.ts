export async function getBooksToTreat() {
    const res = await fetch('/api/books?status=precisa tratar')
    return await res.json()
}

export async function updateBook(book: any) {
    await fetch(`/api/books/${book._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    })
}

export async function uploadCover(id: any, file: any) {
    const buffer = await file.arrayBuffer()
    await fetch(`/api/books/${id}/cover.webp`, {
        method: 'PUT',
        headers: { 'Content-Type': file.type },
        body: buffer
    })
}
