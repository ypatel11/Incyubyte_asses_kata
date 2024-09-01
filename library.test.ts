import { Book } from "./src/Book";
import { User } from "./src/User";
import { Library } from "./src/Library";

describe('Library System', () => {
    let library: Library;
    let book1: Book;
    let book2: Book;
    let user1: User;
    let user2: User;

    beforeEach(() => {
        library = new Library();
        book1 = new Book('Book 1', 'Author 1', 'ISBN123', 2023, 2);
        book2 = new Book('Book 2', 'Author 2', 'ISBN456', 2024, 1);
        user1 = new User('User 1', 'user1@example.com');
        user2 = new User('User 2', 'user2@example.com');

        library.addUser(user1);
        library.addUser(user2);
        library.addBook(book1);
        library.addBook(book2);
    });

    it('should add users and books correctly', () => {
        expect(library.getAvailableBooks().length).toBe(2);
        expect(library.getUserBorrowedBooks(user1.email).length).toBe(0);
    });

    it('should allow users to borrow and return books', () => {
        library.borrowBook('ISBN123', user1.email);
        expect(user1.borrowedBooks.length).toBe(1);
        expect(book1.quantity).toBe(1);
        expect(book1.available).toBe(true);

        library.returnBook('ISBN123', user1.email);
        expect(user1.borrowedBooks.length).toBe(0);
        expect(book1.quantity).toBe(2);
        expect(book1.available).toBe(true);
    });

    it('should handle invalid user or book data', () => {
        expect(() => library.addUser(null as any)).toThrow('Invalid user object: Must be an instance of User class.');
        expect(() => library.addBook(null as any)).toThrow('Invalid book object: Must be an instance of Book class.');
        expect(() => library.borrowBook('invalidISBN', user1.email)).toThrow('Book not found.');
        expect(() => library.returnBook('invalidISBN', user1.email)).toThrow('Book not found.');
    });

    it('should handle borrowing and returning errors', () => {
        expect(() => library.borrowBook('ISBN123', 'invalidUser@example.com')).toThrow('User not found.');
        expect(() => library.returnBook('ISBN123', 'invalidUser@example.com')).toThrow('User not found.');
        
        library.borrowBook('ISBN23', user1.email);
        expect(() => library.borrowBook('ISBN123', user1.email)).toThrow('Book already borrowed by this user.');
        
        library.borrowBook('ISBN456', user1.email);
        expect(() => library.borrowBook('ISBN456', user2.email)).toThrow('Book is not available for borrowing.');
    });

    it('should return correct available books', () => {
        expect(library.getAvailableBooks().length).toBe(2);

        library.borrowBook('ISBN123', user1.email);
        expect(library.getAvailableBooks().length).toBe(2);

        library.borrowBook('ISBN456', user2.email);
        expect(library.getAvailableBooks().length).toBe(1);
    });

    it('should return correct borrowed books by user', () => {
        library.borrowBook('ISBN123', user1.email);
        library.borrowBook('ISBN456', user1.email);

        const borrowedBooks = library.getUserBorrowedBooks(user1.email);
        expect(borrowedBooks.length).toBe(2);
        expect(borrowedBooks[0].isbn).toBe('ISBN123');
        expect(borrowedBooks[1].isbn).toBe('ISBN456');
    });
});
