import { FC } from "react"
import { useSelector } from "react-redux"

import { add, decrement, increment } from 'actions'
import {CounterState} from 'reducer'

const EnhancedCounterBoard: FC = () => {
  const count = useSelector<CounterState, number)((state) => state.count);
}