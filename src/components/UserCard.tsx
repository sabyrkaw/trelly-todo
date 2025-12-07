export const UserCard = ({ id, name, age, email, avatar }) => {
  const defaultAvatar = 'https://placehold.co/128?text=no+photo'

  return (
    <li>
      <img
        src={avatar || defaultAvatar}
        alt={name}
      />
      <p>Name: {name}</p>
      <p>
        Age: {age} {age < 18 && '🔞'}
      </p>
      <p>Email: {email}</p>
    </li>
  )
}
