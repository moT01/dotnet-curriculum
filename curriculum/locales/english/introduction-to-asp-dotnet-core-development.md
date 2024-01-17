# .NET - Introduction to ASP.NET Core Development

## 1

### --description--

Welcome to the ASP.NET course. Start by using `cd` in the terminal to change into the `introduction-to-asp-dotnet-core-development` folder.

### --tests--

You should use the change directory (`cd`) command in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^\s*cd/);
```

You should be in the `introduction-to-asp-dotnet-core-development` folder in your terminal

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'introduction-to-asp-dotnet-core-development');
```

## 2

### --description--

The `dotnet` CLI tools are already installed on your machine. Verify this by running `dotnet --version` in the terminal.

### --tests--

You should run `dotnet --version` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^\s*dotnet --version/);
```

## 3

### --description--

These tools will help you with .NET development. View what the command can do with `dotnet --help`.

### --tests--

You should run `dotnet --help` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^\s*dotnet --help/);
```

## 4

### --description--

One of the commands listed is `new`. It helps you to start a new project. Run `dotnet new list` to see the available project templates.

### --tests--

You should run `dotnet new list` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^\s*dotnet new --help/);
```

## 5

### --description--

It shows the name of the template and some other info about what the template starts you with. Run `dotnet new web --output my-first-app` to create a project from the `web` template.

### --tests--

You should run `dotnet new web --output my-first-app` in the terminal from the `introduction-to-asp-dotnet-core-development` folder

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^\s*dotnet new web (--output|-o) my-first-app/);
```

You should have a `my-first-app` folder in the `introduction-to-asp-dotnet-core-development` folder as a result of creating the project

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory('introduction-to-asp-dotnet-core-development');
assert.include(folder, 'my-first-app');
```

## 6

### --description--

Your project was created in the `my-first-app` folder. Before you take a look at it, run `node update-settings.js` to update some config. This is only necessary for this course.

### --tests--

You should run `node update-settings.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^node update-settings\.js/);
```

## 7

### --description--

Your project was created in the `my-first-app` folder. Use `cd` to change into that folder.

### --tests--

You should use the change directory (`cd`) command in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^\s*cd/);
```

You should be in the `my-first-app` folder in your terminal

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'my-first-app');
```

## 8

### --description--

In the file explorer, expand the `my-first-app` folder to view the files that were created from the template. Find and open the `Program.cs` file to see the server code, then run `dotnet run` in the termial to run the program.

### --tests--

You should run `dotnet run` in the terminal from the `my-first-app` folder

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^\s*dotnet run/);
```

## 9

### --description--

Open the browser to the port to see your app running. When you are done, change the endpoint in `Program.cs` to `/api/hello` instead of `/`.

### --tests--

Your endpoint should point to `/api/hello`.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Program.cs');
assert.match(fileContents, /api\/hello/);
```

## 10

### --description--

If your program is still running in the terminal, close it with `ctrl+c` and run `dotnet run` again to run the new code. After it's running, go to your app in the browser and add `/api/hello` to the domain to see the endpoint.

### --tests--

You should run `dotnet run` in the terminal from the `my-first-app` folder

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^\s*dotnet run/);
```

## 11

### --description--

In your `my-first-app` folder, create a `Pages` folder. This will be for some web pages in your project.

### --tests--

You should have a `Pages` folder in the `my-first-app` folder

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory('introduction-to-asp-dotnet-core-development/my-first-app');
assert.include(folder, 'Pages');
```

## 12

### --description--

Create an `Index.cshtml` file in your `Pages` folder.

### --tests--

You should have an `Index.cshtml` folder in the `Pages` folder

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory('introduction-to-asp-dotnet-core-development/my-first-app/Pages');
assert.include(folder, 'Index.cshtml');
```

## 13

### --description--

At the top of your new file, add `@page`.

### --tests--

You should have `@page` at the top of your `Index.cshtml` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Pages/Index.cshtml');
assert.match(fileContents, /@page/);
```

## 14

### --description--

Below that, add `@model IndexModel`.

### --tests--

You should have `@model IndexModel` at the bottom of your `Index.cshtml` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Pages/Index.cshtml');
assert.match(fileContents, /@model IndexModel/);
```

## 15

### --description--

Add the code below at the bottom of the file:

```cs
@{
  ViewData["Title"] = "Home";
}
```

### --tests--

You should have the suggested code at the bottom of your `Index.cshtml` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Pages/Index.cshtml');
assert.match(fileContents, /@{\s*ViewData["Title"] = "Home";\s*}/);
```

## 16

### --description--

Finally, add this at the end of the file: `<p>This is the @ViewData["Title"] page.</p>`.

### --tests--

You should have the suggested code at the bottom of your `Index.cshtml` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Pages/Index.cshtml');
assert.match(fileContents, /<p>This is the @ViewData["Title"] page.<\/p>/);
```

## 17

### --description--

Create an `Index.cshtml.cs` file in the `Pages` folder.

### --tests--

You should have an `Index.cshtml.cs` folder in the `Pages` folder

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory('introduction-to-asp-dotnet-core-development/my-first-app/Pages');
assert.include(folder, 'Index.cshtml.cs');
```

## 18

### --description--

At the top of your new file, add `using Microsoft.AspNetCore.Mvc.RazorPages;`

### --tests--

You should have ``using Microsoft.AspNetCore.Mvc.RazorPages;` in your `Index.cshtml.cs` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Pages/Index.cshtml.cs');
assert.match(fileContents, /using Microsoft\.AspNetCore\.Mvc\.RazorPages;/);
```

## 19

### --description--

Below that, add `public class IndexModel : PageModel {}`.

### --tests--

You should have `public class IndexModel : PageModel {}` at the bottom of your `Index.cshtml.cs` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Pages/Index.cshtml.cs');
assert.match(fileContents, /public class IndexModel : PageModel {}/);
```

