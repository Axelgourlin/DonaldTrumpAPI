io.tronalddump.api
Api & web archive for the dumbest things Donald Trump has ever said.

tag
Find a tag by its value
GET /tag/{value}
Accept: object
in header
(no description)

value: object
in path
(no description)

200 OK
default response

tag
Retrieve all tags
GET /tag
Accept: object
in header
(no description)

200 OK
default response

quote-source
Service to retrieve and create quotes sources

quote-source
Find an quotes by its id
GET /quote-source/{id}
Accept: object
in header
(no description)

id: object
in path
(no description)

200 OK
default response

author
Service to retrieve and create authors

author
Find an author by its id
GET /author/{id}
Accept: object
in header
(no description)

id: object
in path
(no description)

200 OK
default response

quote
Service to retrieve and create quotes

quote
Search quotes by query or tags
GET /search/quote
Accept: object
in header
(no description)

query: object
in query
(no description)

tag: object
in query
(no description)

page: object
in query
(no description)

200 OK
default response

quote
Find a quote by its id
GET /quote/{id}
Accept: object
in header
(no description)

id: object
in path
(no description)

200 OK
default response

quote
Retrieve a random quote meme
GET /random/meme
Accept: object
in header
(no description)

200 OK
default response

quote
Retrieve a random quote
GET /random/quote
Accept: object
in header
(no description)

200 OK
default response

Documentation by Spectacle