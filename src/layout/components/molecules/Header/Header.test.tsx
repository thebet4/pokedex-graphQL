import * as React from "react";
import renderer from "react-test-renderer";

import Header from "@layout/components/molecules/Header";

it(`renders <Header /> correctly`, () => {
  const tree = renderer.create(<Header />).toJSON();

  expect(tree).toMatchSnapshot();
});
