# JS Framework Examples

Different implementations of a simple Sensor application.

### react-only

> NOTE: Not updated since 2016

- Only React
- Smart components

### react-only-container

- Fork of react-only
- Container components
- Stateless function components
- Switched state sensors array to object with keys
- Use immutability-helper

### react-redux

> NOTE: Not updated since 2016

- Fork of react-only-container
- Redux

### react-hooks

TODO

### react-mobx

TODO

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
