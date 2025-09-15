import { useState } from 'react'
import './App.css'

function App() {

  const [person, setPerson] = useState({
    name: 'erolas',
    surname: 'rukal',
    age: 29,
    sex: 'male',
    hobbies: ['ytube', 'front', 'curriera'],
  })

  const [form, setForm] = useState({
    // name: '',
    // surname: '',
    // age: '',
    // sex: '',
    // hobbies: ['', '', ''],
  })
  const [isError, setError] = useState(false)

  function handelInputChange(event) {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handelSetValueBtnClick(key) {
    if (!form[key]) {
      setError(true)
      return
    }

    setError(false)
    setPerson({ ...person, [key]: form[key] })
  }


// function heandelNameInpuChange(event) {
//   setForm({ ...form, name: event.target.value })
// }
// function handelSendNameBtnClick() {
//   if (!form.name) {
//     setError(true)
//     return
//   }

//   setError(false)
//   setPerson({ ...person, name: form.name })
// }

// function heandelSurNameInpuChange(event) {
//   setForm({ ...form, surname: event.target.value })
// }

// function handelSendSurNameBtnClick() {
//   if (!form.surname) {
//     setError(true)
//     return
//   }
//   setError(false)
//   setPerson({ ...person, surname: form.surname })
// }

// function heandelAgeInpuChange(event) {
//   setForm({ ...form, age: event.target.value })
// }
// function handelAgeBtnClick() {
//   if (!form.age) {
//     setError(true)
//     return
//   }
//   setError(false)
//   setPerson({ ...person, age: parseInt(form.age) })
// }

return (
  <div>
    {isError ? (<p>ошибка формы</p>) : ''}
    <input type="text"
      name="name"
      // value={form.name}
      onChange={handelInputChange} />
    <button onClick={() => handelSetValueBtnClick('name')}>задать имя</button>

    <input type="text"
      name="surname"
      // value={form.surname}
      onChange={handelInputChange} />
    <button onClick={() => handelSetValueBtnClick('surname')}>задать имя</button>

    <input type="number"
      name="age"
      // value={form.age}
      onChange={handelInputChange} />
    <button onClick={() => handelSetValueBtnClick('age')}>задать имя</button>

    <p>имя: {person.name}</p>
    <p>фамилия: {person.surname}</p>
    <p>возраст: {person.age}</p>
    <p>пол: {person.sex}</p>
    <p>interes: </p>
    <div>{person.hobbies.map(function (item) {
      return (
        <p key={item}>{item}</p>
      )
    })}</div>
  </div>
)
}

export default App
