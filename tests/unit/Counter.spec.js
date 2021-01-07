import { createWrapper, shallowMount } from '@vue/test-utils'
import Counter from '../../src/components/Counter.vue'


describe('Counter.vue', () => {

    // wrap a component
    const wrapper = shallowMount(Counter)

    
    // test case that number increment with clicking the button
    it('increments count when button is clicked', () => {

        // find the button with #plus and click
        wrapper.find('#plus').trigger('click')

        // test a variable is expected
        expect(wrapper.vm.count).toBe(1)
    })


    // the test case continues first test case
    // because of using same component .
    it('decrements count when button is clicked', () => {
        wrapper.find('#minus').trigger('click')
        expect(wrapper.vm.count).toBe(0)
    })


    // the test case doesn't continue other test cases
    // because recreate wrap component
    it('decrements count when button is clicked', () => {
        const wrap = shallowMount(Counter)

        wrapper.find('#minus').trigger('click')
        expect(wrapper.vm.count).toBe(-1)
    })

})

// shallowMount do wrap a component without child components
// wrapper.vm is Vue instance mounted