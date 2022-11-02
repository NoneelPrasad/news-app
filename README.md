# NextJS News App

Locate articles and breaking news from news sources and blogs across the web with https://newsapi.org/

## Tech Stack

React.js with NextJS (12.2.3) - Tailwind CSS - Typescript - react-query

## API Reference

#### Get all items

```http
  GET https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=xxxxxxxxxxxxxxxxxxxx
```

| Parameter | Type     | Description                                          |
| :-------- | :------- | :--------------------------------------------------- |
| `apiKey`  | `string` | **Required**. Your API key from https://newsapi.org/ |
