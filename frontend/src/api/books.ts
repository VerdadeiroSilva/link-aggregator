import API from "../enums/api";
import ENDPOINTS from "../enums/endpoints";

export interface Book {
    _id: string,
    title: string;
    url: string;
    price: string;
    category: string;
    seller: string;
}

export async function fetchBookCover(): Promise<any> {

}

export async function fetchSellerLogo(): Promise<any> {

}

export async function fetchNewBooks(): Promise<Book[]> {
    try {
        // TODO - isolar url da api em variável
        const response = await fetch(`${API.URL}:${API.PORT}/${ENDPOINTS.ALL_LINKS}`);
        if (!response.ok) {
            throw new Error('Erro ao buscar os livros');
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('[fetchBooks]', err);
        return [];
    }
}

export async function fetchUsedBooks(): Promise<Book[]> {
    try {
        // TODO - isolar url da api em variável
        const response = await fetch(`${API.URL}:${API.PORT}/${ENDPOINTS.ALL_LINKS}`);
        if (!response.ok) {
            throw new Error('Erro ao buscar os livros');
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('[fetchBooks]', err);
        return [];
    }
}