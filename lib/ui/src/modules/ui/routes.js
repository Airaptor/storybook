import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './containers/layout';
import StoriesPanel from './containers/stories_panel';
import AddonPanel from './containers/addon_panel';
import ShortcutsHelp from './containers/shortcuts_help';
import SearchBox from './containers/search_box';

export default function(injectDeps, { clientStore, provider, domNode }) {
  // generate preview
  const Preview = () => {
    const state = clientStore.getAll();
    debugger; // eslint-disable-line
    const preview = provider.renderPreview(state.selectedKind, state.selectedStory);
    return preview;
  };

  const root = (
    <div>
      <Layout
        storiesPanel={props => <StoriesPanel {...props} />}
        preview={props => <Preview {...props} />}
        addonPanel={props => <AddonPanel {...props} />}
      />
      <ShortcutsHelp />
      <SearchBox />
    </div>
  );
  ReactDOM.render(root, domNode);
}
