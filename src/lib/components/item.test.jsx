import React from 'react'
import renderer from 'react-test-renderer'

import { describe, expect, test } from 'vitest'
import { TurnstoneContextProvider } from '../context/turnstone.jsx'
import Item from './item.jsx'

const customStyles = {
  item: 'item-class',
  highlightedItem: 'highlighted-item-class',
  topItem: 'top-item-class',
  split: 'split-class',
  splitChar: 'split-char-class'
}
const item = {
  text: 'Chicago, Illinois, United States',
  value: {
    name: 'Chicago, Illinois, United States',
    coords: '41.882304590139135, -87.62327214400634'
  }
}

const component = renderer.create(
  <TurnstoneContextProvider styles={customStyles} text={'Chi'}>
   <Item
      index={0}
      key={'item0'}
      item={item}
    />
  </TurnstoneContextProvider>
)
let tree = component.toJSON()


describe('Item', () => {
  test('Component renders correctly', () => {
    expect(tree).toMatchSnapshot()
  })

  test('Link changes the class when hovered', () => {
    // Manually trigger onMouseEnter callback and rerender
    tree.props.onMouseEnter()
    tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('Link changes the class when hovered', () => {
    // Manually trigger onMouseEnter callback and rerender
    tree.props.onMouseDown()
    tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})