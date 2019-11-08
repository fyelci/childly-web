import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ChatsList from './ChatsList';

storiesOf('ChatsListScreen', module)
  .add('First Story', () => <ChatsList />)
  .add('Second story', () => <ChatsList />);
