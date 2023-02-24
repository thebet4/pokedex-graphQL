import * as React from 'react'
import renderer from 'react-test-renderer'

import PokemonList from '@layout/components/organisms/PokemonList'

it(`renders <PokemonList /> correctly`, () => {
  const mockedData = [
    {
      id: '1',
      name: 'Bulbasaur',
      types: [
        {
          type: {
            name: 'grass',
          },
        },
      ],
      sprites: [
        {
          sprites:
            '{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"}',
        },
      ],
    },
  ]

  const tree = renderer
    .create(<PokemonList data={mockedData} isLoading={false} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
