import { GreetProps } from './greet.types'

const Greet = (props: GreetProps) => {
  return <h1>Hello {props.name ? props.name : 'guest'}</h1>
}

export default Greet
