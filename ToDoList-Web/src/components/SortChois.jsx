import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
    { key: 1, text: 'Created Date', value: "createdDate" },
    { key: 2, text: 'Modified Date', value: "modifiedDate" },
]

const SortChois = () => (
    <Menu compact>
        <Dropdown text='Sort By' options={options}  simple item />
    </Menu>
)

export default SortChois
