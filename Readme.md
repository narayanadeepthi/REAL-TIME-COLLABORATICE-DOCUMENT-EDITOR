# Collab Document Editor Backend

This is the backend part of the Collab Document Editor project. It is built using Node.js and Express, and it connects to a MongoDB database to manage document storage and retrieval.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **app.js**: Entry point of the application, initializes the Express app and connects to the database.
  - **controllers/**: Contains the logic for handling document-related operations.
    - **documentController.js**: Manages the creation, retrieval, updating, and deletion of documents.
  - **models/**: Defines the data structure for documents.
    - **document.js**: Mongoose model for documents, including fields like title, content, and lastModified.
  - **routes/**: Defines the API endpoints for document operations.
    - **documentRoutes.js**: Sets up the routes and links them to the controller methods.
  - **utils/**: Contains utility functions.
    - **db.js**: Function to connect to the MongoDB database.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd collab-doc-editor/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the backend server, run:
```
node src/app.js
```

The server will start and listen for requests on the specified port.

## API Endpoints

- **POST /documents**: Create a new document.
- **GET /documents/:id**: Retrieve a document by ID.
- **PUT /documents/:id**: Update a document by ID.
- **DELETE /documents/:id**: Delete a document by ID.

## Database

This application uses MongoDB for data storage. Ensure that your MongoDB instance is running and properly configured in the `db.js` file.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.
