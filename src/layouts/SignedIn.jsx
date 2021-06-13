import { React} from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://im0-tub-com.yandex.net/i?id=b180873c91ee764055937151b7e9e408&n=13"/>
                    <Dropdown pointing="top left" text="Furkan">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                    </Dropdown>
            </Menu.Item>
        </div>
    )
}
