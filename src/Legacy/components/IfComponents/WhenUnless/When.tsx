import type { FC } from 'react';
import { getConditionResult } from '../getConditionResults';
import { render } from '../render';
import type { ComponentWithConditionPropsWithFunctionChildren } from '../types';

/**
 * <When condition={condition}>rendering condtion true</When>
 */
const When: FC<ComponentWithConditionPropsWithFunctionChildren> = ({
  condition,
  children = null,
}) => {
  const conditionResult = Boolean(getConditionResult(condition));

  return conditionResult && children ? render({ children }) : null;
};

export default When;
