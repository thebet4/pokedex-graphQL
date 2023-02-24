import * as React from 'react'
import renderer from 'react-test-renderer'

import RegularText from '@layout/components/atoms/RegularText'

it(`renders <RegularText /> correctly`, () => {
  const tree = renderer.create(<RegularText>Pokemon</RegularText>).toJSON()

  expect(tree).toMatchSnapshot()
})
