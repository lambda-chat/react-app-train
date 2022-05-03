import { FC } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';

const BULK_UNIT = 10;
type Props = {
  count?: number;
  add?: (cmunt: number) => void;
  decrement?: () => void;
  increment?: () => void;
};

const CounterBoard: FC<Props> = ({
  count = 0,
  add = () => undefined,
  decrement = () => undefined,
  increment = () => undefined,
}) => (
  <Card>
    <Statistic.Group className="number-board">
      <Statistic.Label>count</Statistic.Label>
      <Statistic.Value>{count}</Statistic.Value>
    </Statistic.Group>
    <Card.Content>
      <div className="ui two buttons">
        <Button color="red" onClick={decrement}>
          -1
        </Button>
        <Button color="green" onClick={increment}>
          +1
        </Button>
      </div>
      <div className="fluid-button">
        <Button fluid color="grey" onClick={() => add(BULK_UNIT)}>
          +{BULK_UNIT}
        </Button>
      </div>
    </Card.Content>
  </Card>
);

export default CounterBoard;
