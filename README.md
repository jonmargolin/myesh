# Esh Static Site

### Installation

-   the project use yarn for dependencies management but you can also use pnpm or yarn.
-   run yarn install for installing dependencies
-   run yarn run dev for start the dev server.

### Assets management

-   all the assets are available under the src/assets folder.
-   the md files store all the contents of selected article.
-   to add a new article the blog json file need to be updated also in following format.

```json
    {
          "blog":{
           "date": "",
           "author":"Team esh",
           "title":"The Equal Bank Board of Directors",
           "summary":"summary description",
           "blogName":"the name of the md file"
          },
          "lang": "the language of the md",
          "blogId":"the article id needed to be  the same  for all languages",
          "uuid":"unique id "
      },
```

## Store Management

### Server side store

-   the project use react query for server side store management

### Client side store management

-   the project use signals for client side store management

## Styling

## components

-   the project use Chakra ui library

## CSS

-   the project use Tailwind ui library.\
    Modify the theme can be done in the tailwind config file.

## Translations

-   the project use react-i18next library for translations.\
     Modify the translation file can be done in the i18n.ts file
