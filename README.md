# Figure React Component
React component that provides preloaded space for image

# Usage
## Without closing tag
### Code
```typescript jsx
<Figure src="<image url>" arWidth={5} arHeight={3}/>
```
### Result
![](./media/loading.gif)

## With closing tag
### Code
```typescript jsx
<Figure src="<image url>" arWidth={5} arHeight={3}>
    Автор: <a href="https://www.pexels.com/@simonmigaj">Simon Migaj</a>
<Figure>
```
### Result
![](./media/withCaption.png)

## In case when image cannot be loaded you will see this
![](./media/error.gif)

#Task source
[Task source link](https://docs.google.com/document/d/1dhMPnkwXXc2VTGl74GK5FmzwPBhPOxbUxWdwZpyqCXA/edit#)
