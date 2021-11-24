import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'
import App from 'components/App'
import Root from 'Root'


beforeEach(() => {
    moxios.install()
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
    })
})

afterEach(() => {
    moxios.uninstall()
})

it('can fetch a list of comments and display them', (done) => {
    // Attempt to render entire app

    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )

    // find the 'fetchComments' button and click it

    wrapped.find('.fetch-comments').simulate('click')

    // Expect to find a list of comments

    moxios.wait(() => {
        wrapped.update()
        expect(wrapped.find('li').length).toEqual(2)
        done()
        wrapped.unmount()
    })
})