import * as React from "react";
import renderer from "react-test-renderer";

import Title from "@layout/components/atoms/Title";

it(`renders <Title /> correctly`, () => {
  const tree = renderer.create(<Title>Pokemon</Title>).toJSON();

  expect(tree).toMatchSnapshot();
});
