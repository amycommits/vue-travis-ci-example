import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  const wrapper = shallowMount(Home, {})
  const label = wrapper.find('.display-count')
  const incrementButton = wrapper.find('.increment')
  const decrementButton = wrapper.find('.decrement')
  it('has the default count', () => {
    expect(label.text()).toEqual('0')
  })
  it('increments when the increment button is pushed', async () => {
    await incrementButton.trigger('click')
    expect(label.text()).toEqual('1')
  })
  it('decrements when the decrement button is pushed', async () => {
    await decrementButton.trigger('click')
    expect(label.text()).toEqual('0')
  })
})
