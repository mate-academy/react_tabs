1. [CODE KNOWLEDGE] - When you rendering a list, don't forget to add `key` prop

BAD EXAMPLE:
```jsx
<div>
  {cats.map(cat => <Cat cat={cat} />)}
</div>
```

GOOD EXAMPLE:
```jsx
<div>
  {cats.map(cat => <Cat key={cat.id} cat={cat} />)}
</div>
```

2. [CODE KNOWLEDGE] - WE suggest you never compare the object with another object with strict comparison. It could produce a lot of bugs. Compare object using their unique identifier (id, title)

BAD EXAMPLE:
```tsx
interface Cat {
  id: number;
  name: string;
}

const [selectedCat, setSelectedCat] = useState<Cat>(cats[0]);

const handleClick = (cat: Cat) => {
  if (cat === selectedCat) {
    forceUpdate();
  }
}
```

GOOD EXAMPLE:
```tsx
interface Cat {
  id: number;
  name: string;
}

const [selectedCat, setSelectedCat] = useState<Cat>(cats[0]);

const handleClick = (cat: Cat) => {
  if (cat.id === selectedCat.id) {
    forceUpdate();
  }
}
```
