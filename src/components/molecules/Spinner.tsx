import { FC } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

import './Spinner.css';

const Spinner: FC = () => (
  <Segment className="spinner">
    <Dimmer active inverted>
      <Loader inverted={false}>Lording...</Loader>
    </Dimmer>
  </Segment>
);

export default Spinner;
