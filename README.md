# :earth_asia: Welcome to Github API Custom Page

### :seedling: Action

> We are creating a website..  :sleepy:
>
> coming soon~~

### :hourglass_flowing_sand: Get Started

##### development

```
$ npm start
```

- if you want to make Local Environment, you have to make `.env.development.local`. complete! play code!

##### production

> build 시 export 추가

```
$ npm run build
$ npm start
```

### Deployment

```
https://han-py.com
```

### :bookmark_tabs: React/JSX Style Convension

##### Basic Rules

- Only include on React component per file

- Each component has one CSS module related to the component. `.module.css`

- Use Hook. so prefer normal functions/arrow functions over classes

##### Naming

- **Extensions** : Use `.jsx` extension for React components

- **Filename**: Use snake_case for filenames. E.g., `reservation_card.jsx`

- **Component Naming**: Use PascalCase. E.g., `ReservationCard`

- **Props Naming**: Avoid using DOM component prop names for different purposes

  ```jsx
  // bad
  <MyComponent style="fancy" />

  // bad
  <MyComponent className="fancy" />

  // good
  <MyComponent variant="fancy" />
  ```

## pj tech

- create-next-app
- Typescript
- chakra-ui
- aws(s3, cloudfront, route 53)

## 개인 목표

view와 Business Logic의 분리에 대한 고민.

## 구현

- aws(s3, cloudfront, route 53) : https://han-py.com
- github action CI/CD
