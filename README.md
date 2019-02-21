# JS Framework Examples

Different implementations of a simple Sensor application.

> NOTE: These examples are from end of 2016. I do not know how these implementations will match with today's recommendations.

### react-only

- Only React
- Smart components

### react-only-container

- Fork of react-only
- Container components
- Stateless function components
- Switched state sensors array to object with keys
- Use immutability-helper

### react-redux

- Fork of react-only-container
- Redux

##### Debug with VS Code

Add to launch.json

```
{
    "type": "chrome",
    "request": "launch",
    "name": "Launch Chrome against localhost",
    "url": "http://localhost:3000",
    "webRoot": "${workspaceFolder}/src",
    "userDataDir": "${workspaceRoot}/.vscode/chrome",
    "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
    }
}
``
```
