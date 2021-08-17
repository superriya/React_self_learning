import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id:1,
            name:'Supriya',
            age: '29',
            skills: ['React , ', 'Angular, ', 'Django , ', 'Html']
        },
        {
            id:2,
            name:'Sumit',
            age: '31',
            skills: ['React , ', 'Angular , ',  'Elastic , ',  'Kibana , ',  'NoSql , ',  'Django']
        },
        {
            id:3,
            name:'Poonam',
            age: '22',
            skills: ['Html , ', 'CSS , ', 'Java']
        }
    ]
    const names = ['name1', 'name2', 'name3', 'name4']
    // const personList = persons.map(person => <h4>I am {person.name}. I am {person.age} years old. I have {person.skills} skills</h4>)
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    const nameList = names.map((name, index) => <h3 key={index}>{index} {name}</h3>)
    return (
        <div>
            { personList }
            {nameList}
        </div>
    )
}

export default NameList
