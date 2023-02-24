import * as React from 'react'
import renderer from 'react-test-renderer'

import BoldText from '@layout/components/atoms/BoldText'

it(`renders <BoldText /> correctly`, () => {
  const tree = renderer.create(<BoldText>Pokemon</BoldText>).toJSON()

  expect(tree).toMatchSnapshot()
})
