import { MOCK } from '../constants/messges';

const createList = () => {
    return MOCK.map((item, index) => {
        return <li key={index}>{item}</li>
    })
}

const List = () => {
    return <ul>{createList()}</ul>
}

export default List