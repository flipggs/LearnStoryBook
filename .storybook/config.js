import React from 'react';

import { configure, addDecorator} from '@storybook/react';

addDecorator(story => (
  <div>
    {story()}
  </div>
));

function loadStories(){
  require('../src/stories/Teste.stories');
}

configure(loadStories, module)