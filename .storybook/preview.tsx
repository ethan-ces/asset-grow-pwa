import '@mantine/core/styles.css';
import type { Preview } from '@storybook/react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../src/theme';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false,
      storySort: (a: any, b: any) => a.title.localeCompare(b.title, undefined, { numeric: true }),
    },
    backgrounds: { disable: true },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Mantine color scheme',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },
  decorators: [
    (renderStory, context) => {
      const scheme = (context.globals.theme || 'light') as 'light' | 'dark';
      return (
        <MantineProvider theme={theme} forceColorScheme={scheme}>
          <ColorSchemeScript />
          {renderStory()}
        </MantineProvider>
      );
    },
  ],
};

export default preview;
