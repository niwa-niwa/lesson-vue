import {mount} from '@vue/test-utils'
import RemoveUser from '@/views/RemoveUser.vue'

describe("user", () => {
  const adminPropsData = {
    id: 1,
    name: 'ユーザー1',
    isAdmin: true,
  }
  const userPropsData = {
    id: 1,
    name: 'ユーザー1',
    isAdmin: false,
  }
  test('emitされるか', () => {
    const wrapper = mount(RemoveUser, {
      propsData: adminPropsData
    })
    wrapper.find('button').trigger('click')
    // イベント発火してるかどうか
    expect(wrapper.emitted('removeUser')).toBeTruthy()
    // emit時にidが渡されてくるかどうか
    expect(wrapper.emitted('removeUser')[0]).toEqual([{id: 1}])
  })
  test('nameが正しく表示されているか', () => {
    const wrapper = mount(RemoveUser, {
      propsData: adminPropsData
    })
    expect(wrapper.find('span').text()).toBe(adminPropsData.name)
  })
  test('isAdminの値によって削除ボタンが表示されてるか', () => {
    const adminWrapper = mount(RemoveUser, {
      propsData: adminPropsData
    })
    const userWrapper = mount(RemoveUser, {
      propsData: userPropsData
    })
    expect(adminWrapper.find('button').exists()).toBeTruthy()
    expect(userWrapper.find('button').exists()).toBeFalsy()
  })
})
