import { useState } from 'react'
import './App.css'

function App() {

  const [person, setPerson] = useState({
    name: 'erolas',
    surname: 'rukal',
    age: 29,
    sex: 'male',
    interest: ['ytube', 'front', 'curriera'],
  })

  const [form, setForm] = useState({})
  const [isError, setError] = useState(false)

  function handelInputChange(event) {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handelSetValueBtnClick(key) {
    //положили в переменную значение key что бы отследить состояние массив ли в обьекте или ключ строки
    // чисто для более короткой записи кода
    let valueInputChange = form[key]

    if (!valueInputChange) {
      setError(true)
      return
    }

    if (Array.isArray(person[key])) {
      valueInputChange = [...person[key], form[key]]
    }
    setError(false)
    setPerson({ ...person, [key]: valueInputChange })
  }

  return (
    <div>
      {isError ? (<p>ошибка формы</p>) : ''}
      <input type="text"
        name="name"
        onChange={handelInputChange} />
      <button onClick={() => handelSetValueBtnClick('name')}>задать имя</button>

      <input type="text"
        name="surname"
        onChange={handelInputChange} />
      <button onClick={() => handelSetValueBtnClick('surname')}>задать фамилию</button>

      <input type="number"
        name="age"
        onChange={handelInputChange} />
      <button onClick={() => handelSetValueBtnClick('age')}>задать возраст</button>

      <p>
        пол:
        <label>
          <input type="radio" name='sex' value='male' checked={form.sex === 'male'} onChange={handelInputChange} /> мужской
        </label>
        <label>
          <input type="radio" name='sex' value='female' checked={form.sex === 'female'} onChange={handelInputChange} /> женский
        </label>
        <button
          onClick={() => handelSetValueBtnClick('sex')}
        >задать пол</button>
      </p>

      <input type="text"
        name="interest"
        onChange={handelInputChange} />
      <button onClick={() => handelSetValueBtnClick('interest')}>добавить интерес</button>

      <p>имя: {person.name}</p>
      <p>фамилия: {person.surname}</p>
      <p>возраст: {person.age}</p>
      <p>sex: {person.sex === 'male' ? 'мужской' : 'женский'}</p>
      <p>interes: </p>
      <div>{person.interest.map(function (item) {
        return (
          <p key={item}>{item}</p>
        )
      })}</div>
    </div>
  )
}

export default App