## 20

### --description--

Back in the `Program.cs` file, add `builder.Services.AddRazorPages();`

### --tests--

You should have `builder.Services.AddRazorPages();` in your `Program.cs` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Program.cs');
assert.match(fileContents, /builder.Services.AddRazorPages();/);
```

## 21

### --description--

Also add `app.MapRazorPages();` so your app creates the pages.

### --tests--

You should have `app.MapRazorPages();` in your `Program.cs` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Program.cs');
assert.match(fileContents, /app.MapRazorPages();/);
```

## 22

### --description--

If your app is still running in the terminal, close it and run it again to get the new changes. Open the app in the browser to see the home page.

### --tests--

You should run `dotnet run` in the terminal from the `my-first-app` folder

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^\s*dotnet run/);
```

## 23

### --description--

In the `Pages` folder, create an `About.cshtml` file to add another page to your app.

### --tests--

You should have an `About.cshtml` folder in the `Pages` folder

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory('introduction-to-asp-dotnet-core-development/my-first-app/Pages');
assert.include(folder, 'About.cshtml');
```

## 24

### --description--

In the new file, add `@page`.

### --tests--

You should have `@page` at the top of your `About.cshtml` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Pages/About.cshtml');
assert.match(fileContents, /@page/);
```

## 25

### --description--

Below that, add `@model AboutModel`.

### --tests--

You should have `@model AboutModel` at the bottom of your `About.cshtml` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Pages/About.cshtml');
assert.match(fileContents, /@model AboutModel/);
```

## 26

### --description--

Below that, add:

```cs
${
  ViewData["Title"] = "About";
}
```

### --tests--

You should have the suggested code at the bottom of your `About.cshtml` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Pages/About.cshtml');
assert.match(fileContents, /@{\s*ViewData["Title"] = "About";\s*}/);
```

## 27

### --description--

Finally, add `<p>This is the @ViewData["Title"] page.</p>` at the bottom.

### --tests--

You should have the suggested code at the bottom of your `About.cshtml` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Pages/About.cshtml');
assert.match(fileContents, /<p>This is the @ViewData["Title"] page.<\/p>/);
```

## 28

### --description--

Create an `About.cshtml.cs` file in the `Pages` folder.

### --tests--

You should have an `About.cshtml.cs` folder in the `Pages` folder

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory('introduction-to-asp-dotnet-core-development/my-first-app/Pages');
assert.include(folder, 'About.cshtml.cs');
```

## 29

### --description--

Add `using Microsoft.AspNetCore.Mvc.RazorPages;` at the top of the new file.

### --tests--

You should have ``using Microsoft.AspNetCore.Mvc.RazorPages;` in your `About.cshtml.cs` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Pages/About.cshtml.cs');
assert.match(fileContents, /using Microsoft\.AspNetCore\.Mvc\.RazorPages;/);
```

## 30

### --description--

Next, add `public class AboutModel : PageModel {}` at the bottom.

### --tests--

You should have `public class AboutModel : PageModel {}` at the bottom of your `About.cshtml.cs` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Pages/About.cshtml.cs');
assert.match(fileContents, /public class AboutModel : PageModel {}/);
```

## 31

### --description--

Close your app if it's running and run it again. Open the browser to your app and visit the `/about` page.

### --tests--

You should run `dotnet run` in the terminal from the `my-first-app` folder

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^\s*dotnet run/);
```

## 32

### --description--

In the `Pages` folder, create a new `Shared` folder.

### --tests--

You should have an `Shared` folder in the `Pages` folder

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory('introduction-to-asp-dotnet-core-development/my-first-app/Pages');
assert.include(folder, 'Shared');
```

## 33

### --description--

In the `Shared` folder, create a `_Layout.cshtml` file.

### --tests--

You should have an `_Layout.cshtml` folder in the `Shared` folder

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory('introduction-to-asp-dotnet-core-development/my-first-app/Pages/Shared');
assert.include(folder, '_Layout.cshtml');
```

## 34

### --description--

Add this HTML boilerplate to the file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>@ViewData["Title"] | My First App</title>
</head>
<body>
  <header>
    <h1>Welcome to your ASP.NET Core app!</h1>
  </header>
    
  <main>
    @RenderBody()
  </main>
</body>
</html>
```

### --tests--

You should have the suggested code in your `_Layout.cshtml` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Pages/Shared/_Layout.cshtml');
assert.match(fileContents, /<!DOCTYPE html>/);
```

## 35

### --description--

In the `Index.cshtml` file, add `Layout = "_Layout";` in the `@` code block to use the layout on the home page.

### --tests--

You should have `Layout = "_Layout";` in the `@` code block of your `Index.cshtml` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Pages/Index.cshtml');
assert.match(fileContents, /Layout = "_Layout";/);
```

## 36

### --description--

In the `About.cshtml` file, add `Layout = "_Layout";` in the `@` code block to use the layout on the about page.

### --tests--

You should have `Layout = "_Layout";` in the `@` code block of your `About.cshtml` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Pages/About.cshtml');
assert.match(fileContents, /Layout = "_Layout";/);
```

## 37

### --description--

Close your app and run it again. Then, open it in the browser to see the changes.

### --tests--

You should run `dotnet run` in the terminal from the `my-first-app` folder

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^\s*dotnet run/);
```

## --fcc-end--
