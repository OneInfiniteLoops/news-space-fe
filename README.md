# NewsSpace App

The NewsSpace App is a front-end application for users to interact with the News API via a user-friendly UI.

## Link to deployed version

---

https://newsspace-project.netlify.app

## Features

---

The NewsSpace App offers users the following features and functionality:

### Articles

- Home page displays article cards containing the title, topic, author, date, number of comments, and number of likes.
- When article cards are selected, users will be redirected to the article page, displaying the article body, and a list of comments
- Users can sort articles based on the following criteria:
  - date
  - comment count
  - votes
  - order (ascending or descending)

### Comments

- Comments are displayed in the related article's page.
- Users are able to post comments in a text box below the article.
- Users are able to delete comments associated with their own username (a bin icon will be displayed)

### Likes

- Likes are displayed for each article and comment.
- Users are able to increase or decrease the like count by 1.

## Link to repository

---

https://github.com/OneInfiniteLoops/newsspace.git

## Installation Instructions

---

Minimum version of Node supported - v17.8.0

Clone the repository by inputting the following in your command line terminal

```
git clone https://github.com/OneInfiniteLoops/newsspace.git
```

Change to the repository directory.

```
cd newsspace
```

Install all package dependencies.

```
npm install
```

Launch the app in your browser.

```
npm start
```

## Link to back-end API repository

---

https://github.com/OneInfiniteLoops/News-API.git
