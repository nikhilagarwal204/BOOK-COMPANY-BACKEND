Before starting with the project let's discuss the requirements, Here since we are building an API for a book distribution company. 

We need to have the following details. 

- Books details.
- Author details.
- Publication details.

## Book Details

For the books, we'll have the following properties. 

- ISBN → string
- title → string
- authors → array
- language → string
- pubDate → string
- numOfPage → number
- category → array
- publication → number

Here `ISBN` will be unique because every book has its own `ISBN` number. `Authors` will be array because one book can have multiple authors. `Publication` will be a number, here we are assuming that one book can be published by only one publication. And rest of the properties are self-explanatory.

## Author Details

For the author, we'll have the following properties. 

- id → number
- name → string
- books → array

Here `id` will be unique because every author will have their own id. `books` will be array because one author might have written multiple books. And rest of the properties are self-explanatory.

## Publications Details

For the publications, we'll have the following properties. 

- id → number
- name → string
- books → array

Here `id` will be unique because every publication will have its own id. `books` will be array because one publication can publish multiple books. And rest of the properties are self-explanatory.