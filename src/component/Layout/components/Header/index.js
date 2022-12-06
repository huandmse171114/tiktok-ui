import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import images from '~/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

// className hỗ trợ việc viết class name theo chuẩn thông thường khi sử dụng css

function Header() {
    const [searchResult, setSearchResult] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        console.log('search for input...: ', inputValue)
    }, [inputValue])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3, 4])
        }, 3000)
    })

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/*--------------------------- Header Logo ------------------- */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                {/*--------------------------- Header Search ------------------- */}
                <Tippy
                    interactive={true}
                    visible={visible}
                    render={(attrs) => (
                        <div
                            className={cx('dropdown')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            Hello
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Search accounts and videos"
                            spellCheck="false"
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            icon={faSpinner}
                            className={cx('loading')}
                        />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                {/*--------------------------- Header logo ------------------- */}
                <div className={cx('action')}></div>

                {/* Search */}
            </div>
        </header>
    )
}

export default Header
