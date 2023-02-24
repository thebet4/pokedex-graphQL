import * as React from "react";
import renderer from "react-test-renderer";

import Logo from "@layout/components/atoms/Logo";

it(`renders <Logo /> correctly`, () => {
  const tree = renderer.create(<Logo />).toJSON();

  expect(tree).toMatchSnapshot();
});
