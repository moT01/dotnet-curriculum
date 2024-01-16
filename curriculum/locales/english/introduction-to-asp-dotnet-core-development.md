# Introduction to ASP.NET Core Development

## 1

### --description--

`cd` into the `learn-dotnet` folder.

### --tests--

You should use the change directory (`cd`) command in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^\s*cd/);
```

You should be in the `learn-dotnet` folder in your terminal

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-dotnet');
```

## 2

### --description--

dotnet --version

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 3

### --description--

dotnet --help

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 4

### --description--

dotnet new list

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 5

### --description--

dotnet new web --output my-first-app

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 6

### --description--

cd my-first-app

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 7

### --description--

open program.cs dotnet run

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 8

### --description--

open browser, change endpoint to /api/hello

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 9

### --description--

dotnet run, go to /api/hello

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 10

### --description--

create pages folder

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 11

### --description--

create index.cshtml

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 12

### --description--

add @page

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 13

### --description--

add @model IndexModel

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 14

### --description--

add @{ ViewData[“Title”] = “Home; }

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 15

### --description--

add <p>This is the @ViewData[“Title”] page.</p>

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 16

### --description--

create Index.cshtml.cs file

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 17

### --description--

add Microsoft.AspNetCore.Mvc.RazorPages;

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 18

### --description--

add public class IndexModel : PageModel {}

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 19

### --description--

in Program.cs add builder.Services.AddRazorPages();

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 20

### --description--

add app.MapRazorPages();

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 21

### --description--

dotnet run

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 22

### --description--

create About.cshtml

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 23

### --description--

add @page

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 24

### --description--

add @model

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 25

### --description--

add ${  ViewData["Title"] = "About"; }

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 26

### --description--

add< p>This is the @ViewData["Title"] page.</p>

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 27

### --description--

create About.cshtml.cs

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 28

### --description--

add using Microsoft.AspNetCore.Mvc.RazorPages;

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 29

### --description--

public class AboutModel : PageModel {}

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 30

### --description--

close terminal, run botnet run, visit /about

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 31

### --description--

create Shared folder

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 32

### --description--

create _Layout.cshtml

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 33

### --description--

 add basic template

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 34

### --description--

add title

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 35

### --description--

add main + render and Welcome

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 36

### --description--

add layout in index file

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 37

### --description--

add layout in about file

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## 38

### --description--

run dotnet run

### --tests--

Failing test

```js
await new Promise(res => setTimeout(res, 1000));
assert.fail()
```

## --fcc-end--
