# jupyterlab-cell-editor

Edit the content of the cell with the Jupyterlab text editor or with a terminal-based text editor (like Vim)


## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install jupyterlab-cell-editor
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
npm run build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

