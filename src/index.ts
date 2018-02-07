import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab-cell-editor extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab-cell-editor',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension jupyterlab-cell-editor is activated!');
  }
};

export default extension;
