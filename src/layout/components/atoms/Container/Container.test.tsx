import * as React from "react";
import renderer from "react-test-renderer";

import Container from "@layout/components/atoms/Container";
import Title from "@layout/components/atoms/Title";

it(`renders <Container /> correctly`, () => {
  const tree = renderer
    .create(
      <Container>
        <Title>Pokemon</Title>
      </Container>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
